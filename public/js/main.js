////////////////////////////////////
//// code ecrit durant le projet.////
/////////////////////////////////////

// setup de toutes les variables
// variable des logos :
const insider = document.querySelector("#insider");
const usat = document.querySelector("#usat");
const theGuardian = document.querySelector("#theguard");
const techCrunch = document.querySelector("#tcrunch");
const forbes = document.querySelector("#forbes");
// variable du bouton qui change la font family
const fontChange = document.querySelector('.website-font');

// variable pour l'effet remplacement d'un texte par un autre.
let howItWorks = document.querySelector('.how-it');
let meals = document.querySelector('.meals');
let testimonials = document.querySelector('.testimonials');
let pricing = document.querySelector('.pricing');

// function qui vas augmenter brightness à 1 au hover et restaurer au mouseout

const logoChange = function (hoverEl) {
    hoverEl.addEventListener("mouseover", event => {
        event.target.setAttribute('style', 'filter : brightness(1)')
    })
    hoverEl.addEventListener("mouseout", event => {
        event.target.setAttribute('style', 'filter : brightness(0)')
    })
};

// appel de la fonction pour qu'elle soit executée
logoChange(theGuardian);
logoChange(forbes);
logoChange(techCrunch);
logoChange(insider);
logoChange(usat);


// setup de l'eventListener qui vas changer la police au click.

fontChange.addEventListener('click', function (param) {
    document.querySelector('body').style.fontFamily = "serif";
});



// Changement du text du menu au hover
const textChange = function (element) {

    if (element === howItWorks) {
        element.addEventListener("mouseover", event => {
            event.target.innerText = "More Info..."
        })
        element.addEventListener("mouseout", event => {
            event.target.innerText = "How it works"
        })
    } else if (element === meals) {
        element.addEventListener("mouseover", event => {
            event.target.innerText = "All diets"
        })
        element.addEventListener("mouseout", event => {
            event.target.innerText = "Meals"
        })
    } else if (element === testimonials) {
        element.addEventListener("mouseover", event => {
            event.target.innerText = "Our customers"
        })
        element.addEventListener("mouseout", event => {
            event.target.innerText = "testimonials"
        })
    } else if (element === pricing) {
        element.addEventListener("mouseover", event => {
            event.target.innerText = "Fairest"
        })
        element.addEventListener("mouseout", event => {
            event.target.innerText = "Pricing"
        })
    }
};
textChange(howItWorks);
textChange(meals);
textChange(pricing);
textChange(testimonials);


// JS vers nouvelle page

function error(event) {
    window.location.href = "./public/pages/error.html"
}


//dark Vision mode function


function colorMode(toggle) {
    document.querySelector('footer').style.backgroundColor = (toggle) ? '#1e1e1e' : 'white';
    document.querySelector('footer').style.color = (toggle) ? 'white' : 'black';
    document.querySelector('.moon').name = (toggle) ? 'sunny' : 'moon';
    document.querySelector('.footer-heading').style.fontSize = (toggle) ? "3rem" : "1.8rem";
};


let toggled = false;

document.querySelector('.moon').addEventListener('click', function () {
    colorMode(toggled);
    toggled = !toggled;
});