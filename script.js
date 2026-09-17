const PORTAL_PASSWORD = "1CHL13B3DICH";
const FINAL_PASSWORD = "3NTUSBR4Z0S";

const CUENTAGOTAS_PASSWORD = "R13GAM1SOJO5";
const GUERRERA_PASSWORD = "GUERRERA";
const ACOSTADO_PASSWORD = "3NTUSBR4Z0S";

const screens = document.querySelectorAll(".screen");

const modal = document.getElementById("contentModal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const modalNumber = document.getElementById("modalNumber");
const closeModal = document.getElementById("closeModal");


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


document.querySelectorAll("[data-section]").forEach(button => {

    button.addEventListener("click", () => {

        const section = button.dataset.section;

        if (section) {
            showScreen(section);
        }

    });

});


document.querySelectorAll("[data-home]").forEach(button => {

    button.addEventListener("click", () => {
        showScreen("home");
    });

});


const passwordForm =
    document.getElementById("passwordForm");

const passwordInput =
    document.getElementById("passwordInput");

const passwordMessage =
    document.getElementById("passwordMessage");

const portalSunflower =
    document.getElementById("portalSunflower");


const wrongMessages = [
    "Mmm... por aquí no es.",
    "Casi... pero no.",
    "¿Seguro que esa era la clave?",
    "No parece que esto se abra así...",
    "UPS, lo siento, no tienes acceso todavía por aquí.",
    "Mmm... Creo que tendrás que esperar.",
    "VAYA, parece que todavía no puedes."
];


if (passwordForm) {

    passwordForm.addEventListener("submit", event => {

        event.preventDefault();

        const enteredPassword =
            passwordInput.value.trim();

        if (enteredPassword === PORTAL_PASSWORD) {

            passwordMessage.textContent = "";

            if (portalSunflower) {
                portalSunflower.classList.add("show");
                portalSunflower.classList.add("unlock");
            }

            passwordInput.disabled = true;

            setTimeout(() => {

                showScreen("home");

                passwordInput.disabled = false;
                passwordInput.value = "";

            }, 2200);

        } else {

            passwordMessage.textContent =
                wrongMessages[
                    Math.floor(
                        Math.random() *
                        wrongMessages.length
                    )
                ];

            passwordInput.value = "";
            passwordInput.focus();

        }

    });

}


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
para mí tú ya has vencido

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


document
    .querySelectorAll(".leak-card[data-content]")
    .forEach(card => {

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


document
    .querySelectorAll(".locked-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            const messages = [
                "Mmm... por aquí no es.",
                "Casi... pero no.",
                "¿Seguro que esa era la clave?",
                "No parece que esto se abra así...",
                "UPS, lo siento, no tienes acceso todavía por aquí."
            ];

            openModal(
                "🔒",
                "BLOQUEADO",
                messages[
                    Math.floor(
                        Math.random() *
                        messages.length
                    )
                ]
            );

        });

    });


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


const protectedReflections = {

    cuentagotas: {

        number: "04",

        title: "CUENTAGOTAS",

        password: CUENTAGOTAS_PASSWORD,

        content:
`Prométeme que
siempre tendré un hueco entre tus brazos. Un lugar para hospedarme
hasta que se detenga la tormenta.

Protégeme de mi
mismo, y acaríciame para que recuerde quién soy y dónde vivo. Pues
contigo se me olvida todo, mi nombre, mi voz y hasta dónde habito.

Contigo vuelvo a ser de vidrio, aunque si me cuidas aparentaré ser fuerte durante un rato. Pero sé de sobra que mi armadura es frágil, y que es cuestión de tiempo que se deshaga entre tus brazos; para volver a rehacerse más fuerte e intentar que la lluvia no la deje hecha pedazos.`

    },


    guerrera: {

        number: "05",

        title: "GUERRERA",

        password: GUERRERA_PASSWORD,

        content:
`Como buen guerrero, para ser sincero, intento aprender a lidiar las peores batallas observando a otros luchadores. Porqué sí, el espíritu del guerrero no se forma solo combatiendo, se construye día a día observando y analizando el comportamiento de otros expertos en la batalla.

En mi caso, tengo
varios ejemplos a seguir en mi vida de los que intento formarme día
a día para aprender algo nuevo siempre, pero si tuviera que hablar
de lo que me has enseñado tú, recordaría sin duda la fuerza que
tienes para soportar el dolor (tanto físico como mental). Nunca me
olvidaré de cuando se te salió el hombro por segunda vez… Pues
lejos de llorar o lamentarte por todo lo que se te venía, saliste
del campo riéndote con esa felicidad que tanto te caracteriza.
Tampoco olvidaría las infinitas guerras mentales que tienes contigo
misma con tu imagen. Ha sido bastante pesado, lo sé, pero
conseguirás ganarle la batalla a los espejos! Lo sé! Eres la mejor!

Bueno, dejando eso atrás. Yo también soy muy débil, en muchos aspectos, sobre todo en lo que se refiere al tema mental. Desde pequeño le he dado importancia a cosas que, con el tiempo, he acabado comprendiendo que no la tienen. Por eso me gustaría pedirte una cosa: Ya que ya te he dicho como se forman los guerreros, necesito que poco a poco nos convirtamos cada uno en el ejemplo a seguir del otro. Solo así podremos solventar nuestros problemas, aprendiendo y analizando cómo el otro los sortea para salir de todo lo que nos angustia. Necesito que crezcamos juntos, física y mentalmente.`

    },


    acostado: {

        number: "06",

        title: "ACOSTADO EN TU PECHO",

        password: ACOSTADO_PASSWORD,

        content:
`Lo protegido que me siento cuando estoy entre tus brazos no puede ser
descrito ni en miles de poemas, nunca dejes de abrazarme. Uno de los
textos que te escribí ya tocaba este tema, lo hice aposta para poder
confundirte un poco con las contraseñas y que fuese algo más
entretenido.

Hace no mucho me
preguntaste que qué prefería, si tumbarme yo en tu pecho o que lo
hicieras tú…

Bueno… Si te soy plenamente sincero creo que necesito las dos, pues con ellas tiene sentido una pareja. Yo te cuido primero y te canto una canción y tu me proteges después sintiendo mi respiración...`

    }

};


