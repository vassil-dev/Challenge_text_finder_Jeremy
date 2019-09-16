// initialisation des variables dans la portée globale
var nbMots = "";
var mot = "";
var nombre = "";
var arrayText = [];

// déclencher les traitements lors du click sur le bouton recherche
document.getElementById("button").addEventListener("click",
  function() {
    // compter le nombre de mots
    arrayText = textarea.value.split(" ")
    nbMots = arrayText.length;
    document.getElementById("result").textContent = "Il y a " + nbMots + " mots dans le texte ci-dessus.";

    // capter le mot saisi dans le formulaire
    mot = document.getElementById("input").value.toLowerCase();

    // compter le nombre de fois que le mot saisi dans le formulaire est présent dans le texte
      // réinitialiser le nombre de mot avant chaque recherche
      nombre = "";

    for (var i = 0 ; i < arrayText.length ; i++) {
      var motLowerCase = arrayText[i].toLowerCase();
      if (motLowerCase.match(mot)) {
        nombre++;
      }
      if (nombre != 0) {
        document.getElementById("result_search").textContent = 'Le mot "' + mot + '" est présent ' + nombre + ' fois dans le texte ci-dessus.';
      } else {
        document.getElementById("result_search").textContent = 'Le mot "' + mot + '" n\'a pas été trouvé dans le texte ci-dessus.';

      }
    }
  }
)
