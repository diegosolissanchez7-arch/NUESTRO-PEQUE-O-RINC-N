/* =========================================================
   CONFIGURACIÓN GENERAL
========================================================= */


/*
   IMPORTANTE:

   Esta contraseña es la del PORTAL inicial.
   Si tu contraseña actual es otra, cambia solamente esta línea.
*/

const PORTAL_PASSWORD = "1CHL13B3DICH";


/*
   CONTRASEÑA FINAL DEL JUEGO

   Se revela al completar los 6 niveles.
*/

const FINAL_PASSWORD = "3NTUSBR4Z0S";


/* =========================================================
   ELEMENTOS GENERALES
========================================================= */

const screens = document.querySelectorAll(".screen");

const modal = document.getElementById("contentModal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const modalNumber = document.getElementById("modalNumber");
const closeModal = document.getElementById("closeModal");


/* =========================================================
   CAMBIO DE PANTALLAS
========================================================= */

function showScreen(id) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(id);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* Botones data-section */

document.querySelectorAll("[data-section]").forEach(button => {

    button.addEventListener("click", () => {

        const section = button.dataset.section;

        if (section === "home") {
            showScreen("home");
            return;
        }

        showScreen(section);

    });

});


/* Botones volver al inicio */

document.querySelectorAll("[data-home]").forEach(button => {

    button.addEventListener("click", () => {
        showScreen("home");
    });

});


/* =========================================================
   PORTAL
========================================================= */

const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const passwordMessage = document.getElementById("passwordMessage");
const portalSunflower = document.getElementById("portalSunflower");


const wrongMessages = [
    "Mmm... por aquí no es.",
    "Casi... pero no.",
    "¿Seguro que esa era la clave?",
    "No parece que esto se abra así...",
    "UPS, lo siento, no tienes acceso todavía por aquí.",
    "Mmm... creo que tendrás que esperar.",
    "VAYA, parece que todavía no puedes."
];


passwordForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === PORTAL_PASSWORD) {

        passwordMessage.textContent = "";

        portalSunflower.classList.add("show");
        portalSunflower.classList.add("unlock");

        passwordInput.disabled = true;

        setTimeout(() => {

            showScreen("home");

            passwordInput.disabled = false;
            passwordInput.value = "";

        }, 2200);

    } else {

        const randomMessage =
            wrongMessages[
                Math.floor(Math.random() * wrongMessages.length)
            ];

        passwordMessage.textContent = randomMessage;

        passwordInput.value = "";

        passwordInput.focus();

    }

});


/* =========================================================
   CONTENIDO DE FILTRACIONES
========================================================= */

const leakContent = {

    autoexigencia: {

        number: "01",

        title: "AUTOEXIGENCIA LIMITANTE",

        content:
`Espíritu irrealizable
Sentido insignificante
ante mares inavegables

Rechazar que alguien te ayude
Vacíos que no se llenan
Rozar un techo de nubes
Deseos entre cadenas

¿Perdida en la infinitud?
¡Pero si está dentro de sí!
¿Alcanzar la plenitud?
Yo la encuentro dentro de ti.`

    },


    espejos: {

        number: "02",

        title: "ESPEJOS",

        content:
`Ojalá un mundo sin espejos
y sin muestras superficiales
que no permita que los reflejos
se apoderen de las verdades 

Injustas las imágenes 
Si solo enseñan una superficie
Que artificiales los márgenes 
Yo aprecio tus raíces 

Mírate dentro de mi
Y obsérvate más orgullosa
Quizá sea muy idealista 
Pero menos artificiosa`

    },


    guerrera: {

        number: "03",

        title: "GUERRERA",

        content:
`Y si piensas que te caes,
para mí tú ya has vencido.

Y si pienso que me caigo
ya me levanté contigo...`

    },

    cuentagotas: {

        number: "04",

        title: "CUENTAGOTAS",

        content:
`Ojalá siempre cuentes mis lágrimas
***************
Para regar mis lagrimales en invierno`

    }

};


/* =========================================================
   ABRIR FILTRACIONES
========================================================= */

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


/* =========================================================
   FILTRACIONES BLOQUEADAS
========================================================= */