document
    .querySelectorAll(".reflection-item[data-reflection]")
    .forEach(item => {

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


document
    .querySelectorAll(".locked-reflection")
    .forEach(item => {

        item.addEventListener("click", () => {

            const key =
                item.dataset.lockedReflection;

            const reflection =
                protectedReflections[key];

            if (!reflection) return;

            const password = prompt(
                "Esta reflexión está protegida.\n\nIntroduce la contraseña:"
            );

            if (password === null) return;

            if (
                password.trim() ===
                reflection.password
            ) {

                openModal(
                    reflection.number,
                    reflection.title,
                    reflection.content
                );

            } else {

                openModal(
                    "🔒",
                    "ACCESO DENEGADO",
                    "Esa no es la palabra que estás buscando."
                );

            }

        });

    });


document
    .querySelectorAll(".locked-content")
    .forEach(item => {

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


function openModal(number, title, content) {

    if (modalNumber) {
        modalNumber.textContent = number;
    }

    if (modalTitle) {
        modalTitle.textContent = title;
    }

    if (modalContent) {
        modalContent.textContent = content;
    }

    if (modal) {
        modal.classList.add("active");
    }

}


function closeContentModal() {

    if (modal) {
        modal.classList.remove("active");
    }

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeContentModal
    );

}


const modalBackground =
    document.querySelector(".modal-background");


if (modalBackground) {

    modalBackground.addEventListener(
        "click",
        closeContentModal
    );

}


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeContentModal();
    }

});


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
        amount: 4,
        roman: "I"
    },
    {
        amount: 6,
        roman: "II"
    },
    {
        amount: 8,
        roman: "III"
    },
    {
        amount: 10,
        roman: "IV"
    },
    {
        amount: 12,
        roman: "V"
    },
    {
        amount: 15,
        roman: "VI"
    }
];


const gameIntro =
    document.getElementById("gameIntro");

const gameLevel =
    document.getElementById("gameLevel");

const levelSuccess =
    document.getElementById("levelSuccess");

const gameFailure =
    document.getElementById("gameFailure");

const gameFinal =
    document.getElementById("gameFinal");


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


let currentLevel = 0;
let currentSequence = [];
let playerSequence = [];
let acceptingInput = false;


function showGameView(view) {

    [
        gameIntro,
        gameLevel,
        levelSuccess,
        gameFailure,
        gameFinal
    ].forEach(element => {

        if (element) {
            element.classList.remove("active");
        }

    });

    if (view) {
        view.classList.add("active");
    }

}


if (startGameButton) {

    startGameButton.addEventListener(
        "click",
        () => {

            currentLevel = 0;
            startCurrentLevel();

        }
    );

}


function generateSequence(amount) {

    const shuffled =
        [...memorySymbols];

    shuffleArray(shuffled);

    return shuffled.slice(0, amount);

}


function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

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


function startCurrentLevel() {

    const level =
        gameLevels[currentLevel];

    if (!level) return;

    currentSequence =
        generateSequence(level.amount);

    playerSequence = [];
    acceptingInput = false;

    showGameView(gameLevel);

    if (levelNumber) {
        levelNumber.textContent =
            `NIVEL ${level.roman}`;
    }

    if (levelProgress) {
        levelProgress.textContent =
            `${currentLevel + 1} / ${gameLevels.length}`;
    }

    if (levelTitle) {
        levelTitle.textContent = "RECUERDA";
    }

    if (levelInstruction) {
        levelInstruction.textContent =
            "Observa bien...";
    }

    if (gameFeedback) {
        gameFeedback.textContent = "";
    }

    if (sequenceArea) {
        sequenceArea.innerHTML = "";
    }

    if (gameGrid) {
        gameGrid.innerHTML = "";
    }

    showSequence();

}


