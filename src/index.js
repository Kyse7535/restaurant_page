import { accueil } from './accueil';
import { menu } from './menu';
import { a_propos } from './a_propos';

accueil.myreset();
accueil.addHeader();
accueil.addMain();
let li_accueil = document.getElementById('accueil');
accueil.active_class(li_accueil);
li_accueil.addEventListener('click', () => {
    menu.myreset();
    accueil.addMain();
    accueil.active_class(li_accueil);
});

let li_menu = document.getElementById('menu');
li_menu.addEventListener('click', () => {
    menu.myreset();
    menu.addMenu();
    accueil.active_class(li_menu);
});

let li_a_propos = document.getElementById('propos');
li_a_propos.addEventListener('click', () => {
    accueil.active_class(li_a_propos);
    menu.myreset();
    a_propos.addMain();
});