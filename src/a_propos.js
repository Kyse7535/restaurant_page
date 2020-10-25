const a_propos = (() => {
    function addMain() {
        let content = document.getElementById('content');

        let main = document.createElement('main');
        main.setAttribute('id', "myMain");
        main.style.cssText = "height: 93%";

        let div1 = document.createElement('div');
        div1.style.cssText = "height: 40%; background: url('./coffee.jpg') center no-repeat; background-size: cover;";

        let div1_opacity = document.createElement('div');
        div1_opacity.style.cssText = "height: 100%; background-color: rgba(250, 250, 250, 0.3); width: 100%;display: flex;justify-content: center;align-items: center;";

        let div_text = document.createElement('div');
        div_text.innerHTML = '<h1>A PROPOS</h1>';
        div_text.style.cssText = "font-size: 2rem; color: #fff; font-weight: 400;";

        div1_opacity.append(div_text);
        div1.append(div1_opacity);
        main.append(div1);

        let div2 = document.createElement('div');
        div2.style.cssText = "width: 70%; margin: 0 auto; padding-top: 3%;";
        let div2_paragraph1 = document.createElement('div');
        div2_paragraph1.style.cssText = "width:40%; margin-bottom: 2%";
        div2_paragraph1.innerHTML = "<h1>NOTRE RESTAURANT</h1> <p>Ceci est un paragraphe. C'est l'endroit idéal pour écrire une description sur votre entreprise ou vos services. Vous pouvez ajouter et modifier le texte. Survolez-moi avec votre souris d'ordinateur et cliquez une fois pour que le menu s’affiche. Double-cliquez pour éditer directement le texte. Vous pouvez aussi me déplacer n'importe où  sur la page par la méthode du « Glisser et Déposer ». </p>"
        let div2_paragraph2 = document.createElement('div');
        div2_paragraph2.innerHTML = "<h1>NOTRE EMPLACEMENT</h1><h4>TOUS LES VENDREDIS ET SAMEDIS</h4> <p>Coin rue Durand et des Dunes</p><h4>DU 17 AU 23 JUILLET</h4><p>Festival d 'été de Nice</p>";
        div2_paragraph2.style.cssText = "position: relative; left: 50%;width:50%";
        div2.append(div2_paragraph1, div2_paragraph2);
        main.append(div2);
        content.append(main);
    }
    return { addMain };
})();

export { a_propos };