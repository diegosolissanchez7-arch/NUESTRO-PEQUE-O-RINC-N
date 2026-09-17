// ===============================
// CONTRASEÑAS
// ===============================

const PORTAL_PASSWORD = "1CHL13B3DICH";
const FINAL_PASSWORD = "3NTUSBR4Z0S";

const AUTOEXIGENCIA_PASSWORD = "4UT03XIG3NC1A";
const CUENTAGOTAS_PASSWORD = "R13GAM1SOJO5";
const GUERRERA_PASSWORD = "GUERRERA";
const ACOSTADO_PASSWORD = "3NTUSBR4Z0S";
const TE_MIRO_PASSWORD = "DUD4PR0V1SION4L";


// ===============================
// NAVEGACIÓN
// ===============================

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(id);

    if (target) {
        target.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


// Botones con data-section
document.querySelectorAll("[data-section]").forEach(button => {
    button.addEventListener("click", () => {
        const section = button.dataset.section;

        if (section) {
            showScreen(section);
        }
    });
});


// Botones para volver a HOME
document.querySelectorAll("[data-home]").forEach(button => {
    button.addEventListener("click", () => {
        showScreen("home");
    });
});


// ===============================
// PORTAL / CONTRASEÑA PRINCIPAL
// ===============================

const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const passwordMessage = document.getElementById("passwordMessage");
const portalSunflower = document.getElementById("portalSunflower");

if (passwordForm) {
    passwordForm.addEventListener("submit", event => {
        event.preventDefault();

        const password = passwordInput.value.trim();

        if (password === PORTAL_PASSWORD) {

            passwordMessage.textContent = "";
            
            if (portalSunflower) {
                portalSunflower.classList.add("show");
            }

            setTimeout(() => {
                showScreen("home");

                // Si se ha entrado mediante un QR,
                // abrimos automáticamente la reflexión correspondiente.
                handleReflectionHash();

            }, 2200);

        } else {

            passwordMessage.textContent = "No es esa... inténtalo otra vez.";

            passwordInput.value = "";
            passwordInput.focus();
        }
    });
}


// ===============================
// CONTENIDO DE FILTRACIONES
// ===============================

const leakContent = {

    autoexigencia: {
        number: "01",
        title: "AUTOEXIGENCIA",
        content:
`Hay días en los que parece que tienes que hacerlo todo bien.

Ser suficiente.
Ser fuerte.
No equivocarte.
No parar.

Y quizá nadie te lo esté pidiendo.

Quizá seas tú.

No tienes que demostrar constantemente que puedes con todo.

También puedes descansar.
También puedes fallar.
También puedes simplemente estar.

No quiero que tengas que ser perfecta conmigo.

Quiero que puedas ser tú.`
    },


    espejos: {
        number: "02",
        title: "ESPEJOS",
        content:
`A veces los espejos mienten.

Te enseñan aquello que más miedo tienes de encontrar.

Pero yo no quiero mirarte a través de un espejo.

Quiero mirarte a ti.

A tus gestos.
A tus ojos.
A esa sonrisa que aparece cuando intentas disimular que estás feliz.

Y quiero que algún día puedas mirarte como yo te miro.`
    },


    guerrera: {
        number: "03",
        title: "GUERRERA",
        content:
`No tienes que luchar todo el tiempo.

Sé que puedes hacerlo.
Sé que eres fuerte.

Pero conmigo no tienes que demostrarlo.

Puedes bajar la espada.

Puedes descansar.

Puedes dejar que alguien te cuide.

No porque seas débil.

Sino porque también mereces que alguien luche por ti.`
    },


    cuentagotas: {
        number: "04",
        title: "CUENTAGOTAS",
        content:
`Hay personas que llegan a tu vida como una tormenta.

Y hay personas que llegan gota a gota.

Sin hacer ruido.

Sin pedir permiso.

Simplemente empiezan a quedarse.

Y cuando te quieres dar cuenta...

ya forman parte de ti.`
    }

};


// Abrir filtraciones
document.querySelectorAll(".leak-card[data-content]").forEach(card => {

    card.addEventListener("click", () => {

        const key = card.dataset.content;
        const content = leakContent[key];

        if (!content) return;

        openModal(
            content.number,
            content.title,
            content.content
        );

    });

});


// Filtraciones bloqueadas
document.querySelectorAll(".leak-card.locked").forEach(card => {

    card.addEventListener("click", () => {

        const messages = [
            "Todavía no puedes ver esto.",
            "Esto está guardado para más adelante.",
            "Quizá todavía no estés preparada.",
            "Aquí hay algo que tendrás que descubrir.",
            "No tan rápido..."
        ];

        const randomMessage =
            messages[Math.floor(Math.random() * messages.length)];

        openModal(
            "🔒",
            "BLOQUEADO",
            randomMessage
        );

    });

});


// ===============================
// REFLEXIONES SIN CONTRASEÑA
// ===============================

const reflections = {

    cambios: {
        number: "01",
        title: "CAMBIOS",
        content:
`Por añadir todavía`
    },


    espejosReflection: {
        number: "02",
        title: "ESPEJOS",
        content:
`Por añadir todavía`
    },


    besos: {
        number: "03",
        title: "BESOS ENFRENTADOS",
        content:
`Por añadir todavía`
    }

};


// ===============================
// REFLEXIONES PROTEGIDAS
// ===============================

const protectedReflections = {

    autoexigencia: {

        number: "04",

        title: "AUTOEXIGENCIA LIMITANTE",

        password: AUTOEXIGENCIA_PASSWORD,

        content:
`Por añadir todavía`

    },


    cuentagotas: {

        number: "05",

        title: "CUENTAGOTAS",

        password: CUENTAGOTAS_PASSWORD,

        content:
`Por añadir todavía`

    },


    guerrera: {

        number: "06",

        title: "GUERRERA",

        password: GUERRERA_PASSWORD,

        content:
`Por añadir todavía`

    },


    acostado: {

        number: "07",

        title: "ACOSTADO EN TU PECHO",

        password: ACOSTADO_PASSWORD,

        content:
`Por añadir todavía`

    },


    teMiro: {

        number: "08",

        title: "TE MIRO Y NO SÉ NADA",

        password: TE_MIRO_PASSWORD,

        content:
`Por añadir todavía`

    }

};


// ===============================
// ABRIR REFLEXIONES SIN CONTRASEÑA
// ===============================

document.querySelectorAll(
    ".reflection-item[data-reflection]"
).forEach(item => {

    item.addEventListener("click", () => {

        const key = item.dataset.reflection;
        const reflection = reflections[key];

        if (!reflection) return;

        openModal(
            reflection.number,
            reflection.title,
            reflection.content
        );

    });

});


// ===============================
// ABRIR REFLEXIONES PROTEGIDAS
// ===============================

document.querySelectorAll(
    ".locked-reflection"
).forEach(item => {

    item.addEventListener("click", () => {

        const key = item.dataset.lockedReflection;
        const reflection = protectedReflections[key];

        if (!reflection) return;

        const password = prompt(
            `Esta reflexión está protegida.\n\nIntroduce la contraseña:`
        );

        if (password === null) {
            return;
        }

        if (password.trim() === reflection.password) {

            openModal(
                reflection.number,
                reflection.title,
                reflection.content
            );

        } else {

            openModal(
                "🔒",
                "CONTRASEÑA INCORRECTA",
                "No es esa contraseña..."
            );

        }

    });

});


// ===============================
// MODAL
// ===============================

const contentModal = document.getElementById("contentModal");
const modalNumber = document.getElementById("modalNumber");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");

function openModal(number, title, content) {

    if (!contentModal) return;

    if (modalNumber) {
        modalNumber.textContent = number;
    }

    if (modalTitle) {
        modalTitle.textContent = title;
    }

    if (modalContent) {
        modalContent.textContent = content;
    }

    contentModal.classList.add("active");
}


// Cerrar modal
document.querySelectorAll(
    "[data-close-modal]"
).forEach(button => {

    button.addEventListener("click", () => {
        contentModal.classList.remove("active");
    });

});


if (contentModal) {

    contentModal.addEventListener("click", event => {

        if (event.target === contentModal) {
            contentModal.classList.remove("active");
        }

    });

}


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        if (
            contentModal &&
            contentModal.classList.contains("active")
        ) {
            contentModal.classList.remove("active");
        }

    }

});