document.querySelectorAll(".locked-card").forEach(card => {

    card.addEventListener("click", () => {

        const messages = [
            "Mmm... por aquí no es.",
            "Casi... pero no.",
            "¿Seguro que esa era la clave?",
            "No parece que esto se abra así...",
            "UPS, lo siento, no tienes acceso todavía por aquí."
        ];

        const message =
            messages[Math.floor(Math.random() * messages.length)];

        openModal(
            "🔒",
            "BLOQUEADO",
            message
        );

    });

});


/* =========================================================
   REFLEXIONES
========================================================= */

const reflections = {

    cambios: {

        number: "01",

        title: "CAMBIOS",

        content:
`A veces me pregunto si ha cambiado algo en mi vida desde que te conocí, y, realmente, la duda debería de ofenderme, pues claro que han cambiado muchísimas cosas. No obstante, como contigo he tenido la suerte de llevar una relación día a día y sin la necesidad de forzar nada, los cambios han sido tan naturales que parece que todo siga igual que antes. Pero.... Obviamente no. Por mucho que nos hayamos adaptado progresivamente los cambios son indudables si nos remontamos a un año y medio atrás. Y no hablo simplemente de unos planes en el futuro o de una nueva compañía, me refiero a modificaciones menos evidentes pero que significan mucho para los dos...`

    },


    espejosReflection: {

        number: "02",

        title: "ESPEJOS",

        content:
`Ojalá un mundo sin espejos. Sin ningún objeto que te permita sentirte mal contigo misma diariamente. Ojalá pudieras conocerte a través de la imagen que tengo de ti. Esa que solo yo conozco y que me encantaría enseñarte. Realmente, me gustaría ser tu propio espejo. No sé si pecaría de idealista o si la imagen que te mostrase deformara tu realidad de igual manera que el resto de espejos. Lo que si que sé es que te destaparía miles de detalles que tú sola no eres capaz de reconocer. Te permitiría encontrarte con, no sé si verdadera, pero, tu "más justa yo". Porque sí, a lo mejor peco de idealista como ya he comentado, pero sé al menos que mis imágenes contemplarían trocitos preciosos aparentemente inexistentes para ti.

Ojalá destruir todos los espejos y dejar tan solo nuestros corazones. El mío también tiene mucho de ti. Si lo observaras te encontrarías también con tu yo más pura. Esa que yo me guardo en lo más profundo de mí y que ya no se puede eliminar de ninguna forma. No sé, me da rabia que sean objetos tan injustos. Es lo que tiene, ¿No? Al final, cuando un reflejo contiene solo una superficie se pierde el interior completo de la imagen. La belleza de un árbol se sustenta justo en sus raíces. Sin embargo, todos dejamos nuestra mirada a medias. Por eso te pido que te mires en mi interior. Puede que mi mirada sea demasiado generosa, pero te aseguro que no se quedará a medias como la del resto de espejos.`

    },


    besos: {

        number: "03",

        title: "BESOS ENFRENTADOS",

        content:
`Que sensación tan agridulce cuando en medio de una discusión con mi pareja decido darle un beso. Así, sin pensármelo demasiado.

Por un momento mi arma se detiene, el fuego cesa y la lluvia la frenamos con un paraguas de cartón. Porque durante unos segundos, antes de retomar el conflicto y volver a los disparos, nuestras bocas dejan de vomitar palabras vacías y se funden tímidamente en el hombro del otro para recordarnos que nuestro amor sigue flotando.`

    }

};

/* =========================================================
   REFLEXIÓN PROTEGIDA — CUENTAGOTAS
========================================================= */

const CUENTAGOTAS_PASSWORD = "CUENTALASGOTAS";

const cuentagotasText =
`Prométeme que siempre tendré un hueco entre tus brazos. Un lugar para hospedarme hasta que se detenga la tormenta.

Protégeme de mi mismo, y acaríciame para que recuerde quién soy y dónde vivo. Pues contigo se me olvida todo, mi nombre, mi voz y hasta dónde habito.

Contigo vuelvo a ser de vidrio, aunque si me cuidas aparentaré ser fuerte durante un rato. Pero sé de sobra que mi armadura es frágil, y que es cuestión de tiempo que se deshaga entre tus brazos; para volver a rehacerse más fuerte e intentar que la lluvia no la deje hecha pedazos.`;


