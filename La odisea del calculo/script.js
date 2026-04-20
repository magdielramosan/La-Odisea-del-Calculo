const STORAGE_KEY = "odisea-calculo-save-v2";
const SETTINGS_KEY = "odisea-calculo-settings-v2";
const FIRST_BEAT = "prologue_banner";

const CHAPTERS = [
  {
    id: "prologue",
    label: "Prólogo",
    title: "El gran agobio",
    summary: "Alex descubre que su miedo al cálculo nace de verlo como un sistema cerrado, sin biografía ni contexto.",
    implemented: true,
  },
  {
    id: "archimedes",
    label: "Capítulo I",
    title: "Arquímedes y el arte de agotar",
    summary: "La geometría griega muestra que el cálculo tiene raíces antiguas en el estudio riguroso del área y de las curvas.",
    implemented: true,
  },
  {
    id: "kepler-cavalieri",
    label: "Capítulo II",
    title: "Kepler, Cavalieri y los indivisibles",
    summary: "Medir barriles, seccionar sólidos y pensar en rebanadas abre una nueva imaginación para el volumen y el continuo.",
    implemented: true,
  },
  {
    id: "fermat",
    label: "Capítulo III",
    title: "Fermat y el filo de la tangencia",
    summary: "Máximos, mínimos y tangentes preparan el pensamiento de la derivada antes de que exista su nombre moderno.",
    implemented: true,
  },
  {
    id: "wallis",
    label: "Capítulo IV",
    title: "Wallis y el vértigo del infinito",
    summary: "El cálculo se vuelve más simbólico, algebraico y atrevido gracias a los patrones infinitos y la notación.",
    implemented: true,
  },
  {
    id: "barrow",
    label: "Capítulo V",
    title: "Barrow y el puente geométrico",
    summary: "La relación entre tangentes y áreas aparece como una intuición decisiva hacia el teorema fundamental.",
    implemented: true,
  },
  {
    id: "newton",
    label: "Capítulo VI",
    title: "Newton y las fluxiones",
    summary: "El cálculo entra en diálogo con el movimiento, el tiempo y la naturaleza durante los años de peste.",
    implemented: true,
  },
  {
    id: "leibniz",
    label: "Capítulo VII",
    title: "Leibniz y el alfabeto del cálculo",
    summary: "Nacen los signos que Alex usa en clase: diferenciales, integrales y un lenguaje sorprendentemente portátil.",
    implemented: true,
  },
  {
    id: "priority-dispute",
    label: "Capítulo VIII",
    title: "La sombra de la disputa",
    summary: "La historia humana del cálculo incluye orgullo, publicación tardía, acusaciones y comunidades enfrentadas.",
    implemented: true,
  },
  {
    id: "legacy",
    label: "Capítulo IX",
    title: "Los herederos del análisis",
    summary: "Euler, Lagrange y la tradición del rigor convierten el cálculo en una lengua universal y más precisa.",
    implemented: true,
  },
  {
    id: "finale",
    label: "Capítulo Final",
    title: "El despertar de Alex",
    summary: "De vuelta al aula, Alex ya no ve un muro de símbolos: ve una conversación de siglos sobre el cambio.",
    implemented: true,
  },
];

const CHAPTER_INDEX = Object.fromEntries(CHAPTERS.map((chapter, index) => [chapter.id, index]));

const CHARACTERS = {
  alex: {
    name: "Alex",
    codexName: "Alex",
    assetBase: "assets/characters/alex/alex_{pose}.png",
    skin: "#c48c69",
    hair: "#231815",
    accent: "#4e89cc",
    secondary: "#1e3f67",
    outfit: "hoodie",
    hairStyle: "messy",
    beard: false,
    prop: "notebook",
    codex: {
      era: "Actualidad universitaria",
      contribution: "No inventa una teoría matemática; encarna el desconcierto contemporáneo ante un lenguaje que suele enseñarse ya terminado.",
      reflection: "Cuando le puse rostro e historia al cálculo, dejó de parecerme una autoridad fría y empezó a sentirse como una búsqueda humana.",
    },
  },
  profesor: {
    name: "Profesor",
    assetBase: "assets/characters/profesor/profesor_{pose}.png",
    skin: "#b88363",
    hair: "#3f312b",
    accent: "#6b879f",
    secondary: "#2d4050",
    outfit: "coat",
    hairStyle: "short",
    beard: true,
    prop: "chalk",
  },
  archimedes: {
    name: "Arquímedes",
    codexName: "Arquímedes",
    assetBase: "assets/characters/archimedes/archimedes_{pose}.png",
    skin: "#d3a17c",
    hair: "#ece8dc",
    accent: "#d4b06a",
    secondary: "#725332",
    outfit: "robe",
    hairStyle: "wild",
    beard: true,
    prop: "compass",
    codex: {
      era: "Siglo III a. C., Siracusa",
      contribution: "Usó el método de agotamiento y razonamientos geométricos finísimos para estudiar áreas y volúmenes curvos con rigor.",
      reflection: "Con Arquímedes entendí que la integral tiene ancestros mucho más antiguos que su símbolo.",
    },
  },
  kepler: {
    name: "Kepler",
    codexName: "Johannes Kepler",
    assetBase: "assets/characters/kepler/kepler_{pose}.png",
    skin: "#cb9a74",
    hair: "#5b432e",
    accent: "#9dc6e0",
    secondary: "#35576e",
    outfit: "coat",
    hairStyle: "short",
    beard: true,
    prop: "star-map",
    codex: {
      era: "1615-1635, Europa",
      contribution: "Estudió medidas y volúmenes en contextos prácticos y astronómicos, empujando problemas que exigían técnicas nuevas.",
      reflection: "Kepler me recordó que la matemática avanza muchas veces porque el mundo exige medir algo concreto.",
    },
  },
  cavalieri: {
    name: "Cavalieri",
    codexName: "Bonaventura Cavalieri",
    assetBase: "assets/characters/cavalieri/cavalieri_{pose}.png",
    skin: "#bb8967",
    hair: "#402c1f",
    accent: "#c7a06b",
    secondary: "#694421",
    outfit: "monk",
    hairStyle: "tonsure",
    beard: false,
    prop: "scroll",
    codex: {
      era: "Siglo XVII",
      contribution: "Desarrolló el método de los indivisibles, imaginando áreas y sólidos como colecciones de elementos seccionales.",
      reflection: "Cavalieri me ayudó a mirar una figura como si estuviera hecha de muchas capas casi invisibles.",
    },
  },
  fermat: {
    name: "Fermat",
    codexName: "Pierre de Fermat",
    assetBase: "assets/characters/fermat/fermat_{pose}.png",
    skin: "#c79268",
    hair: "#3a241c",
    accent: "#b77e6f",
    secondary: "#573531",
    outfit: "coat",
    hairStyle: "short",
    beard: false,
    prop: "quill",
    codex: {
      era: "Francia, década de 1630",
      contribution: "Ideó procedimientos para tangentes, máximos y mínimos usando comparaciones entre cantidades casi iguales.",
      reflection: "Fermat me hizo sentir el momento extraño en que una derivada existe antes de llamarse derivada.",
    },
  },
  wallis: {
    name: "Wallis",
    codexName: "John Wallis",
    assetBase: "assets/characters/wallis/wallis_{pose}.png",
    skin: "#cc9470",
    hair: "#f0eee9",
    accent: "#d0a25e",
    secondary: "#68502d",
    outfit: "gown",
    hairStyle: "wig",
    beard: false,
    prop: "scroll",
    codex: {
      era: "Oxford, 1655",
      contribution: "Impulsó una aritmetización más agresiva del análisis y popularizó el símbolo de infinito.",
      reflection: "Wallis volvió el cálculo menos geométrico y más simbólico; más arriesgado, pero también más expansivo.",
    },
  },
  barrow: {
    name: "Barrow",
    codexName: "Isaac Barrow",
    assetBase: "assets/characters/barrow/barrow_{pose}.png",
    skin: "#be896a",
    hair: "#513a2c",
    accent: "#b9a17d",
    secondary: "#534232",
    outfit: "gown",
    hairStyle: "short",
    beard: true,
    prop: "book",
    codex: {
      era: "Cambridge, 1669",
      contribution: "Visualizó geométricamente la relación inversa entre tangentes y cuadraturas, abriendo el camino del teorema fundamental.",
      reflection: "Con Barrow vi que derivar e integrar no eran temas separados, sino dos gestos que se responden.",
    },
  },
  newton: {
    name: "Newton",
    codexName: "Isaac Newton",
    assetBase: "assets/characters/newton/newton_{pose}.png",
    skin: "#c9956e",
    hair: "#dfdccf",
    accent: "#8ba2d5",
    secondary: "#32425e",
    outfit: "coat",
    hairStyle: "long-wig",
    beard: false,
    prop: "apple",
    codex: {
      era: "1665-1671, Inglaterra",
      contribution: "Desarrolló el método de fluxiones para estudiar magnitudes cambiantes, ligándolo al tiempo, el movimiento y la física.",
      reflection: "Newton me hizo sentir que el cálculo no solo sirve para curvas en papel, sino para fenómenos que se mueven.",
    },
  },
  leibniz: {
    name: "Leibniz",
    codexName: "Gottfried Wilhelm Leibniz",
    assetBase: "assets/characters/leibniz/leibniz_{pose}.png",
    skin: "#d3a178",
    hair: "#f2ece0",
    accent: "#d8b36d",
    secondary: "#6b5535",
    outfit: "coat",
    hairStyle: "long-wig",
    beard: false,
    prop: "integral",
    codex: {
      era: "1673-1675, París y Hannover",
      contribution: "Creó la notación diferencial e integral que terminó volviéndose estándar por su claridad y potencia operativa.",
      reflection: "Con Leibniz aprendí que una buena notación no solo describe una idea: la multiplica.",
    },
  },
  huygens: {
    name: "Huygens",
    assetBase: "assets/characters/huygens/huygens_{pose}.png",
    skin: "#c89471",
    hair: "#d8d2c4",
    accent: "#95b7c8",
    secondary: "#416070",
    outfit: "coat",
    hairStyle: "wig",
    beard: false,
    prop: "ruler",
  },
  euler: {
    name: "Euler",
    codexName: "Leonhard Euler",
    assetBase: "assets/characters/euler/euler_{pose}.png",
    skin: "#cea07a",
    hair: "#e7e1d2",
    accent: "#a8c7bf",
    secondary: "#42625d",
    outfit: "coat",
    hairStyle: "wig",
    beard: false,
    prop: "book",
    codex: {
      era: "Siglo XVIII",
      contribution: "Extendió el cálculo al estudio de funciones, mecánica, series y problemas inmensos del análisis matemático.",
      reflection: "Euler hizo que el cálculo dejara de ser una herramienta especializada y se sintiera como un idioma universal.",
    },
  },
  lagrange: {
    name: "Lagrange",
    codexName: "Joseph-Louis Lagrange",
    assetBase: "assets/characters/lagrange/lagrange_{pose}.png",
    skin: "#d6a47e",
    hair: "#ece7dd",
    accent: "#bba9d9",
    secondary: "#5d4f74",
    outfit: "coat",
    hairStyle: "powdered",
    beard: false,
    prop: "quill",
    codex: {
      era: "Siglo XVIII",
      contribution: "Buscó reformular el cálculo desde una visión más analítica y refinada, consolidando parte de su lenguaje moderno.",
      reflection: "Lagrange me enseñó que incluso después del descubrimiento llega la etapa de afinar y ordenar.",
    },
  },
  cauchy: {
    name: "Cauchy",
    codexName: "Augustin-Louis Cauchy",
    assetBase: "assets/characters/cauchy/cauchy_{pose}.png",
    skin: "#c59472",
    hair: "#47352d",
    accent: "#9ab2d5",
    secondary: "#3b4d68",
    outfit: "coat",
    hairStyle: "short",
    beard: false,
    prop: "book",
    codex: {
      era: "Siglo XIX",
      contribution: "Ayudó a formalizar el análisis con definiciones más precisas de continuidad, convergencia y límite.",
      reflection: "Cauchy me mostró que el rigor no enfría una idea: la vuelve confiable.",
    },
  },
  weierstrass: {
    name: "Weierstrass",
    codexName: "Karl Weierstrass",
    assetBase: "assets/characters/weierstrass/weierstrass_{pose}.png",
    skin: "#c08f6f",
    hair: "#2f221c",
    accent: "#c8b284",
    secondary: "#5f472a",
    outfit: "coat",
    hairStyle: "short",
    beard: true,
    prop: "quill",
    codex: {
      era: "Siglo XIX",
      contribution: "Empujó una formulación rigurosa del límite y del análisis, haciendo menos ambiguo el uso de infinitésimos.",
      reflection: "Con Weierstrass entendí que la historia del cálculo también es la historia de volver exacto lo que primero fue intuición.",
    },
  },
};

const CODEX_ORDER = [
  "alex",
  "archimedes",
  "kepler",
  "cavalieri",
  "fermat",
  "wallis",
  "barrow",
  "newton",
  "leibniz",
  "euler",
  "lagrange",
  "cauchy",
  "weierstrass",
];

const BACKGROUNDS = {
  classroom: {
    location: "Aula de cálculo, presente",
    asset: "assets/bg/classroom_day.png",
    colors: ["#081521", "#173451", "#4f7ea1"],
    glow: "rgba(129, 177, 223, 0.26)",
    artKey: "classroom",
  },
  threshold: {
    location: "Umbral del sueño",
    asset: "assets/bg/notebook_glow.png",
    colors: ["#090f1c", "#1f2945", "#6c6aa6"],
    glow: "rgba(208, 176, 106, 0.22)",
    artKey: "threshold",
  },
  syracuse: {
    location: "Siracusa, costa mediterránea",
    asset: "assets/bg/greece_beach.png",
    colors: ["#102132", "#245270", "#d7a66b"],
    glow: "rgba(255, 211, 149, 0.30)",
    artKey: "syracuse",
  },
  cellar: {
    location: "Bodega europea, siglo XVII",
    asset: "assets/bg/cellar.png",
    colors: ["#1a1413", "#4d332a", "#9f6d43"],
    glow: "rgba(247, 201, 122, 0.22)",
    artKey: "cellar",
  },
  fermatStudy: {
    location: "Despacho de Fermat, Francia",
    asset: "assets/bg/fermat_study.png",
    colors: ["#171018", "#392334", "#8b5b4f"],
    glow: "rgba(230, 192, 138, 0.22)",
    artKey: "fermatStudy",
  },
  oxford: {
    location: "Oxford, Inglaterra",
    asset: "assets/bg/oxford_room.png",
    colors: ["#15161d", "#314153", "#8b7354"],
    glow: "rgba(214, 180, 112, 0.20)",
    artKey: "oxford",
  },
  cambridge: {
    location: "Cambridge, Inglaterra",
    asset: "assets/bg/cambridge_hall.png",
    colors: ["#12151b", "#28384a", "#7f684e"],
    glow: "rgba(200, 171, 114, 0.20)",
    artKey: "cambridge",
  },
  orchard: {
    location: "Woolsthorpe, campo inglés",
    asset: "assets/bg/woolsthorpe_orchard.png",
    colors: ["#132227", "#35594e", "#b18b5a"],
    glow: "rgba(235, 203, 133, 0.24)",
    artKey: "orchard",
  },
  parisLibrary: {
    location: "Biblioteca en París",
    asset: "assets/bg/paris_library.png",
    colors: ["#16111a", "#3c2f45", "#92705c"],
    glow: "rgba(241, 204, 144, 0.22)",
    artKey: "parisLibrary",
  },
  splitOrigins: {
    location: "Entre Londres y Hannover",
    asset: "assets/bg/split_origins.png",
    colors: ["#11131c", "#27334a", "#705c6e"],
    glow: "rgba(208, 176, 106, 0.18)",
    artKey: "splitOrigins",
  },
  royalSociety: {
    location: "Royal Society, Londres",
    asset: "assets/bg/royal_society.png",
    colors: ["#160f14", "#402635", "#7e5646"],
    glow: "rgba(230, 189, 122, 0.18)",
    artKey: "royalSociety",
  },
  legacyPress: {
    location: "Imprenta y salón del análisis",
    asset: "assets/bg/legacy_study.png",
    colors: ["#14161c", "#2c3a4e", "#7d705b"],
    glow: "rgba(221, 191, 133, 0.20)",
    artKey: "legacyPress",
  },
  classroomReturn: {
    location: "Aula de cálculo, ahora distinta",
    asset: "assets/bg/classroom_return.png",
    colors: ["#0d1721", "#21405b", "#8ca6ba"],
    glow: "rgba(189, 216, 242, 0.28)",
    artKey: "classroomReturn",
  },
  campus: {
    location: "Exterior de la universidad",
    asset: "assets/bg/campus_evening.png",
    colors: ["#0e1620", "#234256", "#cb935d"],
    glow: "rgba(244, 202, 130, 0.24)",
    artKey: "campus",
  },
};

const STORY = buildStory();
const STORY_MAP = Object.fromEntries(STORY.map((beat) => [beat.id, beat]));
const BACKGROUND_ART_CACHE = new Map();

const ui = {
  titleScreen: document.querySelector("#title-screen"),
  gameScreen: document.querySelector("#game-screen"),
  newGameButton: document.querySelector("#new-game-btn"),
  newGameSideButton: document.querySelector("#new-game-btn-side"),
  continueButton: document.querySelector("#continue-btn"),
  continueSideButton: document.querySelector("#continue-btn-side"),
  codexFromTitleButton: document.querySelector("#open-codex-from-title"),
  codexFromRoadmapButton: document.querySelector("#open-codex-from-roadmap"),
  roadmapList: document.querySelector("#chapter-roadmap"),
  saveSummary: document.querySelector("#save-summary"),
  backgroundLayer: document.querySelector("#background-layer"),
  chapterChip: document.querySelector("#chapter-chip"),
  locationChip: document.querySelector("#location-chip"),
  insightChip: document.querySelector("#insight-chip"),
  journalButton: document.querySelector("#journal-btn"),
  settingsButton: document.querySelector("#settings-btn"),
  titleButton: document.querySelector("#title-btn"),
  chapterBanner: document.querySelector("#chapter-banner"),
  chapterBannerKicker: document.querySelector("#chapter-banner-kicker"),
  chapterBannerTitle: document.querySelector("#chapter-banner-title"),
  chapterBannerText: document.querySelector("#chapter-banner-text"),
  slotLeft: document.querySelector("#slot-left"),
  slotCenter: document.querySelector("#slot-center"),
  slotRight: document.querySelector("#slot-right"),
  choicePanel: document.querySelector("#choice-panel"),
  interactionPanel: document.querySelector("#interaction-panel"),
  dialoguePanel: document.querySelector("#dialogue-panel"),
  nameplate: document.querySelector("#nameplate"),
  dialogueText: document.querySelector("#dialogue-text"),
  hintText: document.querySelector("#hint-text"),
  saveIndicator: document.querySelector("#save-indicator"),
  codexModal: document.querySelector("#codex-modal"),
  codexList: document.querySelector("#codex-list"),
  codexDetail: document.querySelector("#codex-detail"),
  codexProgress: document.querySelector("#codex-progress"),
  codexEntryTemplate: document.querySelector("#codex-entry-template"),
  settingsModal: document.querySelector("#settings-modal"),
  textToggleButton: document.querySelector("#toggle-text-btn"),
  motionToggleButton: document.querySelector("#toggle-motion-btn"),
  resetProgressButton: document.querySelector("#reset-progress-btn"),
};

let settings = loadSettings();
let state = loadState() || createInitialState();
let activeBeat = null;
let typewriterTimer = null;
let typingComplete = true;
let bannerTimer = null;
let currentCodexSelection = "alex";