// ===============================
// CONTENIDO BLOQUEADO DEL REGALO
// ===============================

document.querySelectorAll(
    ".locked-gift"
).forEach(item => {

    item.addEventListener("click", () => {

        openModal(
            "🔒",
            "TODAVÍA NO",
            "Esto todavía no está preparado..."
        );

    });

});


// ===============================
// JUEGO DE MEMORIA
// ===============================

const memorySymbols = [
    "🐿️",
    "🌻",
    "❤️",
    "💛",
    "🦆",
    "🤐",
    "💧",
    "😭",
    "🫂",
    "💋",
    "🧩",
    "🌙",
    "⭐",
    "🦋",
    "🎀"
];


const gameLevels = [
    {
        level: 1,
        roman: "I",
        amount: 4
    },
    {
        level: 2,
        roman: "II",
        amount: 6
    },
    {
        level: 3,
        roman: "III",
        amount: 8
    },
    {
        level: 4,
        roman: "IV",
        amount: 10
    },
    {
        level: 5,
        roman: "V",
        amount: 12
    },
    {
        level: 6,
        roman: "VI",
        amount: 15
    }
];


let currentLevel = 0;
let currentSequence = [];
let playerSequence = [];
let acceptingInput = false;


// Elementos del juego
const gameLevel = document.getElementById("gameLevel");
const sequenceDisplay = document.getElementById("sequenceDisplay");
const memoryGrid = document.getElementById("memoryGrid");
const gameMessage = document.getElementById("gameMessage");