/* =========================================================
   ABRIR CUENTAGOTAS CON CONTRASEÑA
========================================================= */

document
    .querySelector(".locked-reflection")
    .addEventListener("click", () => {

        const password = prompt(
            "Esta reflexión está protegida.\n\nIntroduce la contraseña:"
        );

        if (password === null) return;

        if (password.trim() === CUENTAGOTAS_PASSWORD) {

            openModal(
                "04",
                "CUENTAGOTAS",
                cuentagotasText
            );

        } else {

            openModal(
                "🔒",
                "ACCESO DENEGADO",
                "Esa no es la palabra que estás buscando."
            );

        }

    });



/* =========================================================
   ABRIR REFLEXIONES
========================================================= */

document.querySelectorAll(".reflection-item").forEach(item => {

    item.addEventListener("click", () => {

        const key = item.dataset.reflection;

        const content = reflections[key];

        if (!content) return;

        openModal(
            content.number,
            content.title,
            content.content
        );

    });

});


/* =========================================================
   MODAL
========================================================= */

function openModal(number, title, content) {

    modalNumber.textContent = number;
    modalTitle.textContent = title;
    modalContent.textContent = content;

    modal.classList.add("active");

}


function closeContentModal() {

    modal.classList.remove("active");

}


closeModal.addEventListener(
    "click",
    closeContentModal
);


document.querySelector(".modal-background").addEventListener(
    "click",
    closeContentModal
);


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeContentModal();
    }

});


/* =========================================================
   CONTENIDO BLOQUEADO DEL REGALO
========================================================= */

document.querySelectorAll(".locked-content").forEach(item => {

    item.addEventListener("click", () => {

        const type = item.dataset.locked;

        if (type === "video") {

            openModal(
                "🔒",
                "VÍDEO",
                "Mmm... creo que todavía no tienes acceso a esto."
            );

        }

        if (type === "book") {

            openModal(
                "🔒",
                "AMOR EN RIMAS II",
                "UPS... parece que todavía no puedes abrirlo."
            );

        }

    });

});


/* =========================================================
   =========================================================
                      JUEGO DE MEMORIA
   =========================================================
========================================================= */


/*
   LOS 15 SÍMBOLOS
*/

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


/*
   6 niveles:

   I   = 4
   II  = 6
   III = 8
   IV  = 10
   V   = 12
   VI  = 15
*/

const gameLevels = [
    {
        amount: 3,
        roman: "I"
    },
    {
        amount: 4,
        roman: "II"
    },
    {
        amount: 5,
        roman: "III"
    },
    {
        amount: 6,
        roman: "IV"
    },
    {
        amount: 7,
        roman: "V"
    }
];



/* =========================================================
   ELEMENTOS DEL JUEGO
========================================================= */

const gameIntro = document.getElementById("gameIntro");
const gameLevel = document.getElementById("gameLevel");
const levelSuccess = document.getElementById("levelSuccess");
const gameFailure = document.getElementById("gameFailure");
const gameFinal = document.getElementById("gameFinal");

const startGameButton =
    document.getElementById("startGameButton");

const nextLevelButton =
    document.getElementById("nextLevelButton");

const retryGameButton =
    document.getElementById("retryGameButton");

const sequenceArea =
    document.getElementById("sequenceArea");

const gameGrid =
    document.getElementById("gameGrid");

const levelNumber =
    document.getElementById("levelNumber");

const levelProgress =
    document.getElementById("levelProgress");

const levelTitle =
    document.getElementById("levelTitle");

const levelInstruction =
    document.getElementById("levelInstruction");

const gameFeedback =
    document.getElementById("gameFeedback");


/* =========================================================
   ESTADO DEL JUEGO
========================================================= */

let currentLevel = 0;

let currentSequence = [];

let playerSequence = [];

let acceptingInput = false;


/* =========================================================
   CAMBIAR VISTA DEL JUEGO
========================================================= */

function showGameView(view) {

    [
        gameIntro,
        gameLevel,
        levelSuccess,
        gameFailure,
        gameFinal
    ].forEach(element => {

        element.classList.remove("active");

    });

    view.classList.add("active");

}


/* =========================================================
   EMPEZAR
========================================================= */

