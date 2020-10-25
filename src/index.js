import { accueil, menu } from './chargement';

//accueil.myreset();
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
    alert('a propos');
    accueil.active_class(li_a_propos);
});