init();

function init() {
  bindEvents();
  applySettings();
  renderRoadmap();
  updateTitleScreen();
  renderCodex();
  renderSettingsButtons();
  setScreen("title");
}

function bindEvents() {
  ui.newGameButton.addEventListener("click", startNewGame);
  ui.newGameSideButton.addEventListener("click", startNewGame);
  ui.continueButton.addEventListener("click", continueGame);
  ui.continueSideButton.addEventListener("click", continueGame);
  ui.codexFromTitleButton.addEventListener("click", openCodex);
  ui.codexFromRoadmapButton.addEventListener("click", openCodex);
  ui.journalButton.addEventListener("click", openCodex);
  ui.settingsButton.addEventListener("click", openSettings);
  ui.titleButton.addEventListener("click", returnToTitle);
  ui.dialoguePanel.addEventListener("click", handleAdvance);
  ui.dialoguePanel.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleAdvance();
    }
  });
  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => closeModal(button.dataset.closeModal));
  });
  ui.textToggleButton.addEventListener("click", () => toggleSetting("instantText"));
  ui.motionToggleButton.addEventListener("click", () => toggleSetting("reducedMotion"));
  ui.resetProgressButton.addEventListener("click", resetProgress);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal("codex");
      closeModal("settings");
      return;
    }

    if (
      ui.titleScreen.classList.contains("screen--active") &&
      ui.codexModal.classList.contains("hidden") &&
      ui.settingsModal.classList.contains("hidden") &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      if (state.lastUpdated) {
        continueGame();
      } else {
        startNewGame();
      }
    }
  });
}

function createInitialState() {
  return {
    currentBeat: FIRST_BEAT,
    currentChapter: "prologue",
    unlockedCodex: ["alex"],
    completedChapters: [],
    insight: 0,
    flags: {},
    journeyFinished: false,
    lastUpdated: null,
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);
    const merged = {
      ...createInitialState(),
      ...parsed,
      unlockedCodex: Array.isArray(parsed.unlockedCodex) ? parsed.unlockedCodex : ["alex"],
      completedChapters: Array.isArray(parsed.completedChapters) ? parsed.completedChapters : [],
      flags: parsed.flags && typeof parsed.flags === "object" ? parsed.flags : {},
      journeyFinished: Boolean(parsed.journeyFinished),
    };

    if (!STORY_MAP[merged.currentBeat]) {
      merged.currentBeat = FIRST_BEAT;
      merged.currentChapter = "prologue";
    }

    if (!CHAPTER_INDEX.hasOwnProperty(merged.currentChapter)) {
      merged.currentChapter = "prologue";
    }

    if (!merged.unlockedCodex.includes("alex")) {
      merged.unlockedCodex.unshift("alex");
    }

    return merged;
  } catch (error) {
    console.warn("No se pudo cargar la partida guardada.", error);
    return null;
  }
}

function saveState() {
  state.lastUpdated = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  flashSaveIndicator();
  updateTitleScreen();
  renderRoadmap();
}

function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) {
      return {
        instantText: false,
        reducedMotion: false,
      };
    }

    return {
      instantText: false,
      reducedMotion: false,
      ...JSON.parse(raw),
    };
  } catch (error) {
    console.warn("No se pudieron cargar los ajustes.", error);
    return {
      instantText: false,
      reducedMotion: false,
    };
  }
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  renderSettingsButtons();
  applySettings();
}

function applySettings() {
  document.body.classList.toggle("reduced-motion", settings.reducedMotion);
}

function renderSettingsButtons() {
  ui.textToggleButton.innerHTML = `
    <span class="setting-toggle__label">Texto instantáneo</span>
    <span class="setting-toggle__value">${settings.instantText ? "Activo" : "Gradual"}</span>
  `;
  ui.motionToggleButton.innerHTML = `
    <span class="setting-toggle__label">Reducir movimiento</span>
    <span class="setting-toggle__value">${settings.reducedMotion ? "Sí" : "No"}</span>
  `;
}

function toggleSetting(key) {
  settings[key] = !settings[key];
  saveSettings();
}

function resetProgress() {
  const confirmed = window.confirm("¿Quieres borrar la partida guardada y reiniciar toda la odisea?");
  if (!confirmed) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  state = createInitialState();
  activeBeat = null;
  currentCodexSelection = "alex";
  updateTitleScreen();
  renderRoadmap();
  renderCodex();
  closeModal("settings");
  returnToTitle();
}

function renderRoadmap() {
  ui.roadmapList.innerHTML = "";
  const currentIndex = Object.prototype.hasOwnProperty.call(CHAPTER_INDEX, state.currentChapter)
    ? CHAPTER_INDEX[state.currentChapter]
    : 0;

  CHAPTERS.forEach((chapter, index) => {
    const item = document.createElement("li");
    item.className = "roadmap-item";

    const completed = state.completedChapters.includes(chapter.id);
    const inPlay = chapter.id === state.currentChapter && !completed;
    const nextUp = !completed && !inPlay && index > currentIndex && index === getNextChapterIndex();

    item.classList.toggle("is-complete", completed);
    item.classList.toggle("is-current", inPlay);

    let status = "Pendiente";
    if (completed) {
      status = "Completado";
    } else if (inPlay) {
      status = state.journeyFinished ? "Completado" : "En juego";
    } else if (nextUp) {
      status = "Siguiente";
    }

    item.innerHTML = `
      <div class="roadmap-item__meta">
        <strong class="roadmap-item__title">${index + 1}. ${chapter.label}: ${chapter.title}</strong>
        <span class="roadmap-item__status">${status}</span>
      </div>
      <p class="roadmap-item__summary">${chapter.summary}</p>
    `;

    ui.roadmapList.appendChild(item);
  });
}

function getNextChapterIndex() {
  for (let index = 0; index < CHAPTERS.length; index += 1) {
    const chapter = CHAPTERS[index];
    if (!state.completedChapters.includes(chapter.id) && chapter.id !== state.currentChapter) {
      return index;
    }
  }
  return -1;
}

function updateTitleScreen() {
  const hasSave = Boolean(state.lastUpdated);
  ui.continueButton.disabled = !hasSave;
  ui.continueSideButton.disabled = !hasSave;

  if (!hasSave) {
    ui.saveSummary.textContent = "No hay viaje guardado todavía. Alex sigue en el aula, antes del salto en el tiempo.";
    return;
  }

  const chapter = CHAPTERS.find((item) => item.id === state.currentChapter) || CHAPTERS[0];
  const unlockedCount = state.unlockedCodex.length;

  if (state.journeyFinished) {
    ui.saveSummary.textContent = `Travesía completada. Comprensión: ${state.insight}. Entradas del códice: ${unlockedCount}. Alex ya volvió al presente con otra mirada sobre el cálculo.`;
    return;
  }

  ui.saveSummary.textContent = `Guardado activo en ${chapter.label}: ${chapter.title}. Comprensión: ${state.insight}. Entradas del códice: ${unlockedCount}.`;
}

function setScreen(screen) {
  const showTitle = screen === "title";
  ui.titleScreen.classList.toggle("screen--active", showTitle);
  ui.titleScreen.setAttribute("aria-hidden", String(!showTitle));
  ui.gameScreen.classList.toggle("screen--active", !showTitle);
  ui.gameScreen.setAttribute("aria-hidden", String(showTitle));
}

function startNewGame() {
  clearTimers();
  state = createInitialState();
  currentCodexSelection = "alex";
  saveState();
  setScreen("game");
  goToBeat(FIRST_BEAT);
}

function continueGame() {
  clearTimers();
  setScreen("game");
  goToBeat(state.currentBeat, { resume: true });
}

function returnToTitle() {
  clearTimers();
  setScreen("title");
  updateTitleScreen();
}

function openCodex() {
  ui.codexModal.classList.remove("hidden");
  ui.codexModal.setAttribute("aria-hidden", "false");
  renderCodex();
}

function openSettings() {
  ui.settingsModal.classList.remove("hidden");
  ui.settingsModal.setAttribute("aria-hidden", "false");
  renderSettingsButtons();
}

function closeModal(name) {
  if (name === "codex") {
    ui.codexModal.classList.add("hidden");
    ui.codexModal.setAttribute("aria-hidden", "true");
  }

  if (name === "settings") {
    ui.settingsModal.classList.add("hidden");
    ui.settingsModal.setAttribute("aria-hidden", "true");
  }
}

function goToBeat(id, options = {}) {
  clearTimers();
  const beat = STORY_MAP[id];

  if (!beat) {
    console.warn(`No existe el beat ${id}.`);
    return;
  }

  if (beat.type === "chapter") {
    activeBeat = null;
    state.currentBeat = beat.id;
    state.currentChapter = beat.chapter;
    applyScene(beat);
    updateHud();
    saveState();
    showChapterBanner(beat, () => goToBeat(beat.next));
    return;
  }

  activeBeat = {
    ...beat,
    resolvedText: resolveMaybeFunction(beat.text),
  };

  state.currentBeat = beat.id;
  state.currentChapter = beat.chapter;
  applyBeatEffects(beat.effects, options.resume, false);
  saveState();
  renderBeat(activeBeat, options.resume);
}

function applyBeatEffects(effects = {}, skip = false, saveNow = true) {
  if (!effects || skip) {
    updateHud();
    renderCodex();
    return;
  }

  if (typeof effects.insight === "number") {
    state.insight += effects.insight;
  }

  if (effects.flags) {
    state.flags = {
      ...state.flags,
      ...effects.flags,
    };
  }

  if (Array.isArray(effects.unlockCodex)) {
    effects.unlockCodex.forEach(unlockCodexEntry);
  }

  if (effects.completeChapter) {
    completeChapter(effects.completeChapter);
  }

  if (effects.journeyFinished) {
    state.journeyFinished = true;
  }

  updateHud();
  renderCodex();

  if (saveNow) {
    saveState();
  }
}

function unlockCodexEntry(id) {
  if (!state.unlockedCodex.includes(id)) {
    state.unlockedCodex.push(id);
    currentCodexSelection = id;
  }
}

function completeChapter(id) {
  if (!state.completedChapters.includes(id)) {
    state.completedChapters.push(id);
    state.completedChapters.sort((left, right) => {
      const leftIndex = Object.prototype.hasOwnProperty.call(CHAPTER_INDEX, left) ? CHAPTER_INDEX[left] : 0;
      const rightIndex = Object.prototype.hasOwnProperty.call(CHAPTER_INDEX, right) ? CHAPTER_INDEX[right] : 0;
      return leftIndex - rightIndex;
    });
  }
}

function updateHud() {
  const chapter = CHAPTERS.find((item) => item.id === state.currentChapter) || CHAPTERS[0];
  ui.chapterChip.textContent = `${chapter.label}: ${chapter.title}`;
  ui.insightChip.textContent = `Comprensión: ${state.insight}`;
}

function applyScene(beat) {
  const background = BACKGROUNDS[beat.background] || BACKGROUNDS.classroom;
  const artUri = getBackgroundArt(background.artKey || beat.background);
  const assetLayer = background.asset ? `url("${background.asset}")` : "none";
  const artLayer = artUri ? `url("${artUri}")` : "none";

  ui.locationChip.textContent = beat.location || background.location;
  ui.backgroundLayer.style.setProperty("--bg-top", background.colors[0]);
  ui.backgroundLayer.style.setProperty("--bg-mid", background.colors[1]);
  ui.backgroundLayer.style.setProperty("--bg-bottom", background.colors[2]);
  ui.backgroundLayer.style.setProperty("--glow", background.glow);
  ui.backgroundLayer.style.backgroundImage = `
    radial-gradient(circle at 50% 24%, ${background.glow}, transparent 36%),
    linear-gradient(180deg, rgba(8, 14, 22, 0.16), rgba(8, 14, 22, 0.34)),
    ${assetLayer},
    ${artLayer},
    linear-gradient(180deg, ${background.colors[0]}, ${background.colors[1]} 48%, ${background.colors[2]})
  `;

  renderSprites(beat.sprites || [], beat.focusCharacter);
}

function getBackgroundArt(key) {
  if (!key) {
    return "";
  }

  if (!BACKGROUND_ART_CACHE.has(key)) {
    BACKGROUND_ART_CACHE.set(key, svgToDataUri(generateBackgroundArt(key)));
  }

  return BACKGROUND_ART_CACHE.get(key);
}

function renderSprites(sprites, focusCharacter) {
  ui.slotLeft.innerHTML = "";
  ui.slotCenter.innerHTML = "";
  ui.slotRight.innerHTML = "";

  const slots = {
    left: ui.slotLeft,
    center: ui.slotCenter,
    right: ui.slotRight,
  };

  sprites.forEach((spriteSpec) => {
    const character = CHARACTERS[spriteSpec.id];
    if (!character || !slots[spriteSpec.slot]) {
      return;
    }

    const wrapper = document.createElement("figure");
    wrapper.className = "sprite";
    if (focusCharacter && focusCharacter !== spriteSpec.id) {
      wrapper.classList.add("is-muted");
    }

    const image = document.createElement("img");
    image.className = "sprite__image";
    image.alt = character.name;
    image.src = buildAssetPath(character, spriteSpec.pose || "neutral");
    image.onerror = () => {
      image.onerror = null;
      image.src = generateCharacterPlaceholder(character, spriteSpec.pose || "neutral");
    };

    const label = document.createElement("figcaption");
    label.className = "sprite__label";
    label.textContent = character.name;

    wrapper.append(image, label);
    slots[spriteSpec.slot].appendChild(wrapper);
  });
}

function buildAssetPath(character, pose = "neutral") {
  return character.assetBase.replace("{pose}", pose);
}

function renderBeat(beat, resume = false) {
  applyScene(beat);
  updateHud();
  hideChoicePanel();
  hideInteractionPanel();

  if (beat.type === "dialogue") {
    renderSpeaker(beat.speaker, beat.speakerType);
    renderDialogue(beat, {
      hint: beat.next ? "Haz clic para continuar" : "Fin de la escena",
      onComplete: () => {
        typingComplete = true;
      },
    }, resume);
    return;
  }

  if (beat.type === "choice") {
    renderSpeaker(beat.speaker, beat.speakerType);
    renderDialogue(beat, {
      hint: "Elige una opción",
      onComplete: () => {
        renderChoices(beat.choices, beat.choiceLabel);
      },
    }, resume);
    return;
  }

  if (beat.type === "end") {
    renderSpeaker(beat.speaker, beat.speakerType);
    renderDialogue(beat, {
      hint: "Elige cómo continuar",
      onComplete: () => {
        renderEndCard(beat);
      },
    }, resume);
  }
}

function renderSpeaker(name, speakerType = "character") {
  ui.nameplate.textContent = name || "Narración";
  ui.nameplate.classList.toggle("is-narration", speakerType === "narration");
}

function renderDialogue(beat, options = {}, resume = false) {
  clearInterval(typewriterTimer);
  typingComplete = false;
  ui.dialogueText.textContent = "";
  ui.hintText.textContent = options.hint || "Haz clic para continuar";

  const text = typeof beat.resolvedText === "string" ? beat.resolvedText : resolveMaybeFunction(beat.text);

  if (settings.instantText || resume) {
    ui.dialogueText.textContent = text;
    typingComplete = true;
    if (typeof options.onComplete === "function") {
      options.onComplete();
    }
    return;
  }

  let index = 0;
  const pace = 15;

  typewriterTimer = window.setInterval(() => {
    index += 1;
    ui.dialogueText.textContent = text.slice(0, index);

    if (index >= text.length) {
      clearInterval(typewriterTimer);
      typewriterTimer = null;
      typingComplete = true;
      if (typeof options.onComplete === "function") {
        options.onComplete();
      }
    }
  }, pace);
}

function finishTyping() {
  if (!activeBeat) {
    return;
  }

  clearInterval(typewriterTimer);
  typewriterTimer = null;
  ui.dialogueText.textContent = typeof activeBeat.resolvedText === "string"
    ? activeBeat.resolvedText
    : resolveMaybeFunction(activeBeat.text);
  typingComplete = true;

  if (activeBeat.type === "choice") {
    renderChoices(activeBeat.choices, activeBeat.choiceLabel);
  }

  if (activeBeat.type === "end") {
    renderEndCard(activeBeat);
  }
}

function handleAdvance() {
  if (!activeBeat) {
    return;
  }

  if (!typingComplete) {
    finishTyping();
    return;
  }

  if (activeBeat.type !== "dialogue") {
    return;
  }

  if (activeBeat.next) {
    goToBeat(activeBeat.next);
  }
}

function renderChoices(choices, label) {
  ui.choicePanel.innerHTML = "";
  ui.choicePanel.classList.remove("hidden");

  const header = document.createElement("p");
  header.className = "choice-panel__header";
  header.textContent = label || "Decisión";

  const grid = document.createElement("div");
  grid.className = "choice-grid";

  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-card";
    if (choice.correct) {
      button.classList.add("is-correct");
    }

    button.innerHTML = `
      <span class="choice-card__title">${choice.label}</span>
      <span class="choice-card__meta">${choice.description || ""}</span>
    `;

    button.addEventListener("click", () => {
      if (choice.effects) {
        applyBeatEffects(choice.effects);
      }
      goToBeat(choice.next);
    });

    grid.appendChild(button);
  });

  ui.choicePanel.append(header, grid);
}

function hideChoicePanel() {
  ui.choicePanel.classList.add("hidden");
  ui.choicePanel.innerHTML = "";
}

function renderEndCard(beat) {
  ui.interactionPanel.innerHTML = "";
  ui.interactionPanel.classList.remove("hidden");

  const text = resolveMaybeFunction(beat.endText);
  const container = document.createElement("div");
  container.className = "end-card";
  container.innerHTML = `
    <h4>${beat.endTitle}</h4>
    <p>${text}</p>
  `;

  const actions = document.createElement("div");
  actions.className = "end-card__actions";

  beat.actions.forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "end-card__action";
    button.textContent = action.label;
    button.addEventListener("click", () => {
      if (action.type === "title") {
        returnToTitle();
      }

      if (action.type === "restart") {
        startNewGame();
      }

      if (action.type === "codex") {
        openCodex();
      }

      if (action.type === "goto" && action.next) {
        goToBeat(action.next);
      }
    });
    actions.appendChild(button);
  });

  container.appendChild(actions);
  ui.interactionPanel.appendChild(container);
}

function hideInteractionPanel() {
  ui.interactionPanel.classList.add("hidden");
  ui.interactionPanel.innerHTML = "";
}

function renderCodex() {
  const unlockedCount = state.unlockedCodex.length;
  ui.codexProgress.textContent = `${unlockedCount} de ${CODEX_ORDER.length} registros desbloqueados.`;
  ui.codexList.innerHTML = "";

  CODEX_ORDER.forEach((id) => {
    const character = CHARACTERS[id];
    const unlocked = state.unlockedCodex.includes(id);
    const button = ui.codexEntryTemplate.content.firstElementChild.cloneNode(true);
    button.classList.toggle("is-active", currentCodexSelection === id);
    button.classList.toggle("is-locked", !unlocked);
    button.classList.toggle("is-unlocked", unlocked);
    button.querySelector(".codex-list__text").textContent = unlocked ? character.codexName : `${character.codexName} (sellado)`;
    button.addEventListener("click", () => {
      currentCodexSelection = id;
      renderCodex();
    });
    ui.codexList.appendChild(button);
  });

  if (!CODEX_ORDER.includes(currentCodexSelection)) {
    currentCodexSelection = "alex";
  }

  renderCodexDetail(currentCodexSelection);
}

