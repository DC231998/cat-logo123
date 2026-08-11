/* ============================================================
   MY ENGLISH NOTEBOOK — Lógica de la aplicación
   ============================================================ */

const STORAGE_KEY = "english_notebook_progress_v1";
const LEVEL_ORDER = LEVELS_INFO.map((l) => l.id);

const XP_LEVELS = [
  { min: 0, label: "Newcomer", name: "🐣 Newcomer — recién llegado" },
  { min: 150, label: "Learner", name: "📘 Learner — aprendiz" },
  { min: 400, label: "Explorer", name: "🧭 Explorer — explorador" },
  { min: 800, label: "Achiever", name: "⛰️ Achiever — en ascenso" },
  { min: 1400, label: "Fluent Star", name: "🌟 Fluent Star — casi bilingüe" },
];

function emptyLevelMap() {
  const m = {};
  LEVEL_ORDER.forEach((id) => (m[id] = []));
  return m;
}

function defaultProgress() {
  return {
    currentLevel: "A1",
    completedByLevel: emptyLevelMap(),
    perfectByLevel: emptyLevelMap(),
    xp: 0,
    streak: 0,
    lastStudyDate: null,
    earnedBadges: [],
  };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    return mergeProgress(JSON.parse(raw));
  } catch (e) {
    return defaultProgress();
  }
}

function mergeProgress(parsed) {
  const base = defaultProgress();
  const merged = Object.assign(base, parsed || {});
  merged.completedByLevel = Object.assign(emptyLevelMap(), parsed && parsed.completedByLevel);
  merged.perfectByLevel = Object.assign(emptyLevelMap(), parsed && parsed.perfectByLevel);
  if (!LEVEL_ORDER.includes(merged.currentLevel)) merged.currentLevel = "A1";
  if (!Array.isArray(merged.earnedBadges)) merged.earnedBadges = [];
  return merged;
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

let progress = loadProgress();
let currentLesson = null;
let currentExerciseIndex = 0;
let currentScore = 0;
let currentSessionPerfect = true;
let matchState = null;

/* ============================================================
   NAVEGACIÓN ENTRE VISTAS
   ============================================================ */
const views = {
  map: document.getElementById("view-map"),
  lesson: document.getElementById("view-lesson"),
  badges: document.getElementById("view-badges"),
  profile: document.getElementById("view-profile"),
};

function showView(name) {
  Object.values(views).forEach((v) => v.classList.add("hidden"));
  views[name].classList.remove("hidden");
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === name);
  });
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.view === "map") renderMap();
    if (btn.dataset.view === "badges") renderBadges();
    if (btn.dataset.view === "profile") renderProfile();
    showView(btn.dataset.view);
  });
});

document.getElementById("lesson-back-btn").addEventListener("click", () => {
  renderMap();
  showView("map");
});

/* ============================================================
   XP / RANGO
   ============================================================ */
function getCurrentXpRank() {
  let current = XP_LEVELS[0];
  for (const lvl of XP_LEVELS) {
    if (progress.xp >= lvl.min) current = lvl;
  }
  return current;
}

function updateHeaderStats() {
  document.getElementById("stat-xp").textContent = progress.xp;
  document.getElementById("stat-streak").textContent = progress.streak;
}

/* ============================================================
   NIVELES CEFR (A1, A2, B1, B2)
   ============================================================ */
function isLevelUnlocked(levelId) {
  const idx = LEVEL_ORDER.indexOf(levelId);
  if (idx <= 0) return true;
  const prevLevelId = LEVEL_ORDER[idx - 1];
  const prevTotal = LESSONS_BY_LEVEL[prevLevelId].length;
  const prevDone = (progress.completedByLevel[prevLevelId] || []).length;
  return prevDone >= prevTotal;
}

