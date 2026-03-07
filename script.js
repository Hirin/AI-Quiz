const JSON_FILES = [
    "data/quiz/A1_BasicLinear.json",
    "data/quiz/A2_Eigenvalue.json",
    "data/quiz/A3_BasicProbability.json",
    "data/quiz/A4_Distributions.json",
    "data/quiz/A5_Statistics.json",
    "data/quiz/A6_Calculus.json",
    "data/quiz/A_Remaining.json",
    "data/quiz/A9_Distance_Extra.json",
    "data/quiz/A10_Numerical_Extra.json",
    "data/quiz/B1_PythonBasics.json",
    "data/quiz/B2_PythonAdvanced.json",
    "data/quiz/B3_DataStructures.json",
    "data/quiz/B4_NumpyPandas.json",
    "data/quiz/B5_SQL.json",
    "data/quiz/B6_Pipelines.json",
    "data/quiz/B_Remaining.json",
    "data/quiz/B9_Testing.json",
    "data/quiz/B10_Visualization.json",
    "data/quiz/B11_Regex.json",
    "data/quiz/C1_Supervised.json",
    "data/quiz/C1_Supervised_Extra.json",
    "data/quiz/C2_ModelEval.json",
    "data/quiz/C3_DeepLearning.json",
    "data/quiz/C3_DeepLearning_Extra.json",
    "data/quiz/C4_C5_NLP_CV.json",
    "data/quiz/C_Remaining.json",
    "data/quiz/C_Extra.json",
    "data/quiz/C9_LLM_Extra.json",
    "data/quiz/C10_RL.json",
    "data/quiz/C11_TimeSeries_RecSys.json",
    "data/quiz/C12_FeatureEng.json",
    "data/quiz/D1_D2_LogicEthics.json",
    "data/quiz/D_Remaining.json",
    "data/quiz/D_Extra.json",
    "data/quiz/D8_Regulation_Extra.json",
    "data/quiz/D9_IP_Society.json",
    "data/quiz/D10_Communication.json"
];

let allQuestions = [];
let groupedByModuleAndSection = {};
let currentQuestions = [];
let userSelections = {}; // mapping question ID to selected index

// DOM Elements
const accordionEl = document.getElementById("modulesAccordion");
const quizContainer = document.getElementById("quizContainer");
const controlsPanel = document.getElementById("controlsPanel");
const currentSectionTitle = document.getElementById("currentSectionTitle");
const scoreDisplay = document.getElementById("scoreDisplay");
const progressBar = document.getElementById("progressBar");
const restartBtn = document.getElementById("restartBtn");
const shuffleAllBtn = document.getElementById("shuffleAllBtn");

// Mobile sidebar elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
    sidebar.classList.toggle("open");
    sidebarOverlay.classList.toggle("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.className = sidebar.classList.contains("open") ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}

function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.className = "fa-solid fa-bars";
}

// Init
async function init() {
    quizContainer.innerHTML = `<div class="loader"></div>`;

    try {
        const fetchPromises = JSON_FILES.map(file => fetch(file).then(res => res.json()).catch(err => {
            console.warn(`Failed to load ${file}, it might be missing. Continuing...`);
            return [];
        }));

        const fileResults = await Promise.all(fetchPromises);
        allQuestions = fileResults.flat();

        if (allQuestions.length === 0) {
            quizContainer.innerHTML = `<div class="welcome-screen"><h2>Error</h2><p>No questions loaded. Please ensure you are running this from a local server (e.g., Live Server) so JSON files can be fetched.</p></div>`;
            return;
        }

        processQuestions(allQuestions);
        renderSidebar();

        quizContainer.innerHTML = `
            <div class="welcome-screen">
                <i class="fa-solid fa-rocket welcome-icon"></i>
                <h2>Welcome to the AI Competency Assessment</h2>
                <p>Data loaded: ${allQuestions.length} premium questions ready.</p>
                <p>Select a topic from the sidebar to begin.</p>
            </div>`;

    } catch (e) {
        console.error(e);
        quizContainer.innerHTML = `<div class="welcome-screen"><h2>Error Loading Data</h2><p>${e.message}</p></div>`;
    }
}

function processQuestions(questions) {
    groupedByModuleAndSection = {};

    questions.forEach(q => {
        // Assume section format "A1: Section Name"
        let modPrefix = q.section.charAt(0); // A, B, C, D
        let moduleName = `Module ${modPrefix}`;

        if (!groupedByModuleAndSection[moduleName]) {
            groupedByModuleAndSection[moduleName] = {};
        }
        if (!groupedByModuleAndSection[moduleName][q.section]) {
            groupedByModuleAndSection[moduleName][q.section] = [];
        }
        groupedByModuleAndSection[moduleName][q.section].push(q);
    });
}

