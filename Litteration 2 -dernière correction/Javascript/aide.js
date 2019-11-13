let etiquettetoutcours;
let aideMail;

aideMail = document.getElementById("aide-mail");
etiquettetoutcours = document.getElementById("mail");


augmenterAideContextueleStromgol();

function augmenterAideContextueleStromgol() {
    let texteAideStromgol = etiquettetoutcours.title;
    // Pour ne pas afficher title
    etiquettetoutcours.title = "";
    // https://www.w3schools.com/jsref/event_onmouseover.asp
    etiquettetoutcours.addEventListener("mouseover", mouseOver);
    etiquettetoutcours.addEventListener("mouseout", mouseOut);


    function mouseOver() {
        aideMail.innerHTML = texteAideStromgol;
        aideMail.style.display = "block";
        console.log("on");
    }

    function mouseOut() {
        aideMail.innerHTML = "";
        aideMail.style.display = "none";
        console.log("off");
    }

}