function renderLevelTabs() {
  const wrap = document.getElementById("level-tabs");
  wrap.innerHTML = "";
  LEVELS_INFO.forEach((lvl) => {
    const unlocked = isLevelUnlocked(lvl.id);
    const btn = document.createElement("button");
    btn.className = "level-tab" + (lvl.id === progress.currentLevel ? " active" : "") + (!unlocked ? " locked" : "");
    btn.disabled = !unlocked;
    btn.innerHTML = `<span class="level-tab-icon">${unlocked ? lvl.icon : "🔒"}</span><span>${lvl.id}</span>`;
    btn.title = lvl.name;
    if (unlocked) {
      btn.addEventListener("click", () => {
        progress.currentLevel = lvl.id;
        saveProgress();
        renderMap();
      });
    }
    wrap.appendChild(btn);
  });
}

/* ============================================================
   VISTA: RUTA / MAPA
   ============================================================ */
function renderMap() {
  updateHeaderStats();
  renderLevelTabs();

  const levelId = progress.currentLevel;
  const levelInfo = LEVELS_INFO.find((l) => l.id === levelId);
  const lessons = LESSONS_BY_LEVEL[levelId];
  const completed = progress.completedByLevel[levelId] || [];

  document.getElementById("level-label").textContent = `Nivel ${levelId} · ${levelInfo.name}`;
  document.getElementById("level-name").textContent = `${levelInfo.icon} ${levelInfo.subtitle}`;
  const pct = Math.round((completed.length / lessons.length) * 100);
  document.getElementById("level-progress-fill").style.width = pct + "%";
  document.getElementById("level-progress-text").textContent =
    `${completed.length} / ${lessons.length} lecciones completadas`;

  const container = document.getElementById("route-container");
  container.innerHTML = "";

  lessons.forEach((lesson, idx) => {
    const isCompleted = completed.includes(lesson.id);
    const prevDone = idx === 0 || completed.includes(lessons[idx - 1].id);
    const isLocked = !isCompleted && !prevDone;
    const isCurrent = !isCompleted && prevDone;

    const el = document.createElement("button");
    el.className = "route-stop" + (isCompleted ? " completed" : "") + (isCurrent ? " current" : "") + (isLocked ? " locked" : "");
    el.disabled = isLocked;
    el.innerHTML = `
      <div class="route-stop-num">${lesson.icon}</div>
      <div class="route-stop-body">
        <h3>${lesson.id}. ${lesson.title}</h3>
        <p>${lesson.subtitle}</p>
      </div>
      ${isCompleted ? '<span class="route-stop-check">✅</span>' : isLocked ? '<span class="route-stop-lock">🔒</span>' : ""}
    `;
    if (!isLocked) {
      el.addEventListener("click", () => openLesson(lesson.id));
    }
    container.appendChild(el);
  });
}

/* ============================================================
   VISTA: LECCIÓN — INTRO
   ============================================================ */
function openLesson(id) {
  const lessons = LESSONS_BY_LEVEL[progress.currentLevel];
  currentLesson = lessons.find((l) => l.id === id);
  currentExerciseIndex = 0;
  currentScore = 0;
  currentSessionPerfect = true;

  document.getElementById("lesson-icon").textContent = currentLesson.icon;
  document.getElementById("lesson-title").textContent = `${currentLesson.id}. ${currentLesson.title}`;
  document.getElementById("lesson-subtitle").textContent = currentLesson.subtitle;

  const vocabGrid = document.getElementById("vocab-grid");
  vocabGrid.innerHTML = currentLesson.vocab.map((v) => `
    <div class="vocab-card">
      <span class="emoji">${v.emoji || "🇬🇧"}</span>
      <span class="fr">${v.en}</span>
      <span class="es">${v.es}</span>
    </div>
  `).join("");

  document.getElementById("grammar-title").textContent = "✏️ " + currentLesson.grammar.title;
  document.getElementById("grammar-text").textContent = currentLesson.grammar.text;

  const examplesBox = document.getElementById("examples-box");
  examplesBox.innerHTML = currentLesson.grammar.examples.map((ex) => `
    <div class="example-line">${ex.en}<span class="es">${ex.es}</span></div>
  `).join("");

  document.getElementById("lesson-intro").classList.remove("hidden");
  document.getElementById("exercise-block").classList.add("hidden");
  document.getElementById("lesson-result").classList.add("hidden");

  showView("lesson");
}