function renderSidebar() {
    accordionEl.innerHTML = "";

    Object.keys(groupedByModuleAndSection).sort().forEach(moduleName => {
        const groupEl = document.createElement("div");
        groupEl.className = "module-group";

        const titleEl = document.createElement("div");
        titleEl.className = "module-title";

        let iconHtml = '<i class="fa-solid fa-code"></i>';
        if (moduleName.includes('A')) iconHtml = '<i class="fa-solid fa-square-root-variable"></i>';
        if (moduleName.includes('B')) iconHtml = '<i class="fa-solid fa-cubes"></i>';
        if (moduleName.includes('C')) iconHtml = '<i class="fa-solid fa-network-wired"></i>';
        if (moduleName.includes('D')) iconHtml = '<i class="fa-solid fa-scale-balanced"></i>';

        titleEl.innerHTML = `<span>${iconHtml} ${moduleName}</span><i class="fa-solid fa-chevron-down"></i>`;

        const listEl = document.createElement("div");
        listEl.className = "section-list";

        titleEl.addEventListener("click", () => {
            titleEl.classList.toggle("active");
            listEl.classList.toggle("open");
        });

        const sections = groupedByModuleAndSection[moduleName];
        Object.keys(sections).sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).forEach(sectionName => {
            const itemEl = document.createElement("div");
            itemEl.className = "section-item";
            itemEl.innerText = `${sectionName} (${sections[sectionName].length})`;

            itemEl.addEventListener("click", () => {
                document.querySelectorAll(".section-item").forEach(el => el.classList.remove("active"));
                itemEl.classList.add("active");
                loadQuiz(sections[sectionName], sectionName);
                closeSidebar();
            });

            listEl.appendChild(itemEl);
        });

        groupEl.appendChild(titleEl);
        groupEl.appendChild(listEl);
        accordionEl.appendChild(groupEl);
    });
}

function loadQuiz(questions, title) {
    currentQuestions = [...questions];
    userSelections = {};
    currentSectionTitle.innerText = title;
    scoreDisplay.innerText = `0 / ${currentQuestions.length}`;
    progressBar.style.width = '0%';
    controlsPanel.style.display = "flex";

    renderQuestions();
    quizContainer.scrollTop = 0;

    // Update cheatsheet
    if (typeof renderCheatsheet === 'function') {
        renderCheatsheet(title);
    }
}

function renderQuestions() {
    quizContainer.innerHTML = "";

    currentQuestions.forEach((q, idx) => {
        const card = document.createElement("div");
        card.className = "question-card";
        card.id = `qcard_${idx}`;

        const header = document.createElement("div");
        header.className = "q-header";
        header.innerHTML = `
            <span class="q-badge">Question ${idx + 1}</span>
            <span>ID: ${q.id}</span>
        `;

        const title = document.createElement("div");
        title.className = "q-text";
        title.innerText = q.question;

        const optionsGrid = document.createElement("div");
        optionsGrid.className = "options-grid";

        const letters = ['A', 'B', 'C', 'D'];

        q.options.forEach((optText, optIdx) => {
            const optBox = document.createElement("div");
            optBox.className = "option-box";
            optBox.id = `opt_${idx}_${optIdx}`;

            optBox.innerHTML = `
                <div class="opt-letter">${letters[optIdx]}</div>
                <div class="opt-text">${optText}</div>
                <i class="fa-solid fa-check opt-icon"></i>
            `;

            optBox.addEventListener("click", () => selectOption(idx, optIdx));
            optionsGrid.appendChild(optBox);
        });

        const expBox = document.createElement("div");
        expBox.className = "explanation";
        expBox.id = `exp_${idx}`;
        expBox.innerHTML = `<strong><i class="fa-solid fa-lightbulb"></i> Explanation:</strong> ${q.explanation}`;

        card.appendChild(header);
        card.appendChild(title);
        card.appendChild(optionsGrid);
        card.appendChild(expBox);

        quizContainer.appendChild(card);
    });
}

