const diminuer = document.querySelector("#diminuer");
const reinitialiser = document.querySelector("#reinitialiser");
const augmenter = document.querySelector("#augmenter");
let compteur = document.querySelector(".site__compteur");

compteur.textContent = 0;

function setCouleur() {
  if (compteur.textContent > 0) {
    compteur.style.color = "green";
  } else if (compteur.textContent < 0) {
    compteur.style.color = "red";
  } else{
    compteur.style.color = "black";
  }
}

diminuer.addEventListener("click", function () {
  compteur.textContent = Number(compteur.textContent) - 1;
  setCouleur();
});

reinitialiser.addEventListener("click", function () {
  compteur.textContent = 0;
  setCouleur();
});

augmenter.addEventListener("click", function () {
  compteur.textContent = Number(compteur.textContent) + 1;
  setCouleur();
});