startGameButton.addEventListener("click", () => {

    currentLevel = 0;

    startCurrentLevel();

});


/* =========================================================
   GENERAR SECUENCIA
========================================================= */

function generateSequence(amount) {

    const shuffled = [...memorySymbols];

    shuffleArray(shuffled);

    return shuffled.slice(0, amount);

}


/* =========================================================
   SHUFFLE
========================================================= */

function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }

    return array;

}


/* =========================================================
   INICIAR NIVEL
========================================================= */

function startCurrentLevel() {

    const level = gameLevels[currentLevel];

    currentSequence =
        generateSequence(level.amount);

    playerSequence = [];

    acceptingInput = false;

    showGameView(gameLevel);

    levelNumber.textContent =
        `NIVEL ${level.roman}`;

    levelProgress.textContent =
        `${currentLevel + 1} / ${gameLevels.length}`;

    levelTitle.textContent =
        "RECUERDA";

    levelInstruction.textContent =
        "Observa bien...";

    gameFeedback.textContent = "";

    sequenceArea.innerHTML = "";

    gameGrid.innerHTML = "";

    /*
       Primero enseñamos la secuencia.
    */

    showSequence();

}


/* =========================================================
   MOSTRAR SECUENCIA
========================================================= */

async function showSequence() {

    sequenceArea.innerHTML = "";

    /*
       Tiempo inicial
    */

    await wait(600);

    for (
        let i = 0;
        i < currentSequence.length;
        i++
    ) {

        const symbol =
            document.createElement("div");

        symbol.className = "sequence-symbol";

        symbol.textContent =
            currentSequence[i];

        symbol.style.animationDelay =
            `${i * 0.08}s`;

        sequenceArea.appendChild(symbol);

        await wait(330);

    }


    /*
       Dejamos la secuencia visible
       un pequeño momento.
    */

    await wait(1300);


    /*
       La borramos.
    */

    sequenceArea.innerHTML = "";

    levelTitle.textContent =
        "AHORA TÚ";

    levelInstruction.textContent =
        "Repite la secuencia en el mismo orden.";

    createMemoryGrid();

}


/* =========================================================
   CREAR TABLERO
========================================================= */

function createMemoryGrid() {

    gameGrid.innerHTML = "";

    /*
       Siempre aparecen los 15 símbolos,
       mezclados.
    */

    const shuffledSymbols =
        [...memorySymbols];

    shuffleArray(shuffledSymbols);


    shuffledSymbols.forEach(symbol => {

        const card =
            document.createElement("button");

        card.className = "memory-card";

        card.textContent = symbol;

        card.dataset.symbol = symbol;

        card.addEventListener(
            "click",
            () => handleMemoryClick(card, symbol)
        );

        gameGrid.appendChild(card);

    });


    acceptingInput = true;

}


/* =========================================================
   CLICK DEL JUGADOR
========================================================= */

function handleMemoryClick(card, symbol) {

    if (!acceptingInput) return;

    /*
       Evitar pulsar dos veces
       el mismo símbolo.
    */

    if (card.classList.contains("selected")) {
        return;
    }


    const expectedSymbol =
        currentSequence[playerSequence.length];


    /*
       ERROR
    */

    if (symbol !== expectedSymbol) {

        acceptingInput = false;

        card.classList.add("wrong");

        gameFeedback.textContent =
            "Ese no era...";

        setTimeout(() => {

            showGameView(gameFailure);

        }, 650);

        return;

    }


    /*
       CORRECTO
    */

    playerSequence.push(symbol);

    card.classList.add("selected");


    /*
       ¿Ha terminado el nivel?
    */

    if (
        playerSequence.length ===
        currentSequence.length
    ) {

        acceptingInput = false;

        setTimeout(() => {

            levelCompleted();

        }, 500);

    }

}


/* =========================================================
   NIVEL COMPLETADO
========================================================= */

function levelCompleted() {

    /*
       Último nivel
    */

    if (
        currentLevel ===
        gameLevels.length - 1
    ) {

        finishGame();

        return;

    }


    const nextAmount =
        gameLevels[currentLevel + 1].amount;

    document.getElementById(
        "levelSuccessText"
    ).textContent =
        `Bien. Pero todavía quedan cosas que recordar. El siguiente nivel tiene ${nextAmount} símbolos.`;

    showGameView(levelSuccess);

}