async function showSequence() {

    if (!sequenceArea) return;

    sequenceArea.innerHTML = "";

    await wait(600);

    for (
        let i = 0;
        i < currentSequence.length;
        i++
    ) {

        const symbol =
            document.createElement("div");

        symbol.className =
            "sequence-symbol";

        symbol.textContent =
            currentSequence[i];

        symbol.style.animationDelay =
            `${i * 0.08}s`;

        sequenceArea.appendChild(symbol);

        await wait(330);

    }

    await wait(1300);

    sequenceArea.innerHTML = "";

    if (levelTitle) {
        levelTitle.textContent = "AHORA TÚ";
    }

    if (levelInstruction) {
        levelInstruction.textContent =
            "Repite la secuencia en el mismo orden.";
    }

    createMemoryGrid();

}


function createMemoryGrid() {

    if (!gameGrid) return;

    gameGrid.innerHTML = "";

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
            () => handleMemoryClick(
                card,
                symbol
            )
        );

        gameGrid.appendChild(card);

    });

    acceptingInput = true;

}


function handleMemoryClick(card, symbol) {

    if (!acceptingInput) return;

    if (
        card.classList.contains("selected")
    ) {
        return;
    }

    const expectedSymbol =
        currentSequence[playerSequence.length];

    if (symbol !== expectedSymbol) {

        acceptingInput = false;

        card.classList.add("wrong");

        if (gameFeedback) {
            gameFeedback.textContent =
                "Ese no era...";
        }

        setTimeout(() => {

            showGameView(gameFailure);

        }, 650);

        return;

    }

    playerSequence.push(symbol);

    card.classList.add("selected");

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


function levelCompleted() {

    if (
        currentLevel ===
        gameLevels.length - 1
    ) {

        finishGame();

        return;

    }

    const nextAmount =
        gameLevels[
            currentLevel + 1
        ].amount;

    const successText =
        document.getElementById(
            "levelSuccessText"
        );

    if (successText) {

        successText.textContent =
            `Bien. Pero todavía quedan cosas que recordar. El siguiente nivel tiene ${nextAmount} símbolos.`;

    }

    showGameView(levelSuccess);

}


if (nextLevelButton) {

    nextLevelButton.addEventListener(
        "click",
        () => {

            currentLevel++;
            startCurrentLevel();

        }
    );

}


if (retryGameButton) {

    retryGameButton.addEventListener(
        "click",
        () => {

            currentLevel = 0;
            startCurrentLevel();

        }
    );

}


function wait(milliseconds) {

    return new Promise(resolve => {

        setTimeout(resolve, milliseconds);

    });

}


async function finishGame() {

    acceptingInput = false;

    showGameView(gameFinal);

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


    if (finalSymbols) {
        finalSymbols.innerHTML = "";
    }

    if (passwordReveal) {
        passwordReveal.classList.remove("show");
    }

    if (revealedPassword) {
        revealedPassword.innerHTML = "";
    }

    if (finalParticles) {
        finalParticles.innerHTML = "";
    }

    createFinalParticles();

    await wait(1300);

    if (finalSymbols) {

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

    }

    await wait(2500);

    if (finalMessage) {
        finalMessage.style.opacity = "0";
    }

    await wait(1300);

    if (passwordReveal) {
        passwordReveal.classList.add("show");
    }

    await revealPassword();

}


async function revealPassword() {

    const revealedPassword =
        document.getElementById(
            "revealedPassword"
        );

    if (!revealedPassword) return;

    revealedPassword.innerHTML = "";

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

        revealedPassword.appendChild(
            character
        );

        await wait(130);

    }

}


function createFinalParticles() {

    const container =
        document.getElementById(
            "finalParticles"
        );

    if (!container) return;

    const particleSymbols = [
        "·",
        "✦",
        "✧",
        "•",
        "⋆",
        "✶"
    ];

    for (
        let i = 0;
        i < 35;
        i++
    ) {

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


const continueAfterGame =
    document.getElementById(
        "continueAfterGame"
    );


if (continueAfterGame) {

    continueAfterGame.addEventListener(
        "click",
        () => {

            showScreen("reflections");

        }
    );

}


const gameBack =
    document.querySelector(".game-back");


if (gameBack) {

    gameBack.addEventListener(
        "click",
        () => {

            currentLevel = 0;
            currentSequence = [];
            playerSequence = [];
            acceptingInput = false;

            showGameView(gameIntro);
            showScreen("home");

        }
    );

}