const gameStart = document.getElementById("gameStart");
const gameNext = document.getElementById("gameNext");
const gameRetry = document.getElementById("gameRetry");

const gameIntro = document.getElementById("gameIntro");
const gamePlay = document.getElementById("gamePlay");
const gameSuccess = document.getElementById("gameSuccess");
const gameFailure = document.getElementById("gameFailure");
const gameFinal = document.getElementById("gameFinal");


// Mezclar array
function shuffle(array) {

    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] =
            [result[j], result[i]];
    }

    return result;
}


// Comenzar juego
if (gameStart) {

    gameStart.addEventListener("click", () => {

        currentLevel = 0;

        if (gameIntro) {
            gameIntro.classList.add("hidden");
        }

        if (gamePlay) {
            gamePlay.classList.remove("hidden");
        }

        startLevel();

    });

}


// Empezar nivel
function startLevel() {

    const level = gameLevels[currentLevel];

    if (!level) {
        finishGame();
        return;
    }

    playerSequence = [];

    acceptingInput = false;

    if (gameLevel) {
        gameLevel.textContent =
            `NIVEL ${level.roman}`;
    }

    currentSequence =
        shuffle(memorySymbols).slice(
            0,
            level.amount
        );

    showSequence();

}


// Mostrar secuencia
function showSequence() {

    if (!sequenceDisplay) return;

    sequenceDisplay.innerHTML = "";

    currentSequence.forEach(symbol => {

        const span = document.createElement("span");

        span.textContent = symbol;

        sequenceDisplay.appendChild(span);

    });

    setTimeout(() => {

        sequenceDisplay.innerHTML = "";

        createMemoryGrid();

        acceptingInput = true;

    }, 1800);

}


// Crear botones del juego
function createMemoryGrid() {

    if (!memoryGrid) return;

    memoryGrid.innerHTML = "";

    const shuffledSymbols =
        shuffle(currentSequence);

    shuffledSymbols.forEach((symbol, index) => {

        const button =
            document.createElement("button");

        button.className = "memory-card";
        button.textContent = symbol;
        button.dataset.symbol = symbol;
        button.dataset.index = index;

        button.addEventListener(
            "click",
            () => selectMemoryCard(button)
        );

        memoryGrid.appendChild(button);

    });

}


// Seleccionar símbolo
function selectMemoryCard(button) {

    if (!acceptingInput) return;

    const symbol = button.dataset.symbol;

    playerSequence.push(symbol);

    button.classList.add("selected");

    const currentIndex =
        playerSequence.length - 1;

    if (
        symbol !== currentSequence[currentIndex]
    ) {

        acceptingInput = false;

        setTimeout(() => {
            failGame();
        }, 300);

        return;
    }


    if (
        playerSequence.length ===
        currentSequence.length
    ) {

        acceptingInput = false;

        setTimeout(() => {
            levelCompleted();
        }, 400);

    }

}


