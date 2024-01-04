import {pageLoad,home,menu,contact} from "./pageGenerator";
import "./style.css";

(function tabSwitch () {
    pageLoad();

    let i = 0;
    let buttons = document.querySelectorAll('button');
    for (let button of buttons) {
        switch (i) {
            case 0 : 
            button.addEventListener("click", home);
            break;

            case 1: 
            button.addEventListener("click", menu);
            break;

            case 2: 
            button.addEventListener("click", contact);
            break;
        }
        i++;
    }
    
})();