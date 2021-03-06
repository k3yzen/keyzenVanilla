/* Import */

import showUpNotebook from "./functions/showUpNotebook.js";
import showUpDesktop from "./functions/showUpDesktop.js"
import showUpDeveloper from "./functions/showUpDeveloper.js"
import clickOnWhatsapp from "./functions/clickOnWhatsapp.js";


/* Loaded */
const d = document,
w = window;

d.addEventListener("DOMContentLoaded", () => {

    showUpNotebook('hidden-notebook', 'show-notebook', '.svg-notebook');
    showUpDesktop('hidden-desktop', 'show-desktop', '.svg-desktop')
    showUpDeveloper('hidden-developer', 'show-developer', '.titles')
    clickOnWhatsapp('.whatsapp', '.whatsapp-icon', 'https://wa.link/w3997u')

})