// Nivel completado
function levelCompleted() {

    if (gamePlay) {
        gamePlay.classList.add("hidden");
    }

    if (gameSuccess) {
        gameSuccess.classList.remove("hidden");
    }

}


// Siguiente nivel
if (gameNext) {

    gameNext.addEventListener("click", () => {

        currentLevel++;

        if (currentLevel >= gameLevels.length) {

            finishGame();

        } else {

            if (gameSuccess) {
                gameSuccess.classList.add("hidden");
            }

            if (gamePlay) {
                gamePlay.classList.remove("hidden");
            }

            startLevel();

        }

    });

}


// Fallar
function failGame() {

    if (gamePlay) {
        gamePlay.classList.add("hidden");
    }

    if (gameFailure) {
        gameFailure.classList.remove("hidden");
    }

}


// Reintentar
if (gameRetry) {

    gameRetry.addEventListener("click", () => {

        if (gameFailure) {
            gameFailure.classList.add("hidden");
        }

        if (gamePlay) {
            gamePlay.classList.remove("hidden");
        }

        startLevel();

    });

}


// ===============================
// FINAL DEL JUEGO
// ===============================

function finishGame() {

    if (gamePlay) {
        gamePlay.classList.add("hidden");
    }

    if (gameSuccess) {
        gameSuccess.classList.add("hidden");
    }

    if (gameFinal) {
        gameFinal.classList.remove("hidden");
    }

    const finalPasswordElement =
        document.getElementById("finalPassword");

    if (finalPasswordElement) {

        finalPasswordElement.textContent =
            FINAL_PASSWORD;

    }

}


// Continuar después del juego
const continueAfterGame =
    document.getElementById("continueAfterGame");

if (continueAfterGame) {

    continueAfterGame.addEventListener(
        "click",
        () => {

            showScreen("reflections");

        }
    );

}


// Volver desde el juego
const gameBack =
    document.getElementById("gameBack");

if (gameBack) {

    gameBack.addEventListener("click", () => {

        currentLevel = 0;

        showScreen("home");

    });

}


// ===============================
// QR — REFLEXIONES DIRECTAS
// ===============================

const reflectionHashes = {

    "cambios": {
        type: "public",
        key: "cambios"
    },

    "espejos": {
        type: "public",
        key: "espejosReflection"
    },

    "besos-enfrentados": {
        type: "public",
        key: "besos"
    },

    "autoexigencia": {
        type: "protected",
        key: "autoexigencia"
    },

    "cuentagotas": {
        type: "protected",
        key: "cuentagotas"
    },

    "guerrera": {
        type: "protected",
        key: "guerrera"
    },

    "acostado-en-tu-pecho": {
        type: "protected",
        key: "acostado"
    },

    "te-miro-y-no-se-nada": {
        type: "protected",
        key: "teMiro"
    }

};


// Procesar QR
function handleReflectionHash() {

    const rawHash =
        window.location.hash.replace("#", "").trim();

    if (!rawHash) return;

    const hash =
        decodeURIComponent(rawHash).toLowerCase();

    const reflection =
        reflectionHashes[hash];

    if (!reflection) return;


    // Abrimos REFLEXIONES OCULTAS
    showScreen("reflections");


    if (reflection.type === "public") {

        const data =
            reflections[reflection.key];

        if (!data) return;

        openModal(
            data.number,
            data.title,
            data.content
        );

        return;
    }


    if (reflection.type === "protected") {

        const data =
            protectedReflections[reflection.key];

        if (!data) return;

        const password = prompt(
            `Esta reflexión está protegida.\n\nIntroduce la contraseña:`
        );

        if (password === null) {
            return;
        }


        if (password.trim() === data.password) {

            openModal(
                data.number,
                data.title,
                data.content
            );

        } else {

            openModal(
                "🔒",
                "CONTRASEÑA INCORRECTA",
                "No es esa contraseña..."
            );

        }

    }

}


// Si ya estamos dentro de la página y existe un hash,
// intentamos procesarlo al cargar.
document.addEventListener("DOMContentLoaded", () => {

    // No saltamos la contraseña principal del portal.
    // El QR se procesa después de desbloquear el portal.

});