document.getElementById("start-exercises-btn").addEventListener("click", () => {
  document.getElementById("lesson-intro").classList.add("hidden");
  document.getElementById("exercise-block").classList.remove("hidden");
  renderExercise();
});

/* ============================================================
   EJERCICIOS
   ============================================================ */
function renderExercise() {
  const total = currentLesson.exercises.length;
  const ex = currentLesson.exercises[currentExerciseIndex];

  document.getElementById("exercise-progress-fill").style.width = `${(currentExerciseIndex / total) * 100}%`;
  document.getElementById("exercise-progress-label").textContent = `Ejercicio ${currentExerciseIndex + 1} de ${total}`;

  const feedback = document.getElementById("exercise-feedback");
  feedback.classList.add("hidden");
  feedback.textContent = "";
  const nextBtn = document.getElementById("exercise-next-btn");
  nextBtn.classList.add("hidden");
  nextBtn.onclick = null;

  const card = document.getElementById("exercise-card");

  if (ex.type === "mcq") {
    card.innerHTML = `<h3>${ex.question}</h3>` + ex.options.map((opt, i) => `
      <button class="option-btn" data-i="${i}">${opt}</button>
    `).join("");
    card.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => handleMcqAnswer(btn, ex));
    });
  }

  if (ex.type === "fill") {
    card.innerHTML = `
      <h3>${ex.question}</h3>
      <div class="fill-input-row">
        <input type="text" class="fill-input" id="fill-input" placeholder="Escribe tu respuesta..." autocomplete="off" autocapitalize="off" />
        <button class="fill-submit" id="fill-submit">Enviar</button>
      </div>
      <p class="fill-hint">💡 ${ex.hint}</p>
    `;
    const input = document.getElementById("fill-input");
    const submit = () => handleFillAnswer(input, ex);
    document.getElementById("fill-submit").addEventListener("click", submit);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") submit(); });
  }

  if (ex.type === "match") {
    renderMatchExercise(ex, card);
  }
}

function lockOptions() {
  document.querySelectorAll(".option-btn").forEach((b) => (b.disabled = true));
}

function showFeedback(correct, correctAnswerText) {
  const feedback = document.getElementById("exercise-feedback");
  feedback.classList.remove("hidden");
  feedback.className = "exercise-feedback " + (correct ? "correct" : "incorrect");
  feedback.textContent = correct ? "✅ ¡Correcto!" : `❌ Respuesta correcta: ${correctAnswerText}`;
  document.getElementById("exercise-next-btn").classList.remove("hidden");
  document.getElementById("exercise-next-btn").onclick = advanceExercise;
}

function handleMcqAnswer(btn, ex) {
  lockOptions();
  const i = Number(btn.dataset.i);
  const correct = i === ex.answer;
  btn.classList.add(correct ? "correct" : "incorrect");
  if (!correct) {
    document.querySelectorAll(".option-btn")[ex.answer].classList.add("correct");
  } else {
    currentScore++;
  }
  if (!correct) currentSessionPerfect = false;
  showFeedback(correct, ex.options[ex.answer]);
}

function handleFillAnswer(input, ex) {
  document.getElementById("fill-submit").disabled = true;
  input.disabled = true;
  const val = (input.value || "").trim().toLowerCase();
  const correct = val === ex.answer.trim().toLowerCase();
  if (correct) currentScore++;
  else currentSessionPerfect = false;
  showFeedback(correct, ex.answer);
}

