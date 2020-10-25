const accueil = (() => {
    function myreset() {
        let myreset = document.getElementsByClassName('reset');
        myreset = Array.from(myreset);
        myreset.forEach(element => {
            element.style.cssText = "margin: 0; padding: 0; box-sizing: border-box; height: 100%;";
        });
    }

    function addHeader() {
        let content = document.getElementById('content');
        let header = document.createElement('header');
        header.setAttribute("id", "myHeader");
        header.style.cssText = "display: flex;justify-content: space-around;align-items: center;font-size: 20px;height: 7%; box-sizing: border-box";
        let logo = document.createElement('div');
        logo.classList.add('logo');
        logo.textContent = "ZUMA";
        let ul_list = document.createElement('ul');
        let menu = ["accueil", "menu", "a propos", "contact"];
        for (let i = 0; i < menu.length; i++) {
            let li = document.createElement('li');
            li.textContent = menu[i];
            li.style.cssText = "display: inline-block;list-style-type: none;padding: 10px 15px; cursor: pointer";
            if (i == 2) {
                li.setAttribute("id", "propos");
            } else {
                li.setAttribute("id", menu[i]);
            }
            ul_list.append(li);
        }
        header.append(logo, ul_list);
        content.append(header);
        let li_accueil = document.getElementById('accueil');
        li_accueil.style.cssText = "color: red; list-style-type: none; display: inline-block;cursor: pointer;";
    }

    function addMain() {
        let main = document.createElement('main');
        main.setAttribute("id", "myMain")
        main.style.cssText = "height: 93%; padding: 0; margin: 0; box-sizing: border-box;";
        let div = document.createElement('div');
        div.style.cssText = "height: 100%;background: url('./pasta.jpg') center no-repeat;background-size: cover;";

        let div_opacity = document.createElement('div');
        div_opacity.style.cssText = "height: 100%; background-color: rgba(250, 250, 250, 0.1); width: 100%;display: flex;justify-content: center;align-items: center;";


        let h1 = document.createElement('h1');
        h1.innerHTML = "<span style=' color:red;'>ZUMA</span><br> FRAIS ET DELICIEUX SUR LE POUCE";
        h1.style.cssText = "font-weight: 400;font-size: 4rem;color: #fff;width: 35%;text-align: center;";

        div_opacity.append(h1);
        div.append(div_opacity);
        //div.append(h1);
        main.append(div);

        let content = document.getElementById('content');
        content.append(main);
    }

    function active_class(element_id) {
        let menu = ["accueil", "menu", "propos", "contact"];
        menu.forEach(element => {
            let li = document.getElementById(element);
            if (li.classList.contains('Active')) {
                li.classList.remove('Active');
            }
        });

        element_id.classList.add('Active');
    }



    return { myreset, addHeader, addMain, active_class };
})();


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
        div1.style.cssText = "height: 40%; background: url('./pasta.jpg') center no-repeat; background-size: cover;";

        let div1_opacity = document.createElement('div');
        div1_opacity.style.cssText = "height: 100%; background-color: rgba(250, 250, 250, 0.1); width: 100%;display: flex;justify-content: center;align-items: center;";

        div1.append(div1_opacity);
        main.append(div1);
        content.append(main);
    }

    return { addHeader, addMenu, myreset };
})();

export { accueil, menu }