/* =========================================================
   SIGUIENTE NIVEL
========================================================= */

nextLevelButton.addEventListener("click", () => {

    currentLevel++;

    startCurrentLevel();

});


/* =========================================================
   REINICIAR
========================================================= */

retryGameButton.addEventListener("click", () => {

    currentLevel = 0;

    startCurrentLevel();

});


/* =========================================================
   WAIT
========================================================= */

function wait(milliseconds) {

    return new Promise(resolve => {

        setTimeout(resolve, milliseconds);

    });

}


/* =========================================================
   FINAL
========================================================= */

async function finishGame() {

    acceptingInput = false;

    showGameView(gameFinal);


    /*
       Limpiar elementos
    */

    const finalSymbols =
        document.getElementById("finalSymbols");

    const finalMessage =
        document.getElementById("finalMessage");

    const passwordReveal =
        document.getElementById("passwordReveal");

    const revealedPassword =
        document.getElementById("revealedPassword");

    const finalParticles =
        document.getElementById("finalParticles");


    finalSymbols.innerHTML = "";

    passwordReveal.classList.remove("show");

    revealedPassword.innerHTML = "";

    finalParticles.innerHTML = "";


    /*
       Crear partículas
    */

    createFinalParticles();


    /*
       Esperar a que aparezca
       "LO RECUERDAS TODO"
    */

    await wait(1300);


    /*
       Mostrar los 15 símbolos
       uno detrás de otro.
    */

    for (
        let i = 0;
        i < memorySymbols.length;
        i++
    ) {

        const symbol =
            document.createElement("span");

        symbol.className =
            "final-symbol";

        symbol.textContent =
            memorySymbols[i];

        symbol.style.animationDelay =
            `${i * 0.11}s`;

        finalSymbols.appendChild(symbol);

        await wait(110);

    }


    /*
       Esperamos a que termine
       la animación.
    */

    await wait(2500);


    /*
       Desaparece el mensaje inicial.
    */

    finalMessage.style.opacity = "0";


    await wait(1300);


    /*
       Mostramos la contraseña.
    */

    passwordReveal.classList.add("show");


    /*
       Escribir contraseña letra por letra.
    */

    await revealPassword();

}


/* =========================================================
   REVELAR CONTRASEÑA
========================================================= */

async function revealPassword() {

    const revealedPassword =
        document.getElementById("revealedPassword");

    revealedPassword.innerHTML = "";


    /*
       Cada carácter aparece
       individualmente.
    */

    for (
        let i = 0;
        i < FINAL_PASSWORD.length;
        i++
    ) {

        const character =
            document.createElement("span");

        character.className =
            "password-character";

        character.textContent =
            FINAL_PASSWORD[i];

        character.style.animationDelay =
            `${i * 0.12}s`;

        revealedPassword.appendChild(character);

        await wait(130);

    }

}


/* =========================================================
   PARTÍCULAS DEL FINAL
========================================================= */

function createFinalParticles() {

    const container =
        document.getElementById("finalParticles");


    const particleSymbols = [
        "·",
        "✦",
        "✧",
        "•",
        "⋆",
        "✶"
    ];


    for (let i = 0; i < 35; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "final-particle";

        particle.textContent =
            particleSymbols[
                Math.floor(
                    Math.random() *
                    particleSymbols.length
                )
            ];


        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.top =
            `${60 + Math.random() * 40}%`;

        particle.style.animationDuration =
            `${4 + Math.random() * 6}s`;

        particle.style.animationDelay =
            `${Math.random() * 3}s`;

        container.appendChild(particle);

    }

}


/* =========================================================
   BOTÓN FINAL
========================================================= */

document
    .getElementById("continueAfterGame")
    .addEventListener("click", () => {

        showScreen("home");

    });


/* =========================================================
   SALIR DEL JUEGO
========================================================= */

document
    .querySelector(".game-back")
    .addEventListener("click", () => {

        /*
           Si sale del juego,
           reiniciamos el progreso.
        */

        currentLevel = 0;
        currentSequence = [];
        playerSequence = [];
        acceptingInput = false;

        showGameView(gameIntro);

        showScreen("home");

    });