function renderMatchExercise(ex, card) {
  const pairs = ex.pairs;
  const shuffledEs = [...pairs].sort(() => Math.random() - 0.5);
  matchState = { matched: 0, selectedEn: null, total: pairs.length, mistakes: 0 };

  card.innerHTML = `
    <h3>Empareja cada palabra en inglés con su traducción</h3>
    <div class="match-columns">
      <div class="match-col" id="match-fr"></div>
      <div class="match-col" id="match-es"></div>
    </div>
  `;
  const enCol = document.getElementById("match-fr");
  const esCol = document.getElementById("match-es");

  pairs.forEach((p) => {
    const item = document.createElement("button");
    item.className = "match-item";
    item.textContent = p.en;
    item.dataset.en = p.en;
    item.addEventListener("click", () => selectMatchEn(item, p));
    enCol.appendChild(item);
  });

  shuffledEs.forEach((p) => {
    const item = document.createElement("button");
    item.className = "match-item";
    item.textContent = p.es;
    item.dataset.es = p.es;
    item.dataset.en = p.en;
    item.addEventListener("click", () => selectMatchEs(item));
    esCol.appendChild(item);
  });
}

function selectMatchEn(item, pair) {
  if (item.classList.contains("matched")) return;
  document.querySelectorAll("#match-fr .match-item").forEach((i) => i.classList.remove("selected"));
  item.classList.add("selected");
  matchState.selectedEn = { item, pair };
}

function selectMatchEs(item) {
  if (item.classList.contains("matched") || !matchState.selectedEn) return;
  const { item: enItem, pair } = matchState.selectedEn;
  const isCorrect = item.dataset.en === pair.en;

  if (isCorrect) {
    enItem.classList.remove("selected");
    enItem.classList.add("matched");
    item.classList.add("matched");
    matchState.matched++;
    matchState.selectedEn = null;
    if (matchState.matched === matchState.total) {
      if (matchState.mistakes > 0) currentSessionPerfect = false;
      currentScore++;
      showFeedback(true, "¡Todas las parejas correctas!");
    }
  } else {
    matchState.mistakes++;
    currentSessionPerfect = false;
    item.classList.add("wrong");
    enItem.classList.add("wrong");
    setTimeout(() => {
      item.classList.remove("wrong");
      enItem.classList.remove("wrong", "selected");
    }, 350);
    matchState.selectedEn = null;
  }
}

function advanceExercise() {
  currentExerciseIndex++;
  if (currentExerciseIndex >= currentLesson.exercises.length) {
    finishLesson();
  } else {
    renderExercise();
  }
}

/* ============================================================
   FIN DE LECCIÓN — XP, RACHA, INSIGNIAS
   ============================================================ */
function finishLesson() {
  const total = currentLesson.exercises.length;
  document.getElementById("exercise-progress-fill").style.width = "100%";

  const levelId = progress.currentLevel;
  const completedList = progress.completedByLevel[levelId];
  const perfectList = progress.perfectByLevel[levelId];

  const alreadyCompleted = completedList.includes(currentLesson.id);
  const baseXp = 50;
  const bonusXp = currentSessionPerfect ? 20 : 0;
  const earnedXp = alreadyCompleted ? Math.round((baseXp + bonusXp) / 2) : baseXp + bonusXp;

  progress.xp += earnedXp;
  if (!alreadyCompleted) {
    completedList.push(currentLesson.id);
  }
  if (currentSessionPerfect && !perfectList.includes(currentLesson.id)) {
    perfectList.push(currentLesson.id);
  }

  updateStreak();

  const newBadges = checkNewBadges();
  saveProgress();

  document.getElementById("exercise-block").classList.add("hidden");
  const resultSection = document.getElementById("lesson-result");
  resultSection.classList.remove("hidden");

  document.getElementById("result-emoji").textContent = currentSessionPerfect ? "🏅" : "🎉";
  document.getElementById("result-title").textContent = currentSessionPerfect ? "¡Lección perfecta!" : "¡Lección completada!";
  document.getElementById("result-score").textContent = `${currentScore} / ${total} correctas`;
  document.getElementById("result-xp").textContent = `+${earnedXp} ✈️ puntos de experiencia`;

  const badgesWrap = document.getElementById("result-badges");
  badgesWrap.innerHTML = newBadges.map((b) => `<span class="result-badge-chip">${b.icon} ${b.title}</span>`).join("");

  document.getElementById("result-continue-btn").onclick = () => {
    renderMap();
    showView("map");
  };

  updateHeaderStats();
}

