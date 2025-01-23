import React from 'react'

export const ActiveForm = () => {
   
    let btnSize = localStorage.getItem("app-font-size")
    let btnTheme = localStorage.getItem("app-theme")

    if (btnTheme == "light") {
        
        let act = document.getElementById("radio-1");
        act.checked = true;
    } else if (btnTheme == "light-contrast") {
        let act = document.getElementById("radio-2");
        act.checked = true;
    } else if (btnTheme == "dark") {
        let act = document.getElementById("radio-3");
        act.checked = true;
    } else if (btnTheme == "dark-contrast") {
        let act = document.getElementById("radio-4");
        act.checked = true;
    }



    if (btnSize == "small") {
        let act2 = document.getElementById("radio-11");
        act2.checked = true;
    } else if (btnSize == "medium") {
        let act2 = document.getElementById("radio-12");
        act2.checked = true;
    }
    else if (btnSize == "large") {
        let act2 = document.getElementById("radio-13");
        act2.checked = true;
    }
    else if (btnSize == "extra-large") {
        let act2 = document.getElementById("radio-14");
        act2.checked = true;
    }
    return
}
