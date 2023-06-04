

let sidebarbtn = document.querySelector(`.sidebar`);
let sidebar = document.querySelector(`.bar`);

function bartoggle (){
    sidebar.classList.toggle( `active`)
    
    if (sidebar.classList.contains( `active`) == false) {
        sidebarbtn.innerHTML= (`<i class="bi bi-caret-right-fill"></i>`)
        console.log('sidebar is open');
     } else {
        sidebarbtn.innerHTML= (`<i class="bi bi-caret-left-fill"></i>`)
        console.log('sidebar is close');
    }
    
}

// DarkMood starts

sidebarbtn.addEventListener(`click`, bartoggle);

let moodbtn = document.querySelector(`.displaymood`);
let eye = document.querySelector(`body`)
let text = document.querySelector(`.moodtext`)
let buttonmood = document.querySelector(`.light`)

function openmood() {
    eye.classList.toggle(`magic`);

    if (eye.classList.contains(`magic`) == true) {
        text.innerHTML= `Dark Mood`
        buttonmood.innerHTML=`<i class="bi bi-moon-stars-fill"></i>`
        console.log(`Click > Light`)
    } else {
        text.innerHTML= `Light Mood`
        buttonmood.innerHTML=`<i class="bi bi-sun"></i>`
        console.log(`Click > Dark`)
    }
}



// password starts



moodbtn.addEventListener('click',  openmood)


let lookbtn = document.querySelector(`.lookbutton`);
let passbtn = document.querySelector(`.pass`);

function showme() {
    // passbtn.type =`text`

    if (passbtn.type == `text`) {
        passbtn.type = `password`
        lookbtn.innerHTML= `<i class="bi bi-eye-slash"></i>`
    } else {
        passbtn.type = `text`
        lookbtn.innerHTML= `<i class="bi bi-eye-fill"></i>`
    }

}


lookbtn.addEventListener(`click`, showme)