function renderCodexDetail(id) {
  const character = CHARACTERS[id];
  const unlocked = state.unlockedCodex.includes(id);

  if (!character || !character.codex) {
    ui.codexDetail.innerHTML = "<p>Este registro todavía no está disponible.</p>";
    return;
  }

  if (!unlocked) {
    ui.codexDetail.innerHTML = `
      <h4>${character.codexName}</h4>
      <p class="codex-detail__era">Registro sellado</p>
      <div class="codex-detail__section">
        <strong>Estado</strong>
        <p>Alex aún no ha llegado a este encuentro. El nombre ya forma parte del mapa del viaje, pero la nota histórica se abrirá en el momento adecuado.</p>
      </div>
      <div class="codex-detail__section">
        <strong>Pista narrativa</strong>
        <p>${findChapterSummaryForCharacter(id)}</p>
      </div>
      <div class="codex-detail__section">
        <strong>Ruta de sprite</strong>
        <p>Cuando quieras sustituir el retrato provisional, coloca el arte final en <code>${character.assetBase}</code>.</p>
      </div>
    `;
    return;
  }

  ui.codexDetail.innerHTML = `
    <h4>${character.codexName}</h4>
    <p class="codex-detail__era">${character.codex.era}</p>
    <div class="codex-detail__section">
      <strong>Contribución clave</strong>
      <p>${character.codex.contribution}</p>
    </div>
    <div class="codex-detail__section">
      <strong>Reflexión de Alex</strong>
      <p>${character.codex.reflection}</p>
    </div>
    <div class="codex-detail__section">
      <strong>Ruta de sprite</strong>
      <p>Puedes reemplazar el retrato provisional en <code>${character.assetBase}</code>. Si el archivo no existe, el juego usa una silueta SVG generada automáticamente.</p>
    </div>
  `;
}

function findChapterSummaryForCharacter(id) {
  const hints = {
    alex: "Alex ya está aquí: su cuaderno cambiará a medida que el cálculo deje de parecer un idioma hostil.",
    archimedes: "Siracusa y la geometría antigua revelarán que la historia del cálculo comienza mucho antes de la notación moderna.",
    kepler: "Los problemas de volumen y medición empujarán el siguiente salto del viaje.",
    cavalieri: "Las rebanadas e indivisibles aparecerán cuando Alex aprenda a imaginar áreas y sólidos como acumulaciones.",
    fermat: "La intuición de la derivada surgirá antes del nombre, escondida en máximos, mínimos y tangentes.",
    wallis: "El infinito y la abstracción simbólica le darán una nueva textura al análisis.",
    barrow: "La conexión entre área y tangente aparecerá como una bisagra inesperada.",
    newton: "El cálculo se encontrará con la física, el tiempo y el movimiento en un huerto inglés.",
    leibniz: "Alex reconocerá finalmente los símbolos que veía en el pizarrón de su clase.",
    euler: "Más tarde el cálculo se expandirá hasta convertirse en un lenguaje general de funciones y fenómenos.",
    lagrange: "Después del descubrimiento vendrá la etapa de organizar, pulir y reescribir.",
    cauchy: "El viaje también mostrará que las grandes intuiciones tuvieron que ser afinadas con más rigor.",
    weierstrass: "En el legado final aparecerán las voces que hicieron más exacta la idea de límite.",
  };

  return hints[id] || "Este encuentro todavía no se ha escrito en el cuaderno.";
}

function showChapterBanner(beat, onComplete) {
  clearTimeout(bannerTimer);
  ui.chapterBannerKicker.textContent = beat.banner.kicker;
  ui.chapterBannerTitle.textContent = beat.banner.title;
  ui.chapterBannerText.textContent = beat.banner.text;
  ui.chapterBanner.classList.add("is-visible");
  ui.chapterBanner.setAttribute("aria-hidden", "false");
  ui.dialogueText.textContent = "";
  ui.nameplate.textContent = "";
  ui.hintText.textContent = "Cargando capítulo...";
  hideChoicePanel();
  hideInteractionPanel();

  const duration = settings.reducedMotion ? 650 : 1800;
  bannerTimer = window.setTimeout(() => {
    ui.chapterBanner.classList.remove("is-visible");
    ui.chapterBanner.setAttribute("aria-hidden", "true");
    if (typeof onComplete === "function") {
      onComplete();
    }
  }, duration);
}

function flashSaveIndicator() {
  ui.saveIndicator.classList.add("is-visible");
  window.clearTimeout(ui.saveIndicator._timer);
  ui.saveIndicator._timer = window.setTimeout(() => {
    ui.saveIndicator.classList.remove("is-visible");
  }, 1000);
}

function clearTimers() {
  clearInterval(typewriterTimer);
  clearTimeout(bannerTimer);
  typewriterTimer = null;
  bannerTimer = null;
  typingComplete = true;
}

function resolveMaybeFunction(value) {
  return typeof value === "function" ? value(state) : value;
}

function sprite(id, slot, pose = "neutral") {
  return { id, slot, pose };
}

function chapterBeat(id, chapter, background, banner, next) {
  return {
    id,
    type: "chapter",
    chapter,
    background,
    banner,
    next,
  };
}

function dialogueBeat(config) {
  return {
    type: "dialogue",
    speakerType: "character",
    ...config,
  };
}

function narrationBeat(config) {
  return {
    type: "dialogue",
    speaker: "Narración",
    speakerType: "narration",
    ...config,
  };
}

function choiceBeat(config) {
  return {
    type: "choice",
    speakerType: "character",
    ...config,
  };
}

function endBeat(config) {
  return {
    type: "end",
    speakerType: "narration",
    ...config,
  };
}

