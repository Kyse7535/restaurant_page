const menu = (() => {
    function myreset() {
        let main = document.getElementById('myMain');
        main.remove();
    }

    function addHeader() {
        let content = document.getElementById('content');
        let header = document.createElement('header');
        header.style.cssText = "display: flex;justify-content: space-around;align-items: center;font-size: 20px;height: 7%; box-sizing: border-box";
        let logo = document.createElement('div');
        logo.classList.add('logo');
        logo.textContent = "ZUMA";
        let ul_list = document.createElement('ul');
        let menu = ["accueil", "menu", "a propos", "contact"];
        for (let i = 0; i < menu.length; i++) {
            let li = document.createElement('li');
            li.textContent = menu[i];
            li.style.cssText = "display: inline-block;list-style-type: none;padding: 0 15px; cursor: pointer";
            li.setAttribute("id", menu[i]);
            ul_list.append(li);
        }
        header.append(logo, ul_list);
        content.append(header);
    }

    function addMenu() {
        let content = document.getElementById('content');

        let main = document.createElement('main');
        main.setAttribute('id', "myMain");
        main.style.cssText = "height: 93%";

        let div1 = document.createElement('div');
        div1.style.cssText = "height: 40%; background: url('./pizza.jpg') center no-repeat; background-size: cover;";

        let div1_opacity = document.createElement('div');
        div1_opacity.style.cssText = "height: 100%; background-color: rgba(250, 250, 250, 0.3); width: 100%;display: flex;justify-content: center;align-items: center;";

        let div_text = document.createElement('div');
        div_text.innerHTML = '<h1>MENU</h1>';
        div_text.style.cssText = "font-size: 2rem; color: #fff; font-weight: 400;";

        div1_opacity.append(div_text);
        div1.append(div1_opacity);
        main.append(div1);


        let div2 = document.createElement('div');
        div2.style.cssText = "padding: 5% 0; width: 50%; margin: 0 auto; display:flex; justify-content: space-between; align-items: center; flex-wrap: wrap;";

        for (let i = 0; i < 3; i++) {
            let div2_item1 = document.createElement('div');
            div2_item1.style.cssText = "width: 45%;padding: 2% 0;";
            let h1 = document.createElement('h1');
            h1.textContent = "BURGER";
            h1.style.cssText = "color: #ff4444; font-size: 3rem; padding: 1% 0";
            div2_item1.append(h1);
            div2_item1.innerHTML += "<h4>CHEESE BURGER</h4> <p>Ceci est un paragraphe</p> <h4>CHEESE BURGER</h4> <p>Ceci est un paragraphe</p>";
            div2.append(div2_item1);
        }
        let img = document.createElement('img');
        img.setAttribute("src", "burger.jpg");
        img.style.cssText = "width: 50%; height: auto; padding: 4% 0";
        div2.append(img);
        main.append(div2);
        content.append(main);
    }

    return { addHeader, addMenu, myreset };
})();

export { menu }