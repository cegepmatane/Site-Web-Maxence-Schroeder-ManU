let vignetteCelebi = document.getElementById('celebi');
let vignetteQulbutoke = document.getElementById('qulbutoke');
let vignetteTogepi = document.getElementById('togepi');
let vignetteRonflex = document.getElementById('ronflex');
let vignettePikachu = document.getElementById('pikachu');

// https://www.w3schools.com/jsref/event_onmousedown.asp
vignetteCelebi.addEventListener("mousedown", function () {
    afficherDetailPokemon('celebi');
});

vignetteQulbutoke.addEventListener("mousedown", function () {
    afficherDetailPokemon('qulbutoke');
});

vignetteTogepi.addEventListener("mousedown", function () {
    afficherDetailPokemon('togepi');
}); 

vignetteRonflex.addEventListener("mousedown", function () {
    afficherDetailPokemon('ronflex');
}); 

vignettePikachu.addEventListener("mousedown", function () {
    afficherDetailPokemon('pikachu');
}); 
function afficherDetailPokemon(pokemon) {
    //alert('detail');
    //alert(pokemon);
    detail = document.getElementById('detail-' + pokemon);
    //if(detail) alert(detail.innerHTML);
    zoneAffichage = document.getElementById('zone-affichage');
    zoneAffichage.innerHTML = detail.innerHTML;
}

//je ne sais pas d'ou vienne les erreurs que me donne w3c