function buildStory() {
  return [
    chapterBeat("prologue_banner", "prologue", "classroom", {
      kicker: "Prólogo",
      title: "El gran agobio",
      text: "Una clase ordinaria se abre como una grieta en el tiempo. Alex no lo sabe todavía, pero va a entrar en la historia completa del cálculo.",
    }, "prologue_01"),

    dialogueBeat({
      id: "prologue_01",
      chapter: "prologue",
      background: "classroom",
      location: "Aula de cálculo, presente",
      sprites: [sprite("alex", "left", "thinking"), sprite("profesor", "right", "neutral")],
      focusCharacter: "profesor",
      speaker: "Profesor",
      text: "Y así, el teorema fundamental une derivación e integración como si fueran dos operaciones inversas de una misma idea.",
      next: "prologue_02",
    }),
    dialogueBeat({
      id: "prologue_02",
      chapter: "prologue",
      background: "classroom",
      location: "Aula de cálculo, presente",
      sprites: [sprite("alex", "left", "thinking"), sprite("profesor", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "Lo dice como si fuera obvio. Para mí, en cambio, las derivadas y las integrales siguen pareciendo dos países sin puente.",
      next: "prologue_03",
    }),
    narrationBeat({
      id: "prologue_03",
      chapter: "prologue",
      background: "classroom",
      location: "Aula de cálculo, presente",
      sprites: [sprite("alex", "center", "thinking")],
      focusCharacter: "alex",
      text: "El pizarrón está lleno de signos. Alex no los odia; lo que le duele es no sentir ninguna historia detrás de ellos.",
      next: "prologue_choice_01",
    }),
    choiceBeat({
      id: "prologue_choice_01",
      chapter: "prologue",
      background: "classroom",
      location: "Aula de cálculo, presente",
      sprites: [sprite("alex", "center", "thinking")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "Si pudiera interrumpir la clase para hacer una sola pregunta honesta, ¿cuál saldría primero?",
      choiceLabel: "La primera grieta en el muro",
      choices: [
        {
          label: "“¿De dónde salieron todas estas fórmulas?”",
          description: "Alex siente que el cálculo le llega ya terminado, sin el proceso humano que lo hizo nacer.",
          effects: {
            insight: 1,
            flags: { prologueConcern: "origen" },
          },
          next: "prologue_choice_origin",
        },
        {
          label: "“¿Por qué todo parece moverse demasiado rápido?”",
          description: "La velocidad del curso le pesa tanto como los conceptos mismos.",
          effects: {
            flags: { prologueConcern: "ritmo" },
          },
          next: "prologue_choice_speed",
        },
        {
          label: "“¿Por qué estos símbolos parecen venir de siglos atrás?”",
          description: "Alex presiente una tradición entera escondida en el lenguaje del cálculo.",
          effects: {
            insight: 1,
            flags: { prologueConcern: "simbolos" },
          },
          next: "prologue_choice_symbols",
        },
      ],
    }),
    dialogueBeat({
      id: "prologue_choice_origin",
      chapter: "prologue",
      background: "classroom",
      location: "Aula de cálculo, presente",
      sprites: [sprite("alex", "center", "thinking")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "Tal vez eso es lo que me abruma: siento que el cálculo llegó a mi pupitre como una ruina ya levantada por otros.",
      next: "prologue_04",
    }),
    dialogueBeat({
      id: "prologue_choice_speed",
      chapter: "prologue",
      background: "classroom",
      location: "Aula de cálculo, presente",
      sprites: [sprite("alex", "center", "thinking")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "El profesor avanza como si todos hubiéramos estado allí desde el inicio. Yo apenas estoy buscando la puerta de entrada.",
      next: "prologue_04",
    }),
    dialogueBeat({
      id: "prologue_choice_symbols",
      chapter: "prologue",
      background: "classroom",
      location: "Aula de cálculo, presente",
      sprites: [sprite("alex", "center", "thinking")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "Hay algo raro en esos signos: se sienten viejos, heredados, como si detrás de cada uno hubiera una época entera.",
      next: "prologue_04",
    }),
    narrationBeat({
      id: "prologue_04",
      chapter: "prologue",
      background: "threshold",
      location: "Umbral del sueño",
      sprites: [sprite("alex", "center", "surprised")],
      focusCharacter: "alex",
      text: "El libro de Alex empieza a brillar. La tinta del símbolo ∫ se estira hasta parecer un río, y las derivadas del pizarrón se convierten en estrellas.",
      next: "prologue_05",
    }),
    narrationBeat({
      id: "prologue_05",
      chapter: "prologue",
      background: "threshold",
      location: "Vacío de fórmulas y mar",
      sprites: [sprite("alex", "center", "surprised")],
      focusCharacter: "alex",
      effects: {
        completeChapter: "prologue",
      },
      text: "Alex cae en un vacío donde los números son espuma y las letras griegas son olas. Cuando la luz se apaga, ya no está en su aula.",
      next: "archimedes_banner",
    }),

    chapterBeat("archimedes_banner", "archimedes", "syracuse", {
      kicker: "Capítulo I",
      title: "Arquímedes y el arte de agotar",
      text: "Antes de Newton y Leibniz, alguien aprendió a cercar lo curvo con una paciencia ferozmente geométrica.",
    }, "archimedes_01"),

    dialogueBeat({
      id: "archimedes_01",
      chapter: "archimedes",
      background: "syracuse",
      location: "Siracusa, siglo III a. C.",
      sprites: [sprite("alex", "left", "surprised"), sprite("archimedes", "right", "neutral")],
      focusCharacter: "archimedes",
      speaker: "Arquímedes",
      effects: {
        unlockCodex: ["archimedes"],
      },
      text: "Te asombra el sol, el mar y el compás en la arena. Bien. La geometría no empieza en las aulas: empieza cuando alguien se niega a dejar que una curva siga siendo un misterio.",
      next: "archimedes_02",
    }),
    dialogueBeat({
      id: "archimedes_02",
      chapter: "archimedes",
      background: "syracuse",
      location: "Siracusa, siglo III a. C.",
      sprites: [sprite("alex", "left", "thinking"), sprite("archimedes", "right", "teaching")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "¿Arquímedes? Entonces el cálculo no empezó de golpe en el siglo XVII. Hubo un suelo mucho más antiguo bajo todo eso.",
      next: "archimedes_03",
    }),
    dialogueBeat({
      id: "archimedes_03",
      chapter: "archimedes",
      background: "syracuse",
      location: "Siracusa, siglo III a. C.",
      sprites: [sprite("alex", "left", "thinking"), sprite("archimedes", "right", "teaching")],
      focusCharacter: "archimedes",
      speaker: "Arquímedes",
      text: "Yo quiero medir lo curvo usando lo recto. Si encierro una figura entre aproximaciones cada vez mejores, la diferencia se agota sin que la razón pierda el control.",
      next: "archimedes_choice_01",
    }),
    choiceBeat({
      id: "archimedes_choice_01",
      chapter: "archimedes",
      background: "syracuse",
      location: "Siracusa, siglo III a. C.",
      sprites: [sprite("alex", "left", "thinking"), sprite("archimedes", "right", "teaching")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "Alex necesita entender el gesto central de esta época. ¿Qué pregunta le hace a Arquímedes?",
      choiceLabel: "Pregunta histórica",
      choices: [
        {
          label: "“¿Qué significa agotar un área?”",
          description: "Ir al corazón del método de agotamiento.",
          effects: {
            insight: 1,
            flags: { archimedesFocus: "agotamiento" },
          },
          next: "archimedes_branch_exhaustion",
        },
        {
          label: "“¿Por qué una parábola te importa tanto?”",
          description: "Explorar cómo una curva concreta cambia la forma de razonar.",
          effects: {
            flags: { archimedesFocus: "parabola" },
          },
          next: "archimedes_branch_parabola",
        },
        {
          label: "“¿En qué se parece esto a una integral?”",
          description: "Buscar el puente con el lenguaje moderno que Alex conoce.",
          effects: {
            insight: 1,
            flags: { archimedesFocus: "puente" },
          },
          next: "archimedes_branch_bridge",
        },
      ],
    }),
    dialogueBeat({
      id: "archimedes_branch_exhaustion",
      chapter: "archimedes",
      background: "syracuse",
      location: "Siracusa, siglo III a. C.",
      sprites: [sprite("alex", "left", "thinking"), sprite("archimedes", "right", "teaching")],
      focusCharacter: "archimedes",
      speaker: "Arquímedes",
      text: "Agotar un área es no dejarle espacio a la duda: la figura queda aprisionada entre otras cuyo tamaño sí conocemos, y el margen sobrante se vuelve menor que cualquier magnitud dada.",
      next: "archimedes_04",
    }),
    dialogueBeat({
      id: "archimedes_branch_parabola",
      chapter: "archimedes",
      background: "syracuse",
      location: "Siracusa, siglo III a. C.",
      sprites: [sprite("alex", "left", "thinking"), sprite("archimedes", "right", "teaching")],
      focusCharacter: "archimedes",
      speaker: "Arquímedes",
      text: "La parábola me importa porque obliga a la geometría a volverse más sutil. En ella, el área no se entrega con una sola figura: hay que perseguirla en etapas.",
      next: "archimedes_04",
    }),
    dialogueBeat({
      id: "archimedes_branch_bridge",
      chapter: "archimedes",
      background: "syracuse",
      location: "Siracusa, siglo III a. C.",
      sprites: [sprite("alex", "left", "thinking"), sprite("archimedes", "right", "teaching")],
      focusCharacter: "archimedes",
      speaker: "Arquímedes",
      text: "Todavía no existe ese nombre, pero sí la ambición que la sostiene: aproximarse a una magnitud curva con una cadena de razonamientos cada vez más ajustados.",
      next: "archimedes_04",
    }),
    dialogueBeat({
      id: "archimedes_04",
      chapter: "archimedes",
      background: "syracuse",
      location: "Siracusa, siglo III a. C.",
      sprites: [sprite("alex", "left", "thinking"), sprite("archimedes", "right", "teaching")],
      focusCharacter: "archimedes",
      speaker: "Arquímedes",
      text: "En la cuadratura de la parábola sumo una familia infinita de triángulos. El área total resulta ser cuatro tercios del triángulo inicial. No es magia: es una estructura lógica.",
      next: "archimedes_quiz_01",
    }),
    choiceBeat({
      id: "archimedes_quiz_01",
      chapter: "archimedes",
      background: "syracuse",
      location: "Siracusa, siglo III a. C.",
      sprites: [sprite("alex", "left", "thinking"), sprite("archimedes", "right", "teaching")],
      focusCharacter: "alex",
      speaker: "Arquímedes",
      text: "Entonces dime, Alex: ¿cuál describe mejor mi método?",
      choiceLabel: "Comprobación de comprensión",
      choices: [
        {
          label: "Encerrar una curva entre aproximaciones conocidas, cada vez más precisas.",
          description: "La respuesta más fiel al método de agotamiento.",
          correct: true,
          effects: {
            insight: 2,
            flags: { archimedesQuiz: "correcta" },
          },
          next: "archimedes_quiz_correct",
        },
        {
          label: "Inventar un pedazo infinitesimal y confiar en que ya vale como resultado exacto.",
          description: "Eso llegará después en otras formas, pero no expresa el rigor griego.",
          effects: {
            flags: { archimedesQuiz: "infinitesimo" },
          },
          next: "archimedes_quiz_wrong_1",
        },
        {
          label: "Aceptar una estimación visual si parece convincente a simple vista.",
          description: "La intuición ayuda a mirar, pero no a demostrar.",
          effects: {
            flags: { archimedesQuiz: "intuicion" },
          },
          next: "archimedes_quiz_wrong_2",
        },
      ],
    }),
    dialogueBeat({
      id: "archimedes_quiz_correct",
      chapter: "archimedes",
      background: "syracuse",
      location: "Siracusa, siglo III a. C.",
      sprites: [sprite("alex", "left", "thinking"), sprite("archimedes", "right", "inspired")],
      focusCharacter: "archimedes",
      speaker: "Arquímedes",
      text: "Exacto. No reclamo una igualdad porque me guste: la fuerzo a emerger apretando las aproximaciones hasta que la discrepancia ya no puede sostenerse.",
      next: "archimedes_05",
    }),
    dialogueBeat({
      id: "archimedes_quiz_wrong_1",
      chapter: "archimedes",
      background: "syracuse",
      location: "Siracusa, siglo III a. C.",
      sprites: [sprite("alex", "left", "surprised"), sprite("archimedes", "right", "serious")],
      focusCharacter: "archimedes",
      speaker: "Arquímedes",
      text: "Aún no. Otros hablarán con más libertad de indivisibles e infinitésimos. Yo sigo otro camino: acercar, refinar, demostrar.",
      next: "archimedes_05",
    }),
    dialogueBeat({
      id: "archimedes_quiz_wrong_2",
      chapter: "archimedes",
      background: "syracuse",
      location: "Siracusa, siglo III a. C.",
      sprites: [sprite("alex", "left", "surprised"), sprite("archimedes", "right", "serious")],
      focusCharacter: "archimedes",
      speaker: "Arquímedes",
      text: "No basta con mirar bien; hay que razonar mejor. La matemática resiste justamente cuando ya no depende del ánimo del observador.",
      next: "archimedes_05",
    }),
    dialogueBeat({
      id: "archimedes_05",
      chapter: "archimedes",
      background: "syracuse",
      location: "Siracusa, siglo III a. C.",
      sprites: [sprite("alex", "left", "thinking"), sprite("archimedes", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      effects: {
        insight: 1,
        completeChapter: "archimedes",
      },
      text: "Entonces el cálculo no cayó del cielo. Primero hubo una larga paciencia ante el área, la curva y el infinito; una forma antigua de acercarse a lo continuo sin perder rigor.",
      next: "kepler_banner",
    }),

    chapterBeat("kepler_banner", "kepler-cavalieri", "cellar", {
      kicker: "Capítulo II",
      title: "Kepler, Cavalieri y los indivisibles",
      text: "Las preguntas prácticas sobre volúmenes y secciones empujan la imaginación matemática hacia nuevas herramientas.",
    }, "kepler_01"),

    dialogueBeat({
      id: "kepler_01",
      chapter: "kepler-cavalieri",
      background: "cellar",
      location: "Bodega europea, siglo XVII",
      sprites: [sprite("alex", "left", "surprised"), sprite("kepler", "center", "neutral"), sprite("cavalieri", "right", "neutral")],
      focusCharacter: "kepler",
      speaker: "Kepler",
      effects: {
        unlockCodex: ["kepler", "cavalieri"],
      },
      text: "Llegas en buen momento, muchacho. Estoy midiendo un barril de vino, y créeme: la sed también puede educar a la geometría.",
      next: "kepler_02",
    }),
    dialogueBeat({
      id: "kepler_02",
      chapter: "kepler-cavalieri",
      background: "cellar",
      location: "Bodega europea, siglo XVII",
      sprites: [sprite("alex", "left", "thinking"), sprite("kepler", "center", "teaching"), sprite("cavalieri", "right", "neutral")],
      focusCharacter: "kepler",
      speaker: "Kepler",
      text: "Cuando quieres saber cuánto cabe en un cuerpo curvo, ya no basta con una sola figura perfecta. Hay que pensar en cómo se acumulan muchas secciones.",
      next: "kepler_03",
    }),
    dialogueBeat({
      id: "kepler_03",
      chapter: "kepler-cavalieri",
      background: "cellar",
      location: "Bodega europea, siglo XVII",
      sprites: [sprite("alex", "left", "thinking"), sprite("kepler", "center", "neutral"), sprite("cavalieri", "right", "teaching")],
      focusCharacter: "cavalieri",
      speaker: "Cavalieri",
      text: "Yo digo que un área puede pensarse como un tejido de líneas, y un sólido como un libro hecho de hojas muy delgadas. Los llamo indivisibles.",
      next: "kepler_choice_01",
    }),
    choiceBeat({
      id: "kepler_choice_01",
      chapter: "kepler-cavalieri",
      background: "cellar",
      location: "Bodega europea, siglo XVII",
      sprites: [sprite("alex", "left", "thinking"), sprite("kepler", "center", "neutral"), sprite("cavalieri", "right", "teaching")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "¿Qué imagen necesita seguir Alex para entender esta nueva etapa?",
      choiceLabel: "Cómo imaginar un volumen",
      choices: [
        {
          label: "Seguir el barril de Kepler",
          description: "Ver cómo una necesidad concreta obliga a medir lo irregular.",
          effects: {
            insight: 1,
            flags: { keplerChoice: "barril" },
          },
          next: "kepler_branch_barrel",
        },
        {
          label: "Abrir el libro de Cavalieri",
          description: "Pensar el sólido como una suma de páginas infinitamente finas.",
          effects: {
            flags: { keplerChoice: "libro" },
          },
          next: "kepler_branch_book",
        },
        {
          label: "Comparar las secciones horizontales",
          description: "Imaginar el cuerpo como una pila de rebanadas equivalentes.",
          effects: {
            insight: 1,
            flags: { keplerChoice: "secciones" },
          },
          next: "kepler_branch_sections",
        },
      ],
    }),
    dialogueBeat({
      id: "kepler_branch_barrel",
      chapter: "kepler-cavalieri",
      background: "cellar",
      location: "Bodega europea, siglo XVII",
      sprites: [sprite("alex", "left", "thinking"), sprite("kepler", "center", "teaching"), sprite("cavalieri", "right", "neutral")],
      focusCharacter: "kepler",
      speaker: "Kepler",
      text: "Cuando mido un barril, no estoy jugando con madera y vino solamente. Estoy buscando una forma de dominar volúmenes curvos que el cálculo futuro formalizará mejor.",
      next: "kepler_04",
    }),
    dialogueBeat({
      id: "kepler_branch_book",
      chapter: "kepler-cavalieri",
      background: "cellar",
      location: "Bodega europea, siglo XVII",
      sprites: [sprite("alex", "left", "thinking"), sprite("kepler", "center", "neutral"), sprite("cavalieri", "right", "teaching")],
      focusCharacter: "cavalieri",
      speaker: "Cavalieri",
      text: "Piensa cada página como una sección. Si comparas dos libros hoja por hoja, puedes comparar también sus volúmenes. A veces una buena imagen abre una teoría entera.",
      next: "kepler_04",
    }),
    dialogueBeat({
      id: "kepler_branch_sections",
      chapter: "kepler-cavalieri",
      background: "cellar",
      location: "Bodega europea, siglo XVII",
      sprites: [sprite("alex", "left", "thinking"), sprite("kepler", "center", "neutral"), sprite("cavalieri", "right", "teaching")],
      focusCharacter: "cavalieri",
      speaker: "Cavalieri",
      text: "Exacto: si dos sólidos tienen la misma anchura a cada altura, entonces deben encerrar el mismo volumen. Las secciones dejan de ser auxiliares y se vuelven protagonistas.",
      next: "kepler_04",
    }),
    dialogueBeat({
      id: "kepler_04",
      chapter: "kepler-cavalieri",
      background: "cellar",
      location: "Bodega europea, siglo XVII",
      sprites: [sprite("alex", "left", "thinking"), sprite("kepler", "center", "neutral"), sprite("cavalieri", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "Entonces el volumen puede nacer de una suma de cortes. No es una figura única lo que importa, sino cómo se apilan muchísimas piezas conceptuales.",
      next: "kepler_quiz_01",
    }),
    choiceBeat({
      id: "kepler_quiz_01",
      chapter: "kepler-cavalieri",
      background: "cellar",
      location: "Bodega europea, siglo XVII",
      sprites: [sprite("alex", "left", "thinking"), sprite("kepler", "center", "neutral"), sprite("cavalieri", "right", "teaching")],
      focusCharacter: "alex",
      speaker: "Cavalieri",
      text: "¿Qué es lo más cercano a un indivisible en esta conversación?",
      choiceLabel: "Comprobación de comprensión",
      choices: [
        {
          label: "Una sección conceptual extremadamente delgada usada para comparar áreas o volúmenes.",
          description: "La respuesta adecuada para este momento histórico.",
          correct: true,
          effects: {
            insight: 2,
            flags: { keplerQuiz: "correcta" },
          },
          next: "kepler_quiz_correct",
        },
        {
          label: "Un átomo físico del que está hecha toda la materia del sólido.",
          description: "No se trata de una teoría material del universo.",
          effects: {
            flags: { keplerQuiz: "atomo" },
          },
          next: "kepler_quiz_wrong_1",
        },
        {
          label: "Un simple instrumento de medición que no cambia la teoría.",
          description: "Aquí la imagen misma transforma la manera de pensar.",
          effects: {
            flags: { keplerQuiz: "instrumento" },
          },
          next: "kepler_quiz_wrong_2",
        },
      ],
    }),
    dialogueBeat({
      id: "kepler_quiz_correct",
      chapter: "kepler-cavalieri",
      background: "cellar",
      location: "Bodega europea, siglo XVII",
      sprites: [sprite("alex", "left", "thinking"), sprite("cavalieri", "right", "inspired")],
      focusCharacter: "cavalieri",
      speaker: "Cavalieri",
      text: "Muy bien. No son partículas de madera ni trozos reales del sólido: son una forma de imaginar y comparar lo continuo mediante secciones.",
      next: "kepler_05",
    }),
    dialogueBeat({
      id: "kepler_quiz_wrong_1",
      chapter: "kepler-cavalieri",
      background: "cellar",
      location: "Bodega europea, siglo XVII",
      sprites: [sprite("alex", "left", "surprised"), sprite("cavalieri", "right", "serious")],
      focusCharacter: "cavalieri",
      speaker: "Cavalieri",
      text: "No hablo de átomos de materia. Hablo de una imaginación geométrica: líneas para áreas, hojas para sólidos, comparaciones que vuelven visible lo acumulado.",
      next: "kepler_05",
    }),
    dialogueBeat({
      id: "kepler_quiz_wrong_2",
      chapter: "kepler-cavalieri",
      background: "cellar",
      location: "Bodega europea, siglo XVII",
      sprites: [sprite("alex", "left", "surprised"), sprite("cavalieri", "right", "serious")],
      focusCharacter: "cavalieri",
      speaker: "Cavalieri",
      text: "No es un accesorio menor. Cambiar la imagen con la que pensamos una figura puede cambiar por completo la matemática que somos capaces de crear.",
      next: "kepler_05",
    }),
    dialogueBeat({
      id: "kepler_05",
      chapter: "kepler-cavalieri",
      background: "cellar",
      location: "Bodega europea, siglo XVII",
      sprites: [sprite("alex", "left", "thinking"), sprite("kepler", "center", "neutral"), sprite("cavalieri", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      effects: {
        insight: 1,
        completeChapter: "kepler-cavalieri",
      },
      text: "Ahora lo veo: el cálculo también creció porque alguien quiso medir barriles, comparar secciones y domesticar volúmenes complicados. La necesidad práctica empujó la idea.",
      next: "fermat_banner",
    }),

    chapterBeat("fermat_banner", "fermat", "fermatStudy", {
      kicker: "Capítulo III",
      title: "Fermat y el filo de la tangencia",
      text: "Antes de la derivada formal, la matemática ya olía a extremos, tangentes y cantidades casi iguales.",
    }, "fermat_01"),

    dialogueBeat({
      id: "fermat_01",
      chapter: "fermat",
      background: "fermatStudy",
      location: "Despacho de Fermat, Francia",
      sprites: [sprite("alex", "left", "surprised"), sprite("fermat", "right", "neutral")],
      focusCharacter: "fermat",
      speaker: "Fermat",
      effects: {
        unlockCodex: ["fermat"],
      },
      text: "Has llegado justo cuando una cantidad está a punto de dejar de crecer. En ese borde finísimo aparecen los máximos, los mínimos y las tangentes.",
      next: "fermat_02",
    }),
    dialogueBeat({
      id: "fermat_02",
      chapter: "fermat",
      background: "fermatStudy",
      location: "Despacho de Fermat, Francia",
      sprites: [sprite("alex", "left", "thinking"), sprite("fermat", "right", "teaching")],
      focusCharacter: "fermat",
      speaker: "Fermat",
      text: "Sustituyo una cantidad por otra apenas distinta: a por a+e. Luego comparo. Al final, esa e se desvanece porque se ha vuelto demasiado pequeña para importar.",
      next: "fermat_choice_01",
    }),
    choiceBeat({
      id: "fermat_choice_01",
      chapter: "fermat",
      background: "fermatStudy",
      location: "Despacho de Fermat, Francia",
      sprites: [sprite("alex", "left", "thinking"), sprite("fermat", "right", "teaching")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "¿Qué quiere entender Alex con más precisión?",
      choiceLabel: "El casi igual de Fermat",
      choices: [
        {
          label: "“Quiero entender qué haces con esa e.”",
          description: "Alex va al núcleo del razonamiento casi infinitesimal.",
          effects: {
            insight: 1,
            flags: { fermatChoice: "e" },
          },
          next: "fermat_branch_e",
        },
        {
          label: "“Quiero ver cómo nace una tangente.”",
          description: "Buscar la intuición geométrica detrás del cálculo.",
          effects: {
            flags: { fermatChoice: "tangente" },
          },
          next: "fermat_branch_tangent",
        },
        {
          label: "“Quiero saber por qué esto detecta un máximo o mínimo.”",
          description: "Relacionar el método con cambios de crecimiento.",
          effects: {
            insight: 1,
            flags: { fermatChoice: "extremos" },
          },
          next: "fermat_branch_extrema",
        },
      ],
    }),
    dialogueBeat({
      id: "fermat_branch_e",
      chapter: "fermat",
      background: "fermatStudy",
      location: "Despacho de Fermat, Francia",
      sprites: [sprite("alex", "left", "thinking"), sprite("fermat", "right", "teaching")],
      focusCharacter: "fermat",
      speaker: "Fermat",
      text: "La e me permite comparar dos estados casi indistinguibles de una misma cantidad. Después elimino los términos comunes y dejo que esa diferencia mínima se retire del escenario.",
      next: "fermat_03",
    }),
    dialogueBeat({
      id: "fermat_branch_tangent",
      chapter: "fermat",
      background: "fermatStudy",
      location: "Despacho de Fermat, Francia",
      sprites: [sprite("alex", "left", "thinking"), sprite("fermat", "right", "teaching")],
      focusCharacter: "fermat",
      speaker: "Fermat",
      text: "La tangente aparece cuando comparas la curva con una recta en un contacto extremo, tan localizado que apenas deja espacio entre una y otra. Allí la variación se vuelve decisiva.",
      next: "fermat_03",
    }),
    dialogueBeat({
      id: "fermat_branch_extrema",
      chapter: "fermat",
      background: "fermatStudy",
      location: "Despacho de Fermat, Francia",
      sprites: [sprite("alex", "left", "thinking"), sprite("fermat", "right", "teaching")],
      focusCharacter: "fermat",
      speaker: "Fermat",
      text: "En un máximo o mínimo la cantidad ya no crece ni decrece como antes. La comparación entre a y a+e descubre justamente ese borde donde el comportamiento cambia.",
      next: "fermat_03",
    }),
    dialogueBeat({
      id: "fermat_03",
      chapter: "fermat",
      background: "fermatStudy",
      location: "Despacho de Fermat, Francia",
      sprites: [sprite("alex", "left", "thinking"), sprite("fermat", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "Esto ya se parece mucho a lo que en mi clase llaman incremento. No es todavía una derivada formal, pero respira como una.",
      next: "fermat_quiz_01",
    }),
    choiceBeat({
      id: "fermat_quiz_01",
      chapter: "fermat",
      background: "fermatStudy",
      location: "Despacho de Fermat, Francia",
      sprites: [sprite("alex", "left", "thinking"), sprite("fermat", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Fermat",
      text: "Si tuvieras que resumir mi contribución, ¿qué dirías?",
      choiceLabel: "Comprobación de comprensión",
      choices: [
        {
          label: "Comparar una cantidad con una versión apenas modificada para estudiar tangentes y extremos.",
          description: "Ese es el núcleo proto-derivativo del método de Fermat.",
          correct: true,
          effects: {
            insight: 2,
            flags: { fermatQuiz: "correcta" },
          },
          next: "fermat_quiz_correct",
        },
        {
          label: "Introducir el símbolo integral tal como lo usan los cursos modernos.",
          description: "Eso pertenece a otra estación del viaje.",
          effects: {
            flags: { fermatQuiz: "integral" },
          },
          next: "fermat_quiz_wrong_1",
        },
        {
          label: "Abandonar por completo la geometría para trabajar solo con límites rigurosos.",
          description: "El rigor epsilon-delta todavía está lejos.",
          effects: {
            flags: { fermatQuiz: "limites" },
          },
          next: "fermat_quiz_wrong_2",
        },
      ],
    }),
    dialogueBeat({
      id: "fermat_quiz_correct",
      chapter: "fermat",
      background: "fermatStudy",
      location: "Despacho de Fermat, Francia",
      sprites: [sprite("alex", "left", "thinking"), sprite("fermat", "right", "inspired")],
      focusCharacter: "fermat",
      speaker: "Fermat",
      text: "Bien dicho. A veces la historia avanza antes de fijar su vocabulario. Lo importante es reconocer la forma de la idea cuando todavía vive sin nombre definitivo.",
      next: "fermat_04",
    }),
    dialogueBeat({
      id: "fermat_quiz_wrong_1",
      chapter: "fermat",
      background: "fermatStudy",
      location: "Despacho de Fermat, Francia",
      sprites: [sprite("alex", "left", "surprised"), sprite("fermat", "right", "serious")],
      focusCharacter: "fermat",
      speaker: "Fermat",
      text: "No. Mi huella está en la tangencia y los extremos, no en la notación integral. Esa elegancia vendrá un poco después.",
      next: "fermat_04",
    }),
    dialogueBeat({
      id: "fermat_quiz_wrong_2",
      chapter: "fermat",
      background: "fermatStudy",
      location: "Despacho de Fermat, Francia",
      sprites: [sprite("alex", "left", "surprised"), sprite("fermat", "right", "serious")],
      focusCharacter: "fermat",
      speaker: "Fermat",
      text: "Todavía no vivimos en esa claridad. Mi razonamiento es sutil, elegante, pero aún respira el aire incierto de lo infinitamente pequeño.",
      next: "fermat_04",
    }),
    dialogueBeat({
      id: "fermat_04",
      chapter: "fermat",
      background: "fermatStudy",
      location: "Despacho de Fermat, Francia",
      sprites: [sprite("alex", "left", "thinking"), sprite("fermat", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      effects: {
        insight: 1,
        completeChapter: "fermat",
      },
      text: "Empiezo a reconocer la derivada antes de su lenguaje definitivo. El cálculo aparece como una secuencia de intuiciones cada vez más afiladas.",
      next: "wallis_banner",
    }),

    chapterBeat("wallis_banner", "wallis", "oxford", {
      kicker: "Capítulo IV",
      title: "Wallis y el vértigo del infinito",
      text: "El cálculo comienza a dejar atrás algunas viejas dependencias geométricas y se vuelve más simbólico, más abstracto, más atrevido.",
    }, "wallis_01"),

    dialogueBeat({
      id: "wallis_01",
      chapter: "wallis",
      background: "oxford",
      location: "Oxford, 1655",
      sprites: [sprite("alex", "left", "surprised"), sprite("wallis", "right", "neutral")],
      focusCharacter: "wallis",
      speaker: "Wallis",
      effects: {
        unlockCodex: ["wallis"],
      },
      text: "¿Ves este ocho acostado? Es mi manera de nombrar lo que no termina. El infinito ya no será solo vértigo; también será un signo que puede entrar en el cálculo.",
      next: "wallis_02",
    }),
    dialogueBeat({
      id: "wallis_02",
      chapter: "wallis",
      background: "oxford",
      location: "Oxford, 1655",
      sprites: [sprite("alex", "left", "thinking"), sprite("wallis", "right", "teaching")],
      focusCharacter: "wallis",
      speaker: "Wallis",
      text: "No quiero depender siempre del dibujo. Puedo buscar patrones algebraicos y prolongarlos a casos nuevos, incluso a potencias fraccionarias y series difíciles.",
      next: "wallis_choice_01",
    }),
    choiceBeat({
      id: "wallis_choice_01",
      chapter: "wallis",
      background: "oxford",
      location: "Oxford, 1655",
      sprites: [sprite("alex", "left", "thinking"), sprite("wallis", "right", "teaching")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "¿Qué le intriga más a Alex de esta etapa?",
      choiceLabel: "La audacia de Wallis",
      choices: [
        {
          label: "El símbolo de infinito",
          description: "Cómo un signo puede domesticar una intuición enorme.",
          effects: {
            insight: 1,
            flags: { wallisChoice: "simbolo" },
          },
          next: "wallis_branch_symbol",
        },
        {
          label: "Las potencias fraccionarias",
          description: "Cómo el álgebra se atreve a extender patrones más allá de los casos cómodos.",
          effects: {
            flags: { wallisChoice: "potencias" },
          },
          next: "wallis_branch_powers",
        },
        {
          label: "La idea de saltar donde la geometría se detiene",
          description: "La abstracción como motor histórico.",
          effects: {
            insight: 1,
            flags: { wallisChoice: "analogia" },
          },
          next: "wallis_branch_analogy",
        },
      ],
    }),
    dialogueBeat({
      id: "wallis_branch_symbol",
      chapter: "wallis",
      background: "oxford",
      location: "Oxford, 1655",
      sprites: [sprite("alex", "left", "thinking"), sprite("wallis", "right", "teaching")],
      focusCharacter: "wallis",
      speaker: "Wallis",
      text: "Los signos importan porque fijan intuiciones. Cuando el infinito obtiene una forma visible, deja de ser solo espanto y empieza a participar en el razonamiento.",
      next: "wallis_03",
    }),
    dialogueBeat({
      id: "wallis_branch_powers",
      chapter: "wallis",
      background: "oxford",
      location: "Oxford, 1655",
      sprites: [sprite("alex", "left", "thinking"), sprite("wallis", "right", "teaching")],
      focusCharacter: "wallis",
      speaker: "Wallis",
      text: "Si un patrón funciona para varios exponentes enteros, quizás también pueda extenderse. El cálculo gana alcance cuando se atreve a generalizar con inteligencia.",
      next: "wallis_03",
    }),
    dialogueBeat({
      id: "wallis_branch_analogy",
      chapter: "wallis",
      background: "oxford",
      location: "Oxford, 1655",
      sprites: [sprite("alex", "left", "thinking"), sprite("wallis", "right", "teaching")],
      focusCharacter: "wallis",
      speaker: "Wallis",
      text: "Exactamente. A veces la geometría no alcanza a abrir la puerta, y entonces el álgebra se cuela por la rendija para seguir construyendo.",
      next: "wallis_03",
    }),
    dialogueBeat({
      id: "wallis_03",
      chapter: "wallis",
      background: "oxford",
      location: "Oxford, 1655",
      sprites: [sprite("alex", "left", "thinking"), sprite("wallis", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "Con Wallis todo se vuelve menos visible y más simbólico. Da vértigo, pero también siento que el cálculo gana velocidad y alcance.",
      next: "wallis_quiz_01",
    }),
    choiceBeat({
      id: "wallis_quiz_01",
      chapter: "wallis",
      background: "oxford",
      location: "Oxford, 1655",
      sprites: [sprite("alex", "left", "thinking"), sprite("wallis", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Wallis",
      text: "¿Qué cambio histórico representa mejor mi trabajo?",
      choiceLabel: "Comprobación de comprensión",
      choices: [
        {
          label: "Una matemática más simbólica y dispuesta a explorar patrones infinitos con audacia.",
          description: "Ese es el giro central de Wallis.",
          correct: true,
          effects: {
            insight: 2,
            flags: { wallisQuiz: "correcta" },
          },
          next: "wallis_quiz_correct",
        },
        {
          label: "El rechazo total del álgebra en favor de figuras puramente clásicas.",
          description: "Eso sería ir en la dirección contraria.",
          effects: {
            flags: { wallisQuiz: "rechazo" },
          },
          next: "wallis_quiz_wrong_1",
        },
        {
          label: "La invención del teorema fundamental tal como hoy se enseña.",
          description: "Ese puente todavía se está armando.",
          effects: {
            flags: { wallisQuiz: "teorema" },
          },
          next: "wallis_quiz_wrong_2",
        },
      ],
    }),
    dialogueBeat({
      id: "wallis_quiz_correct",
      chapter: "wallis",
      background: "oxford",
      location: "Oxford, 1655",
      sprites: [sprite("alex", "left", "thinking"), sprite("wallis", "right", "inspired")],
      focusCharacter: "wallis",
      speaker: "Wallis",
      text: "Así es. El análisis empieza a descubrir que un símbolo bien usado puede abrir regiones donde el dibujo ya no basta por sí solo.",
      next: "wallis_04",
    }),
    dialogueBeat({
      id: "wallis_quiz_wrong_1",
      chapter: "wallis",
      background: "oxford",
      location: "Oxford, 1655",
      sprites: [sprite("alex", "left", "surprised"), sprite("wallis", "right", "serious")],
      focusCharacter: "wallis",
      speaker: "Wallis",
      text: "No. Precisamente me interesa ensanchar el campo del álgebra. El cálculo no se hace más pequeño conmigo; se vuelve más arriesgado.",
      next: "wallis_04",
    }),
    dialogueBeat({
      id: "wallis_quiz_wrong_2",
      chapter: "wallis",
      background: "oxford",
      location: "Oxford, 1655",
      sprites: [sprite("alex", "left", "surprised"), sprite("wallis", "right", "serious")],
      focusCharacter: "wallis",
      speaker: "Wallis",
      text: "Ese puente aún no está terminado. Yo preparo el terreno simbólico; otros lo cruzarán con más claridad geométrica o mecánica.",
      next: "wallis_04",
    }),
    dialogueBeat({
      id: "wallis_04",
      chapter: "wallis",
      background: "oxford",
      location: "Oxford, 1655",
      sprites: [sprite("alex", "left", "thinking"), sprite("wallis", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      effects: {
        insight: 1,
        completeChapter: "wallis",
      },
      text: "El cálculo se está volviendo un lenguaje más libre y menos dependiente de la figura visible. Eso asusta, pero también prepara algo grande.",
      next: "barrow_banner",
    }),

    chapterBeat("barrow_banner", "barrow", "cambridge", {
      kicker: "Capítulo V",
      title: "Barrow y el puente geométrico",
      text: "En Cambridge, la tangente y el área empiezan a mirarse como dos rostros de una misma operación profunda.",
    }, "barrow_01"),

    dialogueBeat({
      id: "barrow_01",
      chapter: "barrow",
      background: "cambridge",
      location: "Cambridge, 1669",
      sprites: [sprite("alex", "left", "surprised"), sprite("barrow", "right", "neutral")],
      focusCharacter: "barrow",
      speaker: "Barrow",
      effects: {
        unlockCodex: ["barrow"],
      },
      text: "Mira este pequeño triángulo junto a la curva. Parece insignificante, pero en él se esconde una relación decisiva entre crecimiento y acumulación.",
      next: "barrow_02",
    }),
    dialogueBeat({
      id: "barrow_02",
      chapter: "barrow",
      background: "cambridge",
      location: "Cambridge, 1669",
      sprites: [sprite("alex", "left", "thinking"), sprite("barrow", "right", "teaching")],
      focusCharacter: "barrow",
      speaker: "Barrow",
      text: "Si una curva registra un área acumulada, su inclinación en cada punto está diciendo algo sobre la magnitud que se acumula. Hallar una tangente y hallar una cuadratura no son oficios extraños entre sí.",
      next: "barrow_choice_01",
    }),
    choiceBeat({
      id: "barrow_choice_01",
      chapter: "barrow",
      background: "cambridge",
      location: "Cambridge, 1669",
      sprites: [sprite("alex", "left", "thinking"), sprite("barrow", "right", "teaching")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "¿Qué quiere aclarar Alex sobre este puente?",
      choiceLabel: "La relación inversa",
      choices: [
        {
          label: "“¿Qué significa que sean operaciones inversas?”",
          description: "Ir al corazón del teorema fundamental en gestación.",
          effects: {
            insight: 1,
            flags: { barrowChoice: "inversas" },
          },
          next: "barrow_branch_inverse",
        },
        {
          label: "“¿Por qué lo explicas todavía con geometría?”",
          description: "Preguntar por la persistencia del lenguaje geométrico.",
          effects: {
            flags: { barrowChoice: "geometria" },
          },
          next: "barrow_branch_geometry",
        },
        {
          label: "“¿Esto ya es el teorema fundamental?”",
          description: "Buscar el nombre moderno detrás de la intuición.",
          effects: {
            insight: 1,
            flags: { barrowChoice: "teorema" },
          },
          next: "barrow_branch_theorem",
        },
      ],
    }),
    dialogueBeat({
      id: "barrow_branch_inverse",
      chapter: "barrow",
      background: "cambridge",
      location: "Cambridge, 1669",
      sprites: [sprite("alex", "left", "thinking"), sprite("barrow", "right", "teaching")],
      focusCharacter: "barrow",
      speaker: "Barrow",
      text: "Que una operación recupera la otra. Si acumulas una magnitud y luego miras cómo cambia esa acumulación, reaparece la magnitud original. Y al revés, bajo ciertas condiciones.",
      next: "barrow_03",
    }),
    dialogueBeat({
      id: "barrow_branch_geometry",
      chapter: "barrow",
      background: "cambridge",
      location: "Cambridge, 1669",
      sprites: [sprite("alex", "left", "thinking"), sprite("barrow", "right", "teaching")],
      focusCharacter: "barrow",
      speaker: "Barrow",
      text: "Porque aún estamos cruzando un puente histórico. El álgebra se fortalece, pero la geometría sigue dando intuición y legitimidad a lo que recién comienza a unificarse.",
      next: "barrow_03",
    }),
    dialogueBeat({
      id: "barrow_branch_theorem",
      chapter: "barrow",
      background: "cambridge",
      location: "Cambridge, 1669",
      sprites: [sprite("alex", "left", "thinking"), sprite("barrow", "right", "teaching")],
      focusCharacter: "barrow",
      speaker: "Barrow",
      text: "Aún no con la forma que tú conoces, pero sí con su nervio: la intuición de que la tangente y el área son procesos profundamente enlazados.",
      next: "barrow_03",
    }),
    dialogueBeat({
      id: "barrow_03",
      chapter: "barrow",
      background: "cambridge",
      location: "Cambridge, 1669",
      sprites: [sprite("alex", "left", "thinking"), sprite("barrow", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "Ahora sí aparece un puente real. La derivada y la integral dejan de ser países rivales: empiezan a mirarse como reversos de una misma conversación.",
      next: "barrow_quiz_01",
    }),
    choiceBeat({
      id: "barrow_quiz_01",
      chapter: "barrow",
      background: "cambridge",
      location: "Cambridge, 1669",
      sprites: [sprite("alex", "left", "thinking"), sprite("barrow", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Barrow",
      text: "Entonces, ¿qué intuición histórica se consolida aquí?",
      choiceLabel: "Comprobación de comprensión",
      choices: [
        {
          label: "Que los problemas de tangentes y áreas están profundamente conectados y pueden invertir sus efectos.",
          description: "La síntesis geométrica que prepara el teorema fundamental.",
          correct: true,
          effects: {
            insight: 2,
            flags: { barrowQuiz: "correcta" },
          },
          next: "barrow_quiz_correct",
        },
        {
          label: "Que el cálculo ya está completo y no necesita a nadie más.",
          description: "La historia aún tiene varias estaciones decisivas.",
          effects: {
            flags: { barrowQuiz: "completo" },
          },
          next: "barrow_quiz_wrong_1",
        },
        {
          label: "Que la integral es solo un adorno notacional sin contenido geométrico.",
          description: "Justo lo contrario de lo que Barrow está mostrando.",
          effects: {
            flags: { barrowQuiz: "adorno" },
          },
          next: "barrow_quiz_wrong_2",
        },
      ],
    }),
    dialogueBeat({
      id: "barrow_quiz_correct",
      chapter: "barrow",
      background: "cambridge",
      location: "Cambridge, 1669",
      sprites: [sprite("alex", "left", "thinking"), sprite("barrow", "right", "inspired")],
      focusCharacter: "barrow",
      speaker: "Barrow",
      text: "Sí. A veces la historia avanza cuando dos preguntas distintas revelan, de pronto, que estaban buscando la misma estructura.",
      next: "barrow_04",
    }),
    dialogueBeat({
      id: "barrow_quiz_wrong_1",
      chapter: "barrow",
      background: "cambridge",
      location: "Cambridge, 1669",
      sprites: [sprite("alex", "left", "surprised"), sprite("barrow", "right", "serious")],
      focusCharacter: "barrow",
      speaker: "Barrow",
      text: "Todavía no. Lo que ves es un puente naciendo. Otros deberán cruzarlo, nombrarlo y extenderlo con más poder y claridad.",
      next: "barrow_04",
    }),
    dialogueBeat({
      id: "barrow_quiz_wrong_2",
      chapter: "barrow",
      background: "cambridge",
      location: "Cambridge, 1669",
      sprites: [sprite("alex", "left", "surprised"), sprite("barrow", "right", "serious")],
      focusCharacter: "barrow",
      speaker: "Barrow",
      text: "No es un adorno. Aquí el área todavía pesa mucho; la geometría sigue sosteniendo el sentido de lo que el cálculo llegará a formalizar con otros signos.",
      next: "barrow_04",
    }),
    narrationBeat({
      id: "barrow_04",
      chapter: "barrow",
      background: "cambridge",
      location: "Cambridge, 1669",
      sprites: [sprite("alex", "left", "thinking"), sprite("barrow", "right", "neutral")],
      focusCharacter: "alex",
      effects: {
        insight: 1,
        completeChapter: "barrow",
      },
      text: "Un joven de mirada intensa cruza el pasillo detrás de Barrow. La tinta parece perseguirlo. Alex entiende que el siguiente salto del viaje ya está esperando.",
      next: "newton_banner",
    }),

    chapterBeat("newton_banner", "newton", "orchard", {
      kicker: "Capítulo VI",
      title: "Newton y las fluxiones",
      text: "En los años de peste, el cálculo se vuelve un instrumento para pensar el movimiento, el tiempo y la arquitectura de la naturaleza.",
    }, "newton_01"),

    dialogueBeat({
      id: "newton_01",
      chapter: "newton",
      background: "orchard",
      location: "Woolsthorpe, 1665-1666",
      sprites: [sprite("alex", "left", "surprised"), sprite("newton", "right", "neutral")],
      focusCharacter: "newton",
      speaker: "Newton",
      effects: {
        unlockCodex: ["newton"],
      },
      text: "Cambridge está cerrada por la peste, pero eso no detiene a la mente. Aquí, lejos del ruido, las cantidades parecen revelar cómo fluyen.",
      next: "newton_02",
    }),
    dialogueBeat({
      id: "newton_02",
      chapter: "newton",
      background: "orchard",
      location: "Woolsthorpe, 1665-1666",
      sprites: [sprite("alex", "left", "thinking"), sprite("newton", "right", "teaching")],
      focusCharacter: "newton",
      speaker: "Newton",
      text: "No pienso en magnitudes quietas. Pienso en magnitudes que cambian con el tiempo: las llamo fluentes. Su velocidad de cambio es la fluxión.",
      next: "newton_03",
    }),
    dialogueBeat({
      id: "newton_03",
      chapter: "newton",
      background: "orchard",
      location: "Woolsthorpe, 1665-1666",
      sprites: [sprite("alex", "left", "thinking"), sprite("newton", "right", "teaching")],
      focusCharacter: "newton",
      speaker: "Newton",
      text: "Por eso uso un punto sobre la letra: ẋ. Mi cálculo quiere seguir el ritmo del mundo, no solo describir una figura inmóvil.",
      next: "newton_choice_01",
    }),
    choiceBeat({
      id: "newton_choice_01",
      chapter: "newton",
      background: "orchard",
      location: "Woolsthorpe, 1665-1666",
      sprites: [sprite("alex", "left", "thinking"), sprite("newton", "right", "teaching")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "¿Qué lado de Newton necesita ver Alex con más claridad?",
      choiceLabel: "Las prioridades de Newton",
      choices: [
        {
          label: "Su idea de movimiento",
          description: "Cómo el tiempo entra en el corazón de su cálculo.",
          effects: {
            insight: 1,
            flags: { newtonChoice: "movimiento" },
          },
          next: "newton_branch_motion",
        },
        {
          label: "Sus series infinitas",
          description: "Cómo usa desarrollos infinitos para resolver problemas nuevos.",
          effects: {
            flags: { newtonChoice: "series" },
          },
          next: "newton_branch_series",
        },
        {
          label: "Su demora en publicar",
          description: "La parte humana, cautelosa y conflictiva de la ciencia.",
          effects: {
            insight: 1,
            flags: { newtonChoice: "publicacion" },
          },
          next: "newton_branch_publication",
        },
      ],
    }),
    dialogueBeat({
      id: "newton_branch_motion",
      chapter: "newton",
      background: "orchard",
      location: "Woolsthorpe, 1665-1666",
      sprites: [sprite("alex", "left", "thinking"), sprite("newton", "right", "teaching")],
      focusCharacter: "newton",
      speaker: "Newton",
      text: "Mi cálculo nace de una obsesión: comprender cómo algo pasa de un estado a otro sin saltos. El tiempo no es decoración; es la escena misma del cambio.",
      next: "newton_04",
    }),
    dialogueBeat({
      id: "newton_branch_series",
      chapter: "newton",
      background: "orchard",
      location: "Woolsthorpe, 1665-1666",
      sprites: [sprite("alex", "left", "thinking"), sprite("newton", "right", "teaching")],
      focusCharacter: "newton",
      speaker: "Newton",
      text: "Las series me permiten aproximar lo que el álgebra ordinaria no entrega de forma finita. No necesito el término último; me basta la exactitud deseada.",
      next: "newton_04",
    }),
    dialogueBeat({
      id: "newton_branch_publication",
      chapter: "newton",
      background: "orchard",
      location: "Woolsthorpe, 1665-1666",
      sprites: [sprite("alex", "left", "thinking"), sprite("newton", "right", "serious")],
      focusCharacter: "newton",
      speaker: "Newton",
      text: "Publicar no siempre trae claridad. A veces trae rivales, malentendidos y desgaste. La brillantez también conoce el miedo, incluso cuando está a punto de cambiar la historia.",
      next: "newton_04",
    }),
    dialogueBeat({
      id: "newton_04",
      chapter: "newton",
      background: "orchard",
      location: "Woolsthorpe, 1665-1666",
      sprites: [sprite("alex", "left", "thinking"), sprite("newton", "right", "neutral")],
      focusCharacter: "newton",
      speaker: "Newton",
      text: "Mis razones primeras y últimas son una forma de pensar momentos extremadamente pequeños del cambio. El cálculo sirve para perseguir la naturaleza en movimiento.",
      next: "newton_quiz_01",
    }),
    choiceBeat({
      id: "newton_quiz_01",
      chapter: "newton",
      background: "orchard",
      location: "Woolsthorpe, 1665-1666",
      sprites: [sprite("alex", "left", "thinking"), sprite("newton", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Newton",
      text: "¿Qué marca mejor mi enfoque del cálculo?",
      choiceLabel: "Comprobación de comprensión",
      choices: [
        {
          label: "Pensar magnitudes que fluyen y cambian con el tiempo, usando fluxiones para describir su velocidad.",
          description: "El sello más distintivo del enfoque newtoniano.",
          correct: true,
          effects: {
            insight: 2,
            flags: { newtonQuiz: "correcta" },
          },
          next: "newton_quiz_correct",
        },
        {
          label: "Crear la notación dx e ∫ que se usa en la mayoría de los cursos actuales.",
          description: "Esa parte principal del lenguaje pertenece a otra figura del viaje.",
          effects: {
            flags: { newtonQuiz: "notacion" },
          },
          next: "newton_quiz_wrong_1",
        },
        {
          label: "Negar toda relación entre cálculo y física.",
          description: "Justamente lo contrario: para Newton la física es central.",
          effects: {
            flags: { newtonQuiz: "fisica" },
          },
          next: "newton_quiz_wrong_2",
        },
      ],
    }),
    dialogueBeat({
      id: "newton_quiz_correct",
      chapter: "newton",
      background: "orchard",
      location: "Woolsthorpe, 1665-1666",
      sprites: [sprite("alex", "left", "thinking"), sprite("newton", "right", "inspired")],
      focusCharacter: "newton",
      speaker: "Newton",
      text: "Sí. Mi cálculo quiere seguir el cambio real: el recorrido de una manzana, la trayectoria de un planeta, el pulso de una magnitud en el tiempo.",
      next: "newton_05",
    }),
    dialogueBeat({
      id: "newton_quiz_wrong_1",
      chapter: "newton",
      background: "orchard",
      location: "Woolsthorpe, 1665-1666",
      sprites: [sprite("alex", "left", "surprised"), sprite("newton", "right", "serious")],
      focusCharacter: "newton",
      speaker: "Newton",
      text: "No. Mi huella principal aquí no es esa notación, sino el enfoque dinámico de las fluxiones y la visión física del cambio.",
      next: "newton_05",
    }),
    dialogueBeat({
      id: "newton_quiz_wrong_2",
      chapter: "newton",
      background: "orchard",
      location: "Woolsthorpe, 1665-1666",
      sprites: [sprite("alex", "left", "surprised"), sprite("newton", "right", "serious")],
      focusCharacter: "newton",
      speaker: "Newton",
      text: "De ningún modo. Sin física, mi cálculo pierde una de sus fuentes vitales. Lo necesito para pensar cómo cambia la naturaleza.",
      next: "newton_05",
    }),
    dialogueBeat({
      id: "newton_05",
      chapter: "newton",
      background: "orchard",
      location: "Woolsthorpe, 1665-1666",
      sprites: [sprite("alex", "left", "thinking"), sprite("newton", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      effects: {
        insight: 1,
        completeChapter: "newton",
      },
      text: "Con Newton, el cálculo deja de ser solo una técnica para curvas. Se vuelve un método para pensar el universo en movimiento, aunque su creador tarde en mostrarlo al mundo.",
      next: "leibniz_banner",
    }),

    chapterBeat("leibniz_banner", "leibniz", "parisLibrary", {
      kicker: "Capítulo VII",
      title: "Leibniz y el alfabeto del cálculo",
      text: "El análisis encuentra un lenguaje sorprendentemente elegante: diferencias, sumas infinitesimales y notación capaz de sobrevivir a siglos enteros.",
    }, "leibniz_01"),

    dialogueBeat({
      id: "leibniz_01",
      chapter: "leibniz",
      background: "parisLibrary",
      location: "París, 1673",
      sprites: [sprite("alex", "left", "surprised"), sprite("huygens", "center", "neutral"), sprite("leibniz", "right", "neutral")],
      focusCharacter: "leibniz",
      speaker: "Leibniz",
      effects: {
        unlockCodex: ["leibniz"],
      },
      text: "Huygens insiste en que lea, compare, ordene y calcule. Tiene razón: la matemática también puede crecer como una lengua bien construida.",
      next: "leibniz_02",
    }),
    dialogueBeat({
      id: "leibniz_02",
      chapter: "leibniz",
      background: "parisLibrary",
      location: "París, 1675",
      sprites: [sprite("alex", "left", "thinking"), sprite("leibniz", "right", "teaching")],
      focusCharacter: "leibniz",
      speaker: "Leibniz",
      text: "Si diferencias términos sucesivos y luego sumas, recuperas una estructura global. Allí hay una ley profunda: descomponer y recomponer no son gestos enemigos.",
      next: "leibniz_03",
    }),
    dialogueBeat({
      id: "leibniz_03",
      chapter: "leibniz",
      background: "parisLibrary",
      location: "París y Hannover, 1675",
      sprites: [sprite("alex", "left", "thinking"), sprite("leibniz", "right", "inspired")],
      focusCharacter: "leibniz",
      speaker: "Leibniz",
      text: "Esta S alargada significará summa. Y dx será una diferencia mínima en x. Juntos forman un alfabeto. Una vez escrito así, el cálculo se vuelve mucho más legible.",
      next: "leibniz_choice_01",
    }),
    choiceBeat({
      id: "leibniz_choice_01",
      chapter: "leibniz",
      background: "parisLibrary",
      location: "París y Hannover, 1675",
      sprites: [sprite("alex", "left", "thinking"), sprite("leibniz", "right", "inspired")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "¿Qué quiere desentrañar Alex sobre la notación de Leibniz?",
      choiceLabel: "El nuevo lenguaje",
      choices: [
        {
          label: "El signo integral",
          description: "Cómo una suma estilizada logra encerrar la idea de acumulación.",
          effects: {
            insight: 1,
            flags: { leibnizChoice: "integral" },
          },
          next: "leibniz_branch_integral",
        },
        {
          label: "El significado de dx",
          description: "La unidad mínima de diferencia como parte del nuevo alfabeto.",
          effects: {
            flags: { leibnizChoice: "dx" },
          },
          next: "leibniz_branch_dx",
        },
        {
          label: "Por qué esta notación sobrevivió",
          description: "Entender la victoria histórica del lenguaje leibniziano.",
          effects: {
            insight: 1,
            flags: { leibnizChoice: "supervivencia" },
          },
          next: "leibniz_branch_survival",
        },
      ],
    }),
    dialogueBeat({
      id: "leibniz_branch_integral",
      chapter: "leibniz",
      background: "parisLibrary",
      location: "París y Hannover, 1675",
      sprites: [sprite("alex", "left", "thinking"), sprite("leibniz", "right", "teaching")],
      focusCharacter: "leibniz",
      speaker: "Leibniz",
      text: "El signo integral conserva la memoria de una suma. No es un símbolo caprichoso: lleva dentro la idea de acumular infinitos rectángulos o diferencias elementales.",
      next: "leibniz_04",
    }),
    dialogueBeat({
      id: "leibniz_branch_dx",
      chapter: "leibniz",
      background: "parisLibrary",
      location: "París y Hannover, 1675",
      sprites: [sprite("alex", "left", "thinking"), sprite("leibniz", "right", "teaching")],
      focusCharacter: "leibniz",
      speaker: "Leibniz",
      text: "Dx es una diferencia mínima en la variable. Puede parecer humilde, pero con ella el cálculo gana un modo flexible y combinable de expresar relaciones.",
      next: "leibniz_04",
    }),
    dialogueBeat({
      id: "leibniz_branch_survival",
      chapter: "leibniz",
      background: "parisLibrary",
      location: "París y Hannover, 1675",
      sprites: [sprite("alex", "left", "thinking"), sprite("leibniz", "right", "teaching")],
      focusCharacter: "leibniz",
      speaker: "Leibniz",
      text: "Porque una notación clara puede viajar mejor que una teoría torpemente escrita. El lenguaje correcto vuelve más fácil enseñar, extender y compartir una idea.",
      next: "leibniz_04",
    }),
    dialogueBeat({
      id: "leibniz_04",
      chapter: "leibniz",
      background: "parisLibrary",
      location: "París y Hannover, 1675",
      sprites: [sprite("alex", "left", "surprised"), sprite("leibniz", "right", "inspired")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "¡Esos son los símbolos de mi clase! No nacieron en un pizarrón abstracto del presente; nacieron en una biblioteca, en medio de una búsqueda por escribir mejor el cambio.",
      next: "leibniz_quiz_01",
    }),
    choiceBeat({
      id: "leibniz_quiz_01",
      chapter: "leibniz",
      background: "parisLibrary",
      location: "París y Hannover, 1675",
      sprites: [sprite("alex", "left", "thinking"), sprite("leibniz", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Leibniz",
      text: "Entonces, ¿qué rasgo define mejor mi legado?",
      choiceLabel: "Comprobación de comprensión",
      choices: [
        {
          label: "Haber creado una notación diferencial e integral clara y poderosa que terminó imponiéndose.",
          description: "El sello más visible y duradero del enfoque leibniziano.",
          correct: true,
          effects: {
            insight: 2,
            flags: { leibnizQuiz: "correcta" },
          },
          next: "leibniz_quiz_correct",
        },
        {
          label: "Pensar el cálculo solo como teoría mecánica del movimiento planetario.",
          description: "Esa prioridad es más newtoniana.",
          effects: {
            flags: { leibnizQuiz: "mecanica" },
          },
          next: "leibniz_quiz_wrong_1",
        },
        {
          label: "Rechazar el uso de diferencias y sumas como lenguaje del análisis.",
          description: "Eso niega justamente la base de su propuesta.",
          effects: {
            flags: { leibnizQuiz: "rechazo" },
          },
          next: "leibniz_quiz_wrong_2",
        },
      ],
    }),
    dialogueBeat({
      id: "leibniz_quiz_correct",
      chapter: "leibniz",
      background: "parisLibrary",
      location: "París y Hannover, 1675",
      sprites: [sprite("alex", "left", "thinking"), sprite("leibniz", "right", "inspired")],
      focusCharacter: "leibniz",
      speaker: "Leibniz",
      text: "Así es. El cálculo no solo necesitaba ideas, sino también un idioma. Un idioma capaz de viajar mejor que sus inventores.",
      next: "leibniz_05",
    }),
    dialogueBeat({
      id: "leibniz_quiz_wrong_1",
      chapter: "leibniz",
      background: "parisLibrary",
      location: "París y Hannover, 1675",
      sprites: [sprite("alex", "left", "surprised"), sprite("leibniz", "right", "serious")],
      focusCharacter: "leibniz",
      speaker: "Leibniz",
      text: "No. Mi impulso principal aquí es lógico y simbólico: diferencias, sumas, signos que organizan el pensamiento.",
      next: "leibniz_05",
    }),
    dialogueBeat({
      id: "leibniz_quiz_wrong_2",
      chapter: "leibniz",
      background: "parisLibrary",
      location: "París y Hannover, 1675",
      sprites: [sprite("alex", "left", "surprised"), sprite("leibniz", "right", "serious")],
      focusCharacter: "leibniz",
      speaker: "Leibniz",
      text: "Al contrario. Precisamente quiero que esas diferencias y sumas se conviertan en una gramática del cálculo.",
      next: "leibniz_05",
    }),
    dialogueBeat({
      id: "leibniz_05",
      chapter: "leibniz",
      background: "parisLibrary",
      location: "París y Hannover, 1675",
      sprites: [sprite("alex", "left", "thinking"), sprite("leibniz", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      effects: {
        insight: 1,
        completeChapter: "leibniz",
      },
      text: "Ahora reconozco mi propio cuaderno dentro de la historia. Los signos de mi clase tienen fecha, propósito y la huella de una imaginación concreta.",
      next: "priority_banner",
    }),

    chapterBeat("priority_banner", "priority-dispute", "splitOrigins", {
      kicker: "Capítulo VIII",
      title: "La sombra de la disputa",
      text: "La historia del cálculo no termina con una invención brillante: también pasa por orgullo, demora editorial, nacionalismo y acusaciones.",
    }, "priority_01"),

    narrationBeat({
      id: "priority_01",
      chapter: "priority-dispute",
      background: "splitOrigins",
      location: "Entre Londres y Hannover",
      sprites: [sprite("newton", "left", "serious"), sprite("alex", "center", "thinking"), sprite("leibniz", "right", "serious")],
      focusCharacter: "alex",
      text: "A la izquierda, Newton piensa el cálculo como flujo y naturaleza. A la derecha, Leibniz lo articula como una lengua de diferencias. Alex mira ambos caminos y entiende que no son reflejos triviales entre sí.",
      next: "priority_02",
    }),
    dialogueBeat({
      id: "priority_02",
      chapter: "priority-dispute",
      background: "splitOrigins",
      location: "Entre Londres y Hannover",
      sprites: [sprite("newton", "left", "serious"), sprite("alex", "center", "thinking"), sprite("leibniz", "right", "serious")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "Los dos llegaron a algo muy parecido por rutas diferentes. Uno pensó con el tiempo y el movimiento; el otro con diferencias y notación. No se ve como copia: se ve como convergencia histórica.",
      next: "priority_03",
    }),
    narrationBeat({
      id: "priority_03",
      chapter: "priority-dispute",
      background: "royalSociety",
      location: "Royal Society, 1712",
      sprites: [sprite("alex", "left", "surprised"), sprite("newton", "center", "serious"), sprite("leibniz", "right", "serious")],
      focusCharacter: "newton",
      text: "Pero la claridad matemática no evita la tormenta humana. En Londres, la Royal Society presenta a Leibniz como sospechoso de plagio. Newton, ya poderoso, ocupa el centro de la escena.",
      next: "priority_choice_01",
    }),
    choiceBeat({
      id: "priority_choice_01",
      chapter: "priority-dispute",
      background: "royalSociety",
      location: "Royal Society, 1712",
      sprites: [sprite("alex", "left", "thinking"), sprite("newton", "center", "serious"), sprite("leibniz", "right", "serious")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "Si la historia va a ser justa, ¿qué conclusión debería preferir Alex?",
      choiceLabel: "Cómo leer la disputa",
      choices: [
        {
          label: "Que ambos desarrollaron el cálculo de forma independiente, con enfoques distintos y contextos diferentes.",
          description: "La lectura más matizada y responsable del conflicto.",
          correct: true,
          effects: {
            insight: 2,
            flags: { disputeChoice: "independiente" },
          },
          next: "priority_choice_correct",
        },
        {
          label: "Que la historia debe reducirse a héroes y villanos simples para que sea clara.",
          description: "La historia de la ciencia rara vez cabe en un reparto tan cómodo.",
          effects: {
            flags: { disputeChoice: "villanos" },
          },
          next: "priority_choice_wrong_1",
        },
        {
          label: "Que la única pregunta importante es quién publicó antes, sin importar el contenido ni el contexto.",
          description: "La prioridad importa, pero no agota el problema histórico.",
          effects: {
            flags: { disputeChoice: "publicacion" },
          },
          next: "priority_choice_wrong_2",
        },
      ],
    }),
    narrationBeat({
      id: "priority_choice_correct",
      chapter: "priority-dispute",
      background: "royalSociety",
      location: "Royal Society, 1712",
      sprites: [sprite("alex", "left", "thinking"), sprite("newton", "center", "serious"), sprite("leibniz", "right", "serious")],
      focusCharacter: "alex",
      text: "Alex respira aliviado. La historia puede ser más justa que el juicio inmediato: dos invenciones cercanas, una publicación tardía, una disputa agravada por orgullo y nacionalismo.",
      next: "priority_04",
    }),
    narrationBeat({
      id: "priority_choice_wrong_1",
      chapter: "priority-dispute",
      background: "royalSociety",
      location: "Royal Society, 1712",
      sprites: [sprite("alex", "left", "thinking"), sprite("newton", "center", "serious"), sprite("leibniz", "right", "serious")],
      focusCharacter: "alex",
      text: "La tentación de convertir la historia en un duelo moral es fuerte, pero aquí empobrece más de lo que aclara. La ciencia también se deforma cuando la cuenta el resentimiento.",
      next: "priority_04",
    }),
    narrationBeat({
      id: "priority_choice_wrong_2",
      chapter: "priority-dispute",
      background: "royalSociety",
      location: "Royal Society, 1712",
      sprites: [sprite("alex", "left", "thinking"), sprite("newton", "center", "serious"), sprite("leibniz", "right", "serious")],
      focusCharacter: "alex",
      text: "Publicar importa, sí, pero no lo explica todo. Las ideas, los métodos, la circulación de manuscritos y el clima político también modelan el recuerdo histórico.",
      next: "priority_04",
    }),
    narrationBeat({
      id: "priority_04",
      chapter: "priority-dispute",
      background: "royalSociety",
      location: "Royal Society, 1712",
      sprites: [sprite("alex", "left", "thinking"), sprite("newton", "center", "serious"), sprite("leibniz", "right", "serious")],
      focusCharacter: "alex",
      text: "La disputa no fue inocua. Durante décadas, parte del mundo matemático británico quedó aislado del desarrollo continental. La ciencia también puede perder tiempo por orgullo.",
      next: "priority_05",
    }),
    dialogueBeat({
      id: "priority_05",
      chapter: "priority-dispute",
      background: "royalSociety",
      location: "Royal Society, 1712",
      sprites: [sprite("alex", "center", "thinking")],
      focusCharacter: "alex",
      speaker: "Alex",
      effects: {
        insight: 1,
        completeChapter: "priority-dispute",
      },
      text: "El cálculo no es una leyenda limpia. También está hecho de egos, silencios, cartas y tribunales. Entender eso lo vuelve más humano, no menos grande.",
      next: "legacy_banner",
    }),

    chapterBeat("legacy_banner", "legacy", "legacyPress", {
      kicker: "Capítulo IX",
      title: "Los herederos del análisis",
      text: "Después de la invención llega la expansión: funciones, nueva notación, rigor y una lengua matemática capaz de atravesar casi cualquier disciplina.",
    }, "legacy_01"),

    dialogueBeat({
      id: "legacy_01",
      chapter: "legacy",
      background: "legacyPress",
      location: "Imprenta del análisis, siglos XVIII y XIX",
      sprites: [sprite("alex", "left", "surprised"), sprite("euler", "center", "neutral"), sprite("lagrange", "right", "neutral")],
      focusCharacter: "euler",
      speaker: "Euler",
      effects: {
        unlockCodex: ["euler", "lagrange"],
      },
      text: "Bienvenido a la época en que el cálculo deja de ser un hallazgo brillante y se vuelve una maquinaria inmensa. Ya no hablamos solo de curvas: hablamos de funciones.",
      next: "legacy_02",
    }),
    dialogueBeat({
      id: "legacy_02",
      chapter: "legacy",
      background: "legacyPress",
      location: "Imprenta del análisis, siglos XVIII y XIX",
      sprites: [sprite("alex", "left", "thinking"), sprite("euler", "center", "teaching"), sprite("lagrange", "right", "neutral")],
      focusCharacter: "euler",
      speaker: "Euler",
      text: "Con el cálculo podemos describir movimiento, fluidos, oscilaciones, astronomía y más. Una vez que una herramienta funciona, el mundo entero empieza a pedirla.",
      next: "legacy_03",
    }),
    dialogueBeat({
      id: "legacy_03",
      chapter: "legacy",
      background: "legacyPress",
      location: "Imprenta del análisis, siglos XVIII y XIX",
      sprites: [sprite("alex", "left", "thinking"), sprite("euler", "center", "neutral"), sprite("lagrange", "right", "teaching")],
      focusCharacter: "lagrange",
      speaker: "Lagrange",
      text: "Y luego viene el deseo de refinar. Escribimos f'(x), reorganizamos la teoría, buscamos hacerla más clara. El cálculo no solo se usa: también se pule.",
      next: "legacy_04",
    }),
    narrationBeat({
      id: "legacy_04",
      chapter: "legacy",
      background: "legacyPress",
      location: "El corredor del rigor",
      sprites: [sprite("cauchy", "center", "neutral"), sprite("weierstrass", "right", "neutral"), sprite("alex", "left", "thinking")],
      focusCharacter: "alex",
      effects: {
        unlockCodex: ["cauchy", "weierstrass"],
      },
      text: "Más al fondo aparecen Cauchy y Weierstrass. No vienen a destruir el cálculo, sino a limpiar su lenguaje: precisión para continuidad, convergencia, límite y demostración.",
      next: "legacy_choice_01",
    }),
    choiceBeat({
      id: "legacy_choice_01",
      chapter: "legacy",
      background: "legacyPress",
      location: "El corredor del rigor",
      sprites: [sprite("alex", "left", "thinking"), sprite("euler", "center", "neutral"), sprite("lagrange", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "¿Qué parte del legado quiere seguir Alex un instante más?",
      choiceLabel: "Tres herencias del cálculo",
      choices: [
        {
          label: "La expansión a funciones y fenómenos",
          description: "Seguir la ambición universal de Euler.",
          effects: {
            insight: 1,
            flags: { legacyChoice: "funciones" },
          },
          next: "legacy_branch_functions",
        },
        {
          label: "La reorganización del lenguaje",
          description: "Mirar cómo Lagrange refina y reescribe.",
          effects: {
            flags: { legacyChoice: "lenguaje" },
          },
          next: "legacy_branch_language",
        },
        {
          label: "El deseo de rigor",
          description: "Entender por qué luego hubo que precisar la idea de límite.",
          effects: {
            insight: 1,
            flags: { legacyChoice: "rigor" },
          },
          next: "legacy_branch_rigor",
        },
      ],
    }),
    dialogueBeat({
      id: "legacy_branch_functions",
      chapter: "legacy",
      background: "legacyPress",
      location: "Imprenta del análisis, siglos XVIII y XIX",
      sprites: [sprite("alex", "left", "thinking"), sprite("euler", "center", "teaching"), sprite("lagrange", "right", "neutral")],
      focusCharacter: "euler",
      speaker: "Euler",
      text: "Cuando el cálculo se encuentra con funciones, deja de ser una técnica local y se convierte en una gramática general para describir regularidades del mundo.",
      next: "legacy_05",
    }),
    dialogueBeat({
      id: "legacy_branch_language",
      chapter: "legacy",
      background: "legacyPress",
      location: "Imprenta del análisis, siglos XVIII y XIX",
      sprites: [sprite("alex", "left", "thinking"), sprite("euler", "center", "neutral"), sprite("lagrange", "right", "teaching")],
      focusCharacter: "lagrange",
      speaker: "Lagrange",
      text: "Toda gran teoría necesita una segunda vida: la vida en que se corrige, se enseña mejor y se vuelve más transparente para otros matemáticos.",
      next: "legacy_05",
    }),
    dialogueBeat({
      id: "legacy_branch_rigor",
      chapter: "legacy",
      background: "legacyPress",
      location: "El corredor del rigor",
      sprites: [sprite("alex", "left", "thinking"), sprite("cauchy", "center", "teaching"), sprite("weierstrass", "right", "neutral")],
      focusCharacter: "cauchy",
      speaker: "Cauchy",
      text: "Las intuiciones de los infinitésimos fueron poderosas, pero también pedían disciplina. Dar definiciones más precisas no mata el cálculo; lo fortalece.",
      next: "legacy_05",
    }),
    dialogueBeat({
      id: "legacy_05",
      chapter: "legacy",
      background: "legacyPress",
      location: "Imprenta del análisis, siglos XVIII y XIX",
      sprites: [sprite("alex", "left", "thinking"), sprite("euler", "center", "neutral"), sprite("lagrange", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "La historia no termina con un descubrimiento. El cálculo se expande, se refina y se vuelve más exacto. Es una tradición viva, no un solo momento heroico.",
      next: "legacy_quiz_01",
    }),
    choiceBeat({
      id: "legacy_quiz_01",
      chapter: "legacy",
      background: "legacyPress",
      location: "Imprenta del análisis, siglos XVIII y XIX",
      sprites: [sprite("alex", "left", "thinking"), sprite("euler", "center", "neutral"), sprite("lagrange", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Euler",
      text: "¿Cuál es la lectura más justa del legado posterior?",
      choiceLabel: "Comprobación de comprensión",
      choices: [
        {
          label: "Que el cálculo se expandió a nuevas áreas y, además, fue formalizado y aclarado por generaciones posteriores.",
          description: "La interpretación histórica más completa.",
          correct: true,
          effects: {
            insight: 2,
            flags: { legacyQuiz: "correcta" },
          },
          next: "legacy_quiz_correct",
        },
        {
          label: "Que después de Newton y Leibniz ya no pasó nada importante.",
          description: "La historia contradice por completo esa simplificación.",
          effects: {
            flags: { legacyQuiz: "nada" },
          },
          next: "legacy_quiz_wrong_1",
        },
        {
          label: "Que el rigor posterior destruyó la intuición original y la volvió inútil.",
          description: "El rigor cambió el lenguaje, no la relevancia del cálculo.",
          effects: {
            flags: { legacyQuiz: "destruyo" },
          },
          next: "legacy_quiz_wrong_2",
        },
      ],
    }),
    dialogueBeat({
      id: "legacy_quiz_correct",
      chapter: "legacy",
      background: "legacyPress",
      location: "Imprenta del análisis, siglos XVIII y XIX",
      sprites: [sprite("alex", "left", "thinking"), sprite("euler", "center", "inspired"), sprite("lagrange", "right", "neutral")],
      focusCharacter: "euler",
      speaker: "Euler",
      text: "Exactamente. El cálculo no fue una chispa aislada. Fue una tradición que se volvió más vasta, más eficaz y también más precisa.",
      next: "legacy_06",
    }),
    dialogueBeat({
      id: "legacy_quiz_wrong_1",
      chapter: "legacy",
      background: "legacyPress",
      location: "Imprenta del análisis, siglos XVIII y XIX",
      sprites: [sprite("alex", "left", "surprised"), sprite("euler", "center", "serious"), sprite("lagrange", "right", "neutral")],
      focusCharacter: "euler",
      speaker: "Euler",
      text: "Al contrario. Después del origen vino la expansión. Una idea poderosa no termina cuando nace; recién entonces empieza a viajar.",
      next: "legacy_06",
    }),
    dialogueBeat({
      id: "legacy_quiz_wrong_2",
      chapter: "legacy",
      background: "legacyPress",
      location: "Imprenta del análisis, siglos XVIII y XIX",
      sprites: [sprite("alex", "left", "surprised"), sprite("cauchy", "center", "serious"), sprite("weierstrass", "right", "neutral")],
      focusCharacter: "cauchy",
      speaker: "Cauchy",
      text: "El rigor no borra la intuición. Le da un suelo más firme para que pueda sostenerse sin ambigüedad.",
      next: "legacy_06",
    }),
    narrationBeat({
      id: "legacy_06",
      chapter: "legacy",
      background: "threshold",
      location: "La ráfaga del conocimiento",
      sprites: [sprite("alex", "center", "thinking")],
      focusCharacter: "alex",
      effects: {
        insight: 1,
        completeChapter: "legacy",
      },
      text: "Libros, símbolos, funciones y límites se mezclan en una corriente luminosa. Alex siente que todo el viaje está a punto de cerrarse en el mismo lugar donde comenzó.",
      next: "finale_banner",
    }),

    chapterBeat("finale_banner", "finale", "classroomReturn", {
      kicker: "Capítulo Final",
      title: "El despertar de Alex",
      text: "La clase sigue allí, pero Alex ya no es el mismo: ahora mira el cálculo como una historia colectiva sobre el cambio.",
    }, "finale_01"),

    dialogueBeat({
      id: "finale_01",
      chapter: "finale",
      background: "classroomReturn",
      location: "Aula de cálculo, presente",
      sprites: [sprite("alex", "left", "surprised"), sprite("profesor", "right", "neutral")],
      focusCharacter: "profesor",
      speaker: "Profesor",
      text: "¿Alex? Volviste de muy lejos o te quedaste dormido de forma memorable. ¿Alguna duda sobre el teorema fundamental?",
      next: "finale_02",
    }),
    narrationBeat({
      id: "finale_02",
      chapter: "finale",
      background: "classroomReturn",
      location: "Aula de cálculo, presente",
      sprites: [sprite("alex", "center", "thinking")],
      focusCharacter: "alex",
      text: "Alex mira el pizarrón. Ya no ve símbolos aislados: ve a Arquímedes cercando una curva, a Barrow tendiendo un puente, a Newton persiguiendo el movimiento y a Leibniz escribiendo un idioma.",
      next: "finale_choice_01",
    }),
    choiceBeat({
      id: "finale_choice_01",
      chapter: "finale",
      background: "classroomReturn",
      location: "Aula de cálculo, presente",
      sprites: [sprite("alex", "left", "inspired"), sprite("profesor", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "¿Cómo responde Alex al profesor?",
      choiceLabel: "La respuesta final",
      choices: [
        {
          label: "“No es solo un teorema. Es una conversación de dos mil años.”",
          description: "Alex expresa la dimensión histórica y humana del cálculo.",
          correct: true,
          effects: {
            insight: 2,
            flags: { finaleChoice: "conversacion" },
          },
          next: "finale_answer_conversation",
        },
        {
          label: "“Ahora entiendo por qué derivar e integrar se responden.”",
          description: "Alex subraya la conexión conceptual central del viaje.",
          effects: {
            insight: 1,
            flags: { finaleChoice: "conexion" },
          },
          next: "finale_answer_connection",
        },
        {
          label: "“Creo que por fin dejé de ver monstruos en esas fórmulas.”",
          description: "Alex habla desde la transformación emocional del aprendizaje.",
          effects: {
            insight: 1,
            flags: { finaleChoice: "emocion" },
          },
          next: "finale_answer_emotion",
        },
      ],
    }),
    dialogueBeat({
      id: "finale_answer_conversation",
      chapter: "finale",
      background: "classroomReturn",
      location: "Aula de cálculo, presente",
      sprites: [sprite("alex", "left", "inspired"), sprite("profesor", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "No es solo un teorema, profesor. Es una conversación de dos mil años entre gente que quiso medir lo curvo, lo cambiante y lo infinito sin rendirse.",
      next: "finale_03",
    }),
    dialogueBeat({
      id: "finale_answer_connection",
      chapter: "finale",
      background: "classroomReturn",
      location: "Aula de cálculo, presente",
      sprites: [sprite("alex", "left", "inspired"), sprite("profesor", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "Ahora entiendo por qué derivar e integrar se responden. No es una coincidencia técnica: es el resultado de siglos de preguntas que por fin lograron encontrarse.",
      next: "finale_03",
    }),
    dialogueBeat({
      id: "finale_answer_emotion",
      chapter: "finale",
      background: "classroomReturn",
      location: "Aula de cálculo, presente",
      sprites: [sprite("alex", "left", "inspired"), sprite("profesor", "right", "neutral")],
      focusCharacter: "alex",
      speaker: "Alex",
      text: "Creo que por fin dejé de ver monstruos en esas fórmulas. Ahora veo personas, preguntas, discusiones y un lenguaje que fue naciendo poco a poco.",
      next: "finale_03",
    }),
    narrationBeat({
      id: "finale_03",
      chapter: "finale",
      background: "campus",
      location: "Exterior de la universidad, atardecer",
      sprites: [sprite("alex", "center", "inspired")],
      focusCharacter: "alex",
      effects: {
        insight: 1,
        completeChapter: "finale",
        journeyFinished: true,
      },
      text: "Al salir del aula, Alex mira las hojas agitadas por el viento, los autos tomando una curva, las sombras estirándose sobre el campus. El cálculo ya no le parece una tortura académica: le parece el lenguaje del cambio.",
      next: "finale_end",
    }),

    endBeat({
      id: "finale_end",
      chapter: "finale",
      background: "campus",
      location: "Exterior de la universidad, atardecer",
      sprites: [sprite("alex", "center", "inspired")],
      focusCharacter: "alex",
      speaker: "Cuaderno de viaje",
      text: "La odisea ha terminado. El viaje histórico queda abierto en el códice, listo para ser releído desde cualquier época.",
      endTitle: "Fin de La Odisea del Cálculo",
      endText: (gameState) => {
        const unlocked = gameState.unlockedCodex.length;
        const insightLine = `Comprensión reunida: ${gameState.insight}. Entradas desbloqueadas: ${unlocked}.`;
        if (gameState.insight >= 20) {
          return `${insightLine} Alex vuelve al presente con una mirada madura: entiende que cada derivada e integral es una herramienta heredada de siglos de imaginación, discusión y rigor.`;
        }
        if (gameState.insight >= 14) {
          return `${insightLine} Alex regresa transformado: ya no ve el cálculo como un muro, sino como una historia humana compleja y fascinante.`;
        }
        return `${insightLine} Alex ha cambiado: incluso sin captar cada detalle, ya sabe que el cálculo no apareció de golpe, sino como una larga conversación sobre el cambio.`;
      },
      actions: [
        { label: "Abrir códice", type: "codex" },
        { label: "Volver al título", type: "title" },
        { label: "Reiniciar la odisea", type: "restart" },
      ],
    }),
  ];
}

function svgToDataUri(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function generateBackgroundArt(key) {
  switch (key) {
    case "classroom":
      return wrapSceneSvg(`
        <rect width="1600" height="900" fill="#112235" />
        <rect y="600" width="1600" height="300" fill="#2f1e16" />
        <rect x="140" y="130" width="640" height="300" rx="18" fill="#163243" stroke="#8ec2d4" stroke-width="6" opacity="0.95" />
        <rect x="170" y="160" width="580" height="240" rx="12" fill="#244d35" stroke="#d9e2cc" stroke-width="4" />
        <text x="220" y="230" fill="#eef7ef" font-size="42" font-family="Georgia, serif">d/dx sin(x) = cos(x)</text>
        <text x="220" y="290" fill="#eef7ef" font-size="44" font-family="Georgia, serif">∫ f'(x) dx = f(x) + C</text>
        <text x="220" y="350" fill="#dbe6d6" font-size="34" font-family="Georgia, serif">Teorema Fundamental del Cálculo</text>
        <rect x="930" y="120" width="500" height="250" rx="18" fill="#d8e6ef" opacity="0.92" />
        <rect x="965" y="155" width="430" height="180" rx="12" fill="#93b9d7" />
        <rect x="1040" y="155" width="8" height="180" fill="#d8e6ef" opacity="0.8" />
        <rect x="1180" y="155" width="8" height="180" fill="#d8e6ef" opacity="0.8" />
        <polygon points="1080,520 1320,520 1400,610 1160,610" fill="#6e513f" />
        <polygon points="820,520 1040,520 1120,610 900,610" fill="#614735" />
        <polygon points="540,520 760,520 840,610 620,610" fill="#735948" />
        <polygon points="260,520 480,520 560,610 340,610" fill="#6a4c39" />
        <rect x="1180" y="430" width="160" height="110" rx="16" fill="#2e3744" />
        <rect x="1160" y="408" width="200" height="28" rx="14" fill="#d8dde5" opacity="0.8" />
        <circle cx="1225" cy="485" r="22" fill="#f0d49e" />
        <rect x="1210" y="505" width="30" height="62" rx="15" fill="#5e7488" />
      `);
    case "threshold":
      return wrapSceneSvg(`
        <rect width="1600" height="900" fill="#0b1020" />
        <g opacity="0.9">
          <circle cx="180" cy="180" r="3" fill="#f8e7b1" />
          <circle cx="340" cy="120" r="4" fill="#f8e7b1" />
          <circle cx="540" cy="240" r="3" fill="#f8e7b1" />
          <circle cx="760" cy="120" r="4" fill="#f8e7b1" />
          <circle cx="980" cy="200" r="3" fill="#f8e7b1" />
          <circle cx="1240" cy="110" r="4" fill="#f8e7b1" />
          <circle cx="1440" cy="200" r="3" fill="#f8e7b1" />
        </g>
        <path d="M0 610 C220 560 360 690 560 640 C760 590 860 500 1040 560 C1220 620 1400 560 1600 610 L1600 900 L0 900 Z" fill="#18294e" />
        <path d="M0 680 C200 620 380 770 560 710 C760 640 880 590 1040 650 C1200 710 1380 650 1600 690 L1600 900 L0 900 Z" fill="#253b6e" />
        <g opacity="0.65" fill="#d7b56f" font-family="Georgia, serif">
          <text x="240" y="320" font-size="70">∫</text>
          <text x="420" y="220" font-size="54">dx</text>
          <text x="620" y="320" font-size="58">∞</text>
          <text x="810" y="420" font-size="44">f'(x)</text>
          <text x="1040" y="280" font-size="50">π</text>
          <text x="1260" y="360" font-size="56">Σ</text>
        </g>
      `);
    case "syracuse":
      return wrapSceneSvg(`
        <rect width="1600" height="900" fill="#17344d" />
        <rect width="1600" height="430" fill="#77b3d3" />
        <rect y="430" width="1600" height="120" fill="#2e6f87" />
        <rect y="550" width="1600" height="350" fill="#d5a974" />
        <path d="M0 470 C180 450 340 520 520 490 C700 460 850 520 1040 490 C1230 460 1410 510 1600 480" stroke="#f1f4f5" stroke-width="7" fill="none" opacity="0.65" />
        <rect x="1180" y="280" width="220" height="180" fill="#dbc8a2" opacity="0.9" />
        <polygon points="1160,300 1290,220 1420,300" fill="#d6c090" />
        <rect x="1210" y="320" width="28" height="140" fill="#b99566" />
        <rect x="1266" y="320" width="28" height="140" fill="#b99566" />
        <rect x="1322" y="320" width="28" height="140" fill="#b99566" />
        <circle cx="220" cy="120" r="64" fill="#f4d38c" opacity="0.95" />
        <path d="M180 650 Q320 530 440 640" stroke="#8b5f34" stroke-width="8" fill="none" />
        <polygon points="220,640 360,640 430,720 150,720" fill="none" stroke="#65452b" stroke-width="7" />
        <text x="248" y="690" fill="#65452b" font-size="48" font-family="Georgia, serif">96 lados</text>
      `);
    case "cellar":
      return wrapSceneSvg(`
        <rect width="1600" height="900" fill="#231817" />
        <rect y="620" width="1600" height="280" fill="#5a3a28" />
        <path d="M120 620 Q200 330 280 620" fill="#3b231b" />
        <path d="M460 620 Q540 320 620 620" fill="#3b231b" />
        <path d="M800 620 Q880 300 960 620" fill="#3b231b" />
        <path d="M1140 620 Q1220 320 1300 620" fill="#3b231b" />
        <path d="M1480 620 Q1560 340 1640 620" fill="#3b231b" />
        <ellipse cx="320" cy="550" rx="90" ry="48" fill="#7e5335" />
        <rect x="230" y="410" width="180" height="150" fill="#8d5f3c" />
        <ellipse cx="320" cy="410" rx="90" ry="48" fill="#9a6840" />
        <ellipse cx="640" cy="560" rx="84" ry="44" fill="#6f472e" />
        <rect x="556" y="438" width="168" height="132" fill="#7d5235" />
        <ellipse cx="640" cy="438" rx="84" ry="44" fill="#8a5d3c" />
        <rect x="1040" y="260" width="180" height="260" rx="12" fill="#c8b08e" />
        <line x1="1072" y1="300" x2="1186" y2="300" stroke="#8b6a45" stroke-width="6" />
        <line x1="1072" y1="348" x2="1186" y2="348" stroke="#8b6a45" stroke-width="6" />
        <line x1="1072" y1="396" x2="1186" y2="396" stroke="#8b6a45" stroke-width="6" />
        <text x="1080" y="470" fill="#7c5b37" font-size="40" font-family="Georgia, serif">indivisibles</text>
      `);
    case "fermatStudy":
      return wrapSceneSvg(`
        <rect width="1600" height="900" fill="#261923" />
        <rect y="650" width="1600" height="250" fill="#513025" />
        <rect x="980" y="120" width="360" height="240" rx="18" fill="#d4c1a0" opacity="0.92" />
        <rect x="1020" y="160" width="280" height="160" rx="12" fill="#9cb7d0" />
        <rect x="1120" y="160" width="8" height="160" fill="#d4c1a0" />
        <rect x="640" y="520" width="520" height="120" rx="20" fill="#744c36" />
        <rect x="710" y="430" width="320" height="130" rx="14" fill="#dbc79e" transform="rotate(-6 870 495)" />
        <text x="740" y="515" fill="#6a4329" font-size="44" font-family="Georgia, serif">a + e</text>
        <text x="870" y="545" fill="#6a4329" font-size="40" font-family="Georgia, serif">≈</text>
        <text x="960" y="565" fill="#6a4329" font-size="42" font-family="Georgia, serif">a</text>
        <rect x="300" y="470" width="42" height="130" rx="10" fill="#e9d0a1" />
        <ellipse cx="321" cy="452" rx="28" ry="40" fill="#ffcc7e" opacity="0.9" />
      `);
    case "oxford":
      return wrapSceneSvg(`
        <rect width="1600" height="900" fill="#181920" />
        <rect y="650" width="1600" height="250" fill="#4a3a2a" />
        <rect x="1090" y="120" width="260" height="360" rx="24" fill="#a89673" opacity="0.9" />
        <text x="1160" y="340" fill="#f6edcd" font-size="180" font-family="Georgia, serif">∞</text>
        <rect x="280" y="210" width="520" height="300" rx="18" fill="#d7c7a3" transform="rotate(-4 540 360)" />
        <text x="380" y="320" fill="#654c32" font-size="52" font-family="Georgia, serif">1, 2, 3, 4...</text>
        <text x="350" y="398" fill="#654c32" font-size="46" font-family="Georgia, serif">x½, x⅔, x¾</text>
        <circle cx="1460" cy="160" r="60" fill="#d8bf86" opacity="0.18" />
      `);
    case "cambridge":
      return wrapSceneSvg(`
        <rect width="1600" height="900" fill="#171922" />
        <rect y="640" width="1600" height="260" fill="#4b382a" />
        <path d="M140 640 Q220 300 300 640" fill="#2f2c34" />
        <path d="M460 640 Q540 290 620 640" fill="#2f2c34" />
        <path d="M780 640 Q860 300 940 640" fill="#2f2c34" />
        <path d="M1100 640 Q1180 290 1260 640" fill="#2f2c34" />
        <rect x="980" y="180" width="360" height="220" rx="18" fill="#d6c8a3" />
        <path d="M1020 340 Q1120 260 1220 310" stroke="#62472f" stroke-width="8" fill="none" />
        <path d="M1020 320 Q1070 420 1140 380" stroke="#62472f" stroke-width="6" fill="none" />
        <text x="1030" y="250" fill="#62472f" font-size="40" font-family="Georgia, serif">área ↔ tangente</text>
      `);
    case "orchard":
      return wrapSceneSvg(`
        <rect width="1600" height="900" fill="#182126" />
        <rect width="1600" height="420" fill="#95c0cc" />
        <rect y="420" width="1600" height="480" fill="#8aa05e" />
        <rect x="1100" y="360" width="260" height="220" fill="#c3a27b" />
        <polygon points="1070,390 1230,270 1390,390" fill="#6c4c36" />
        <rect x="290" y="260" width="52" height="300" fill="#6d4d33" />
        <circle cx="315" cy="220" r="120" fill="#4d7d45" />
        <circle cx="240" cy="250" r="86" fill="#5a8f51" />
        <circle cx="390" cy="250" r="86" fill="#5a8f51" />
        <circle cx="350" cy="190" r="82" fill="#5f9757" />
        <circle cx="360" cy="300" r="14" fill="#b1423d" />
        <circle cx="260" cy="220" r="14" fill="#b1423d" />
        <circle cx="404" cy="254" r="14" fill="#b1423d" />
        <rect x="760" y="460" width="240" height="110" rx="18" fill="#cdb58b" transform="rotate(-8 880 515)" />
        <text x="790" y="540" fill="#5f472d" font-size="42" font-family="Georgia, serif">ẋ   ẏ   ż</text>
      `);
    case "parisLibrary":
      return wrapSceneSvg(`
        <rect width="1600" height="900" fill="#1b1620" />
        <rect y="650" width="1600" height="250" fill="#593f31" />
        <rect x="120" y="160" width="220" height="430" fill="#4e352a" />
        <rect x="1260" y="160" width="220" height="430" fill="#4e352a" />
        <rect x="520" y="120" width="560" height="300" rx="18" fill="#d7c6a3" opacity="0.9" />
        <rect x="560" y="160" width="480" height="220" rx="12" fill="#8aa0c5" />
        <rect x="795" y="160" width="10" height="220" fill="#d7c6a3" />
        <rect x="660" y="480" width="340" height="120" rx="18" fill="#7c573e" />
        <text x="710" y="560" fill="#f6edcd" font-size="84" font-family="Georgia, serif">∫  y dx</text>
        <text x="200" y="290" fill="#dbc79f" font-size="32" font-family="Georgia, serif">Pascal</text>
        <text x="1320" y="290" fill="#dbc79f" font-size="32" font-family="Georgia, serif">Huygens</text>
      `);
    case "splitOrigins":
      return wrapSceneSvg(`
        <rect width="800" height="900" fill="#1f2434" />
        <rect x="800" width="800" height="900" fill="#30203a" />
        <rect y="620" width="800" height="280" fill="#3d2e24" />
        <rect x="800" y="620" width="800" height="280" fill="#4e3a31" />
        <circle cx="240" cy="180" r="90" fill="#d6c68c" opacity="0.16" />
        <circle cx="1360" cy="180" r="90" fill="#e4c38a" opacity="0.16" />
        <rect x="190" y="420" width="320" height="110" rx="18" fill="#cfba90" transform="rotate(-8 350 475)" />
        <text x="240" y="500" fill="#5a432f" font-size="48" font-family="Georgia, serif">ẋ  ẏ</text>
        <text x="1020" y="480" fill="#f3e7bf" font-size="102" font-family="Georgia, serif">∫ dx</text>
        <rect x="792" width="16" height="900" fill="#d0b07a" opacity="0.35" />
      `);
    case "royalSociety":
      return wrapSceneSvg(`
        <rect width="1600" height="900" fill="#20141a" />
        <rect y="660" width="1600" height="240" fill="#5d4032" />
        <rect x="330" y="170" width="940" height="160" rx="22" fill="#7d5a45" />
        <rect x="390" y="210" width="820" height="90" rx="16" fill="#d6c3a0" />
        <text x="450" y="270" fill="#5e412e" font-size="44" font-family="Georgia, serif">Royal Society - Informe de prioridad</text>
        <circle cx="800" cy="520" r="120" fill="#34242f" opacity="0.6" />
        <rect x="650" y="470" width="300" height="120" rx="20" fill="#2b2129" />
        <text x="720" y="548" fill="#dbc7a1" font-size="46" font-family="Georgia, serif">1712</text>
      `);
    case "legacyPress":
      return wrapSceneSvg(`
        <rect width="1600" height="900" fill="#19202a" />
        <rect y="650" width="1600" height="250" fill="#534636" />
        <rect x="170" y="390" width="260" height="210" fill="#6b5443" />
        <rect x="220" y="250" width="160" height="170" fill="#8c725b" />
        <rect x="720" y="420" width="460" height="160" rx="18" fill="#d2c19c" transform="rotate(-4 950 500)" />
        <text x="790" y="510" fill="#5d4731" font-size="56" font-family="Georgia, serif">f(x), f'(x), límite</text>
        <rect x="1230" y="220" width="190" height="360" fill="#4a4034" />
        <rect x="1260" y="250" width="130" height="40" fill="#b5986f" />
        <rect x="1260" y="320" width="130" height="40" fill="#b5986f" />
        <rect x="1260" y="390" width="130" height="40" fill="#b5986f" />
        <rect x="1260" y="460" width="130" height="40" fill="#b5986f" />
        <text x="280" y="540" fill="#e7d7b0" font-size="46" font-family="Georgia, serif">Euler</text>
        <text x="430" y="590" fill="#e7d7b0" font-size="42" font-family="Georgia, serif">Lagrange</text>
      `);
    case "classroomReturn":
      return wrapSceneSvg(`
        <rect width="1600" height="900" fill="#132131" />
        <rect y="600" width="1600" height="300" fill="#35241c" />
        <rect x="140" y="130" width="640" height="300" rx="18" fill="#173444" stroke="#a7d0de" stroke-width="6" opacity="0.95" />
        <rect x="170" y="160" width="580" height="240" rx="12" fill="#274e36" stroke="#d9e2cc" stroke-width="4" />
        <text x="220" y="230" fill="#eef7ef" font-size="44" font-family="Georgia, serif">∫ f'(x) dx = f(x)</text>
        <text x="220" y="302" fill="#eef7ef" font-size="44" font-family="Georgia, serif">Historia, área y cambio</text>
        <rect x="930" y="120" width="500" height="250" rx="18" fill="#d8e6ef" opacity="0.92" />
        <rect x="965" y="155" width="430" height="180" rx="12" fill="#c0d8ea" />
        <circle cx="1080" cy="225" r="54" fill="#f6d998" opacity="0.95" />
        <polygon points="260,520 480,520 560,610 340,610" fill="#6a4c39" />
        <polygon points="540,520 760,520 840,610 620,610" fill="#735948" />
        <polygon points="820,520 1040,520 1120,610 900,610" fill="#614735" />
      `);
    case "campus":
      return wrapSceneSvg(`
        <rect width="1600" height="900" fill="#13202a" />
        <rect width="1600" height="430" fill="#f2a869" />
        <rect y="430" width="1600" height="470" fill="#4e6e56" />
        <rect x="980" y="280" width="320" height="260" fill="#7b6e65" />
        <rect x="1080" y="180" width="120" height="120" fill="#6a5b53" />
        <rect x="1030" y="360" width="50" height="80" fill="#d8d0bf" />
        <rect x="1120" y="360" width="50" height="80" fill="#d8d0bf" />
        <rect x="1210" y="360" width="50" height="80" fill="#d8d0bf" />
        <path d="M0 720 C300 640 620 740 900 700 C1180 660 1400 720 1600 690 L1600 900 L0 900 Z" fill="#3e5a48" />
        <rect x="220" y="610" width="540" height="90" rx="18" fill="#485f5e" />
        <rect x="300" y="636" width="140" height="36" rx="18" fill="#d7dfd8" opacity="0.85" />
        <circle cx="360" cy="772" r="44" fill="#2b3037" />
        <circle cx="620" cy="772" r="44" fill="#2b3037" />
        <rect x="180" y="520" width="44" height="150" fill="#5d4534" />
        <circle cx="202" cy="470" r="86" fill="#5b8552" />
        <rect x="520" y="500" width="38" height="136" fill="#5d4534" />
        <circle cx="539" cy="460" r="74" fill="#6a9259" />
      `);
    default:
      return wrapSceneSvg(`<rect width="1600" height="900" fill="#1a2130" />`);
  }
}

function wrapSceneSvg(content) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="vignette" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="rgba(255,255,255,0.0)" />
          <stop offset="100%" stop-color="rgba(0,0,0,0.28)" />
        </linearGradient>
      </defs>
      ${content}
      <rect width="1600" height="900" fill="url(#vignette)" />
    </svg>
  `;
}

function generateCharacterPlaceholder(character, pose = "neutral") {
  const palette = {
    skin: character.skin,
    hair: character.hair,
    accent: character.accent,
    secondary: character.secondary,
  };

  const raisedPoses = new Set(["teaching", "surprised", "inspired"]);
  const poseRaised = raisedPoses.has(pose);
  const body = buildBodyShape(character.outfit);
  const hair = buildHairShape(character.hairStyle, palette.hair);
  const beard = character.beard
    ? `<path d="M120 129 C126 145 154 145 160 129 L158 152 C147 162 132 162 122 152 Z" fill="${palette.hair}" opacity="0.92" />`
    : "";
  const prop = buildPropShape(character.prop, palette.accent, poseRaised);
  const eyeOffset = pose === "surprised" ? 3 : pose === "inspired" ? -1 : 0;
  const mouth = buildMouthShape(pose);
  const leftArmY = poseRaised ? 170 : 190;
  const rightArmY = poseRaised ? 144 : 188;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 430">
      <defs>
        <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="rgba(255,255,255,0.0)" />
          <stop offset="100%" stop-color="rgba(0,0,0,0.24)" />
        </linearGradient>
        <linearGradient id="cloth" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${palette.accent}" />
          <stop offset="100%" stop-color="${palette.secondary}" />
        </linearGradient>
      </defs>
      <ellipse cx="140" cy="394" rx="78" ry="18" fill="rgba(0,0,0,0.24)" />
      <path d="${body}" fill="url(#cloth)" />
      <path d="M95 ${leftArmY} C80 ${leftArmY + 30} 72 ${leftArmY + 68} 76 226 C80 252 104 246 105 225 L110 184 Z" fill="${palette.secondary}" opacity="0.92" />
      <path d="M184 ${rightArmY} C204 ${rightArmY + 22} 212 ${rightArmY + 60} 208 218 C205 250 176 245 176 218 L172 176 Z" fill="${palette.secondary}" opacity="0.92" />
      <ellipse cx="140" cy="110" rx="34" ry="42" fill="${palette.skin}" />
      ${hair}
      <ellipse cx="128" cy="${112 - eyeOffset}" rx="4.2" ry="5.2" fill="#241611" />
      <ellipse cx="152" cy="${112 - eyeOffset}" rx="4.2" ry="5.2" fill="#241611" />
      <path d="M127 99 Q140 91 153 99" stroke="${palette.hair}" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.8" />
      ${mouth}
      ${beard}
      <path d="M119 149 C133 160 147 160 161 149 L166 178 C152 188 128 188 114 178 Z" fill="${palette.skin}" opacity="0.85" />
      ${prop}
      <rect x="118" y="295" width="18" height="74" rx="9" fill="#2f2d37" />
      <rect x="145" y="295" width="18" height="74" rx="9" fill="#2f2d37" />
      <rect x="108" y="363" width="34" height="14" rx="7" fill="#d5d7e0" />
      <rect x="142" y="363" width="34" height="14" rx="7" fill="#d5d7e0" />
      <rect x="98" y="54" width="84" height="330" fill="url(#bg)" opacity="0.16" />
    </svg>
  `;

  return svgToDataUri(svg);
}

function buildBodyShape(outfit) {
  const shapes = {
    hoodie: "M98 160 C108 146 124 140 140 140 C156 140 172 146 182 160 L194 290 C176 312 104 312 86 290 Z",
    robe: "M98 156 C110 142 127 136 140 136 C153 136 170 142 182 156 L204 296 C186 318 94 318 76 296 Z",
    monk: "M102 154 C114 140 128 134 140 134 C152 134 166 140 178 154 L196 294 C177 312 103 312 84 294 Z",
    coat: "M102 156 C113 144 127 138 140 138 C153 138 167 144 178 156 L188 288 C171 304 109 304 92 288 Z",
    gown: "M96 152 C109 140 126 136 140 136 C154 136 171 140 184 152 L200 294 C181 314 99 314 80 294 Z",
  };

  return shapes[outfit] || shapes.coat;
}

function buildHairShape(style, color) {
  const shapes = {
    messy: `<path d="M105 102 C112 64 167 58 176 98 C174 75 160 55 141 52 C121 49 102 66 105 102 Z" fill="${color}" />`,
    short: `<path d="M107 100 C112 70 168 70 173 100 C170 78 156 62 140 60 C124 58 110 74 107 100 Z" fill="${color}" />`,
    wild: `<path d="M100 102 C93 81 111 56 137 54 C164 52 187 72 181 101 C171 82 161 77 151 75 C139 73 121 76 100 102 Z" fill="${color}" />`,
    wig: `<path d="M102 97 C102 69 125 52 140 52 C155 52 178 69 178 97 C176 77 165 65 155 60 C176 90 177 122 170 148 C164 160 156 170 148 173 L147 144 C154 132 158 114 154 96 C151 84 146 77 140 77 C134 77 129 84 126 96 C122 114 126 132 133 144 L132 173 C124 170 116 160 110 148 C103 122 104 90 125 60 C115 65 104 77 102 97 Z" fill="${color}" />`,
    "long-wig": `<path d="M100 98 C100 66 125 48 140 48 C155 48 180 66 180 98 C177 75 165 62 155 58 C180 92 183 145 170 176 C164 189 155 196 146 199 L145 148 C154 133 160 116 157 96 C154 82 148 74 140 74 C132 74 126 82 123 96 C120 116 126 133 135 148 L134 199 C125 196 116 189 110 176 C97 145 100 92 125 58 C115 62 103 75 100 98 Z" fill="${color}" />`,
    powdered: `<path d="M103 98 C103 70 125 55 140 55 C155 55 177 70 177 98 C174 78 164 67 153 62 C169 84 173 113 168 145 C160 162 151 172 143 176 L143 147 C149 135 153 117 150 100 C147 86 144 80 140 80 C136 80 133 86 130 100 C127 117 131 135 137 147 L137 176 C129 172 120 162 112 145 C107 113 111 84 127 62 C116 67 106 78 103 98 Z" fill="${color}" />`,
    tonsure: `<path d="M105 101 C108 77 122 60 140 60 C158 60 172 77 175 101 C167 80 155 74 140 74 C125 74 113 80 105 101 Z" fill="${color}" /><circle cx="140" cy="77" r="10" fill="#d9b99b" opacity="0.85" />`,
  };

  return shapes[style] || shapes.short;
}

function buildMouthShape(pose) {
  if (pose === "surprised") {
    return `<ellipse cx="140" cy="124" rx="5" ry="7" fill="#7d4a35" opacity="0.78" />`;
  }

  if (pose === "serious") {
    return `<path d="M130 126 L150 126" stroke="#7d4a35" stroke-width="3" stroke-linecap="round" fill="none" />`;
  }

  if (pose === "inspired") {
    return `<path d="M128 125 Q140 136 152 125" stroke="#7d4a35" stroke-width="3" stroke-linecap="round" fill="none" />`;
  }

  return `<path d="M129 126 Q140 132 151 126" stroke="#7d4a35" stroke-width="3" stroke-linecap="round" fill="none" />`;
}

function buildPropShape(prop, color, poseRaised) {
  if (prop === "notebook") {
    return `<rect x="${poseRaised ? 176 : 172}" y="${poseRaised ? 174 : 198}" width="34" height="46" rx="4" fill="#f0ead8" stroke="${color}" stroke-width="4" />`;
  }

  if (prop === "compass") {
    return `<path d="M192 168 L206 228 M192 168 L176 228" stroke="${color}" stroke-width="5" stroke-linecap="round" /><circle cx="192" cy="168" r="8" fill="#f5ebd1" stroke="${color}" stroke-width="4" />`;
  }

  if (prop === "quill") {
    return `<path d="M184 180 C204 160 214 156 220 160 C216 170 207 187 188 205" stroke="${color}" stroke-width="4" fill="none" stroke-linecap="round" /><path d="M220 160 C212 175 199 181 187 183" stroke="#f0ead9" stroke-width="3" fill="none" />`;
  }

  if (prop === "scroll") {
    return `<rect x="176" y="184" width="34" height="48" rx="8" fill="#efe0b9" stroke="${color}" stroke-width="4" /><circle cx="182" cy="190" r="6" fill="#d4bd83" /><circle cx="204" cy="226" r="6" fill="#d4bd83" />`;
  }

  if (prop === "book") {
    return `<path d="M171 186 L204 178 L210 225 L177 233 Z" fill="#dbc79d" stroke="${color}" stroke-width="4" />`;
  }

  if (prop === "apple") {
    return `<circle cx="196" cy="210" r="16" fill="#a1453f" /><path d="M196 194 Q202 186 208 188" stroke="#6d8a4b" stroke-width="4" fill="none" />`;
  }

  if (prop === "integral") {
    return `<path d="M196 170 C183 172 183 197 193 201 C204 206 203 232 190 236" stroke="${color}" stroke-width="6" fill="none" stroke-linecap="round" />`;
  }

  if (prop === "star-map") {
    return `<circle cx="195" cy="205" r="20" fill="#122234" stroke="${color}" stroke-width="4" /><circle cx="188" cy="198" r="2.5" fill="#f6edd5" /><circle cx="199" cy="212" r="2.5" fill="#f6edd5" /><path d="M188 198 L199 212 L203 196" stroke="#f6edd5" stroke-width="2" fill="none" />`;
  }

  if (prop === "chalk") {
    return `<rect x="194" y="206" width="26" height="8" rx="4" fill="#f5f4ef" />`;
  }

  if (prop === "ruler") {
    return `<rect x="176" y="194" width="52" height="12" rx="6" fill="#d2b783" stroke="${color}" stroke-width="3" /><line x1="186" y1="194" x2="186" y2="206" stroke="#8c6e3c" stroke-width="2" /><line x1="196" y1="194" x2="196" y2="206" stroke="#8c6e3c" stroke-width="2" /><line x1="206" y1="194" x2="206" y2="206" stroke="#8c6e3c" stroke-width="2" />`;
  }

  return "";
}