function selectOption(qIdx, optIdx) {
    // Prevent re-selecting once answered
    if (userSelections[qIdx] !== undefined) return;

    userSelections[qIdx] = optIdx;

    // Update progress
    const totalSelected = Object.keys(userSelections).length;
    const progress = (totalSelected / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    const q = currentQuestions[qIdx];
    const correctIdx = q.correct;

    const correctBox = document.getElementById(`opt_${qIdx}_${correctIdx}`);
    const selectedBox = document.getElementById(`opt_${qIdx}_${optIdx}`);
    const expBox = document.getElementById(`exp_${qIdx}`);

    // Add selected class to the chosen option
    selectedBox.classList.add("selected");

    // Reveal correct/wrong immediately
    if (optIdx === correctIdx) {
        correctBox.classList.add("correct-reveal");
    } else {
        selectedBox.classList.add("wrong-reveal");
        selectedBox.querySelector(".opt-icon").className = "fa-solid fa-xmark opt-icon";
        correctBox.classList.add("correct-reveal");
    }

    expBox.style.display = "block";

    // Update score
    let score = 0;
    currentQuestions.forEach((cq, cIdx) => {
        if (userSelections[cIdx] === cq.correct) {
            score++;
        }
    });
    scoreDisplay.innerText = `${score} / ${currentQuestions.length}`;

    // Check if finished
    if (totalSelected === currentQuestions.length) {
        const percentage = (score / currentQuestions.length) * 100;
        if (percentage >= 80) showToast(`Amazing! You scored ${percentage.toFixed(0)}%`, "success");
        else if (percentage >= 50) showToast(`Good effort! You scored ${percentage.toFixed(0)}%`, "success");
        else showToast(`Keep practicing! You scored ${percentage.toFixed(0)}%`, "warning");
    }
}

function showToast(msg, type) {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.style.background = type === 'warning' ? 'var(--warning)' : 'var(--success)';
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// Utility: Shuffle array in place
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Utility: Shuffle options of a single question
function shuffleQuestionOptions(q) {
    const indexedOptions = q.options.map((opt, i) => ({ text: opt, isCorrect: i === q.correct }));
    shuffleArray(indexedOptions);
    q.options = indexedOptions.map(o => o.text);
    q.correct = indexedOptions.findIndex(o => o.isCorrect);
}

function shuffleAll() {
    if (allQuestions.length === 0) return;
    document.querySelectorAll(".section-item").forEach(el => el.classList.remove("active"));

    // Stratified sampling: weighted by module importance
    // B (Code) = 35, A (Math) = 25, C (AI/ML) = 25, D (Ethics) = 15
    const quotas = { A: 25, B: 35, C: 25, D: 15 };
    const byModule = { A: [], B: [], C: [], D: [] };

    allQuestions.forEach(q => {
        const mod = q.section.charAt(0);
        if (byModule[mod]) byModule[mod].push(q);
    });

    let result = [];
    for (const [mod, quota] of Object.entries(quotas)) {
        const pool = [...byModule[mod]];
        shuffleArray(pool);

        const selected = pool.slice(0, Math.min(quota, pool.length)).map(q => {
            // Deep clone to avoid modifying original allQuestions
            const newQ = JSON.parse(JSON.stringify(q));
            shuffleQuestionOptions(newQ);
            return newQ;
        });

        result.push(...selected);
    }

    // Final shuffle to mix modules together
    shuffleArray(result);
    loadQuiz(result, `Mixed Comprehensive Test (${result.length} Questions)`);
}

const shuffleQuizBtn = document.getElementById("shuffleQuizBtn");

restartBtn.addEventListener("click", () => {
    if (currentQuestions.length > 0) {
        loadQuiz(currentQuestions, currentSectionTitle.innerText);
    }
});

shuffleQuizBtn.addEventListener("click", () => {
    if (currentQuestions.length > 0) {
        const shuffled = currentQuestions.map(q => {
            const newQ = JSON.parse(JSON.stringify(q));
            shuffleQuestionOptions(newQ);
            return newQ;
        });
        shuffleArray(shuffled);
        loadQuiz(shuffled, currentSectionTitle.innerText);
    }
});

shuffleAllBtn.addEventListener("click", () => { shuffleAll(); closeSidebar(); });

mobileMenuBtn.addEventListener("click", toggleSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

// Cheatsheet toggle (tablet/mobile)
const cheatsheetToggleBtn = document.getElementById("cheatsheetToggleBtn");
const cheatsheetPanel = document.getElementById("cheatsheetPanel");

cheatsheetToggleBtn.addEventListener("click", () => {
    cheatsheetPanel.classList.toggle("open");
    const icon = cheatsheetToggleBtn.querySelector("i");
    icon.className = cheatsheetPanel.classList.contains("open") ? "fa-solid fa-xmark" : "fa-solid fa-book-open";
});

// Boot
window.onload = init;