function updateStreak() {
  const todayKey = new Date().toDateString();
  if (progress.lastStudyDate === todayKey) {
    return; // ya contabilizado hoy
  }
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toDateString();

  if (progress.lastStudyDate === yesterdayKey) {
    progress.streak += 1;
  } else {
    progress.streak = 1;
  }
  progress.lastStudyDate = todayKey;
}

function checkNewBadges() {
  const unlocked = [];
  MILESTONE_BADGES.forEach((badge) => {
    if (!progress.earnedBadges.includes(badge.id) && badge.check(progress)) {
      progress.earnedBadges.push(badge.id);
      unlocked.push(badge);
    }
  });
  return unlocked;
}

/* ============================================================
   VISTA: INSIGNIAS
   ============================================================ */
function renderBadges() {
  const grid = document.getElementById("badges-grid");
  grid.innerHTML = MILESTONE_BADGES.map((b) => {
    const unlocked = progress.earnedBadges.includes(b.id);
    return `
      <div class="badge-card ${unlocked ? "unlocked" : ""}">
        <span class="badge-icon">${b.icon}</span>
        <h4>${b.title}</h4>
        <p>${unlocked ? b.desc : "🔒 " + b.desc}</p>
      </div>
    `;
  }).join("");
}

/* ============================================================
   VISTA: PERFIL
   ============================================================ */
function renderProfile() {
  const rank = getCurrentXpRank();
  document.getElementById("profile-level").textContent = rank.name;
  document.getElementById("profile-xp").textContent = `${progress.xp} ✈️`;
  document.getElementById("profile-streak").textContent = `${progress.streak} 🔥 días`;
  document.getElementById("profile-lessons").textContent = `${totalCompleted(progress)} / ${totalLessonsCount()}`;
  document.getElementById("profile-badges").textContent = `${progress.earnedBadges.length} / ${MILESTONE_BADGES.length}`;

  const levelBreakdown = document.getElementById("profile-level-breakdown");
  levelBreakdown.innerHTML = LEVELS_INFO.map((lvl) => {
    const done = (progress.completedByLevel[lvl.id] || []).length;
    const total = LESSONS_BY_LEVEL[lvl.id].length;
    return `<div class="profile-row"><span>${lvl.icon} ${lvl.id} — ${lvl.name}</span><strong>${done} / ${total}</strong></div>`;
  }).join("");
}

document.getElementById("reset-progress-btn").addEventListener("click", () => {
  if (confirm("¿Seguro que quieres reiniciar todo tu progreso? Esta acción no se puede deshacer.")) {
    progress = defaultProgress();
    saveProgress();
    renderProfile();
    renderMap();
    updateHeaderStats();
  }
});

/* ============================================================
   GUARDAR / CARGAR PROGRESO EN JSON
   ============================================================ */
function exportProgressToJson() {
  const dataStr = JSON.stringify(progress, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const dateStr = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `my-english-notebook-progress-${dateStr}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importProgressFromJson(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      progress = mergeProgress(parsed);
      saveProgress();
      renderProfile();
      renderMap();
      updateHeaderStats();
      showJsonStatus("✅ Progreso cargado correctamente.", true);
    } catch (err) {
      showJsonStatus("❌ El archivo no es un JSON válido de progreso.", false);
    }
  };
  reader.readAsText(file);
}

function showJsonStatus(message, ok) {
  const el = document.getElementById("json-status");
  if (!el) return;
  el.textContent = message;
  el.className = "json-status " + (ok ? "ok" : "error");
  el.classList.remove("hidden");
  setTimeout(() => el.classList.add("hidden"), 4000);
}

document.getElementById("export-json-btn").addEventListener("click", exportProgressToJson);

document.getElementById("import-json-input").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) importProgressFromJson(file);
  e.target.value = "";
});

/* ============================================================
   INICIO
   ============================================================ */
updateHeaderStats();
renderMap();
