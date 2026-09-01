/* =========================================
   CONFIGURACIÓN
========================================= */

const PORTAL_PASSWORD = "1CHL13B3DICH";


/* =========================================
   ELEMENTOS
========================================= */

const portal = document.getElementById("portal");
const home = document.getElementById("home");
const portalSunflower = document.getElementById("portalSunflower");

const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const loginMessage = document.getElementById("loginMessage");

const modal = document.getElementById("contentModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");


/* =========================================
   MENSAJES
========================================= */

const wrongPasswordMessages = [

    "Mmm... por aquí no es.",

    "Casi... pero no.",

    "¿Seguro que esa era la clave?",

    "No parece que esto se abra así...",

    "Por ahí no vas a encontrarlo.",

    "Mmm... inténtalo en otro rincón.",

    "Creo que tendrás que seguir buscando."

];


/* =========================================
   NAVEGACIÓN
========================================= */

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.add("hidden");
    });

    const target = document.getElementById(id);

    if (target) {
        target.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


/* =========================================
   BOTONES DE SECCIÓN
========================================= */

document.querySelectorAll("[data-section]").forEach(button => {

    button.addEventListener("click", () => {

        const section = button.dataset.section;

        showScreen(section);

    });

});


/* =========================================
   VOLVER AL HOME
========================================= */

document.querySelectorAll("[data-home]").forEach(button => {

    button.addEventListener("click", () => {

        showScreen("home");

    });

});


/* =========================================
   LOGIN
========================================= */

loginForm.addEventListener("submit", event => {

    event.preventDefault();

    const enteredPassword =
        passwordInput.value.trim();

    if (enteredPassword === PORTAL_PASSWORD) {

        unlockPortal();

    } else {

        showWrongPassword();

    }

});


/* =========================================
   CONTRASEÑA INCORRECTA
========================================= */

function showWrongPassword() {

    const randomIndex =
        Math.floor(
            Math.random() *
            wrongPasswordMessages.length
        );

    loginMessage.textContent =
        wrongPasswordMessages[randomIndex];

    loginMessage.classList.add("visible");

    passwordInput.value = "";

    passwordInput.focus();

}


/* =========================================
   DESBLOQUEAR PORTAL
========================================= */

function unlockPortal() {

    loginMessage.classList.remove("visible");

    passwordInput.blur();

    portalSunflower.classList.add("unlock");

    setTimeout(() => {

        portal.style.opacity = "0";

        portal.style.transform = "scale(1.04)";

    }, 900);


    setTimeout(() => {

        portal.style.display = "none";

        showScreen("home");

    }, 1800);

}


/* =========================================
   FILTRACIONES BLOQUEADAS
========================================= */

document.querySelectorAll("[data-locked]").forEach(button => {

    button.addEventListener("click", () => {

        showLockedMessage();

    });

});


function showLockedMessage() {

    const messages = [

        "Mmm... creo que tendrás que esperar.",

        "Ups, lo siento, no tienes acceso todavía por aquí.",

        "Vaya... parece que todavía no puedes.",

        "¿Ya estás intentando entrar? Qué impaciente...",

        "Aquí todavía no hay nada para ti... 🤭"

    ];

    const message =
        messages[
            Math.floor(Math.random() * messages.length)
        ];

    modalContent.innerHTML = `

        <div class="content-title">
            ${message}
        </div>

    `;

    modal.classList.remove("hidden");

}


/* =========================================
   CONTENIDOS
========================================= */

const contents = {


    autoexigencia: {

        title: "AUTOEXIGENCIA LIMITANTE",

        type: "poem",

        text: `Espíritu irrealizable
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

        title: "ESPEJOS",

        type: "poem",

        text: `Ojalá un mundo sin espejos
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

        title: "GUERRERA",

        type: "poem",

        text: `Y si piensas que te caes, para mí tú ya has vencido

Y si pienso que me caigo ya me levanté contigo...

[ ... ]`

    }

};


/* =========================================
   ABRIR FILTRACIÓN
========================================= */

document.querySelectorAll("[data-leak]").forEach(button => {

    button.addEventListener("click", () => {

        const leak = button.dataset.leak;

        openContent(contents[leak]);

    });

});


/* =========================================
   REFLEXIONES
========================================= */

const reflections = {

    cambios: {

        title: "CAMBIOS",

        text: `A veces me pregunto si ha cambiado algo en mi vida desde que te conocí, y, realmente, la duda debería de ofenderme, pues claro que han cambiado muchísimas cosas.

No obstante, como contigo he tenido la suerte de llevar una relación día a día y sin la necesidad de forzar nada, los cambios han sido tan naturales que parece que todo siga igual que antes.

Pero.... Obviamente no.

Por mucho que nos hayamos adaptado progresivamente los cambios son indudables si nos remontamos a un año y medio atrás.

Y no hablo simplemente de unos planes en el futuro o de una nueva compañía, me refiero a modificaciones menos evidentes pero que significan mucho para los dos...`

    },


    espejosReflection: {

        title: "ESPEJOS",

        text: `Ojalá un mundo sin espejos. Sin ningún objeto que te permita sentirte mal contigo misma diariamente.

Ojalá pudieras conocerte a través de la imagen que tengo de ti. Esa que solo yo conozco y que me encantaría enseñarte.

Realmente, me gustaría ser tu propio espejo.

No sé si pecaría de idealista o si la imagen que te mostrase deformara tu realidad de igual manera que el resto de espejos.

Lo que si que sé es que te destaparía miles de detalles que tú sola no eres capaz de reconocer.

Te permitiría encontrarte con, no sé si verdadera, pero, tu "más justa yo".

Porque sí, a lo mejor peco de idealista como ya he comentado, pero sé al menos que mis imágenes contemplarían trocitos preciosos aparentemente inexistentes para ti.

Ojalá destruir todos los espejos y dejar tan solo nuestros corazones.

El mío también tiene mucho de ti.

Si lo observaras te encontrarías también con tu yo más pura.

Esa que yo me guardo en lo más profundo de mí y que ya no se puede eliminar de ninguna forma.

No sé, me da rabia que sean objetos tan injustos.

Es lo que tiene, ¿No?

Al final, cuando un reflejo contiene solo una superficie se pierde el interior completo de la imagen.

La belleza de un árbol se sustenta justo en sus raíces.

Sin embargo, todos dejamos nuestra mirada a medias.

Por eso te pido que te mires en mi interior.

Puede que mi mirada sea demasiado generosa, pero te aseguro que no se quedará a medias como la del resto de espejos.`

    },


    besos: {

        title: "BESOS ENFRENTADOS",

        text: `Que sensación tan agridulce cuando en medio de una discusión con mi pareja decido darle un beso. Así, sin pensármelo demasiado.

Por un momento mi arma se detiene, el fuego cesa y la lluvia la frenamos con un paraguas de cartón.

Porque durante unos segundos, antes de retomar el conflicto y volver a los disparos, nuestras bocas dejan de vomitar palabras vacías y se funden tímidamente en el hombro del otro para recordarnos que nuestro amor sigue flotando.`

    }

};


/* =========================================
   BOTONES REFLEXIONES
========================================= */

const reflectionButtons =
    document.querySelectorAll(".reflection-card");

reflectionButtons[0]?.addEventListener(
    "click",
    () => openContent(reflections.cambios)
);

reflectionButtons[1]?.addEventListener(
    "click",
    () => openContent(reflections.espejosReflection)
);

reflectionButtons[2]?.addEventListener(
    "click",
    () => openContent(reflections.besos)
);


/* =========================================
   ABRIR CONTENIDO
========================================= */

function openContent(content) {

    if (!content) return;

    const className =
        content.type === "poem"
            ? "poem"
            : "reflection-text";

    modalContent.innerHTML = `

        <div class="content-title">
            ${content.title}
        </div>

        <div class="${className}">
            ${escapeHTML(content.text)}
        </div>

    `;

    modal.classList.remove("hidden");

}


/* =========================================
   SEGURIDAD BÁSICA DE TEXTO
========================================= */

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}


/* =========================================
   CERRAR MODAL
========================================= */

closeModal.addEventListener("click", () => {

    modal.classList.add("hidden");

});


modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.add("hidden");

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        modal.classList.add("hidden");

    }

});