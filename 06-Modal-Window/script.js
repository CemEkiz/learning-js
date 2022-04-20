"use strict";

/* Point-clés de ce mini-projet :
   - querySelectorAll : permet de sélectionner un groupe d'éléments "identiques"
   - .classList.remove et .classList.add : permet d'ajouter/supprimer une classe, 
   c'est très souvent utilisé pour afficher/supprimer des propriétés CSS selon un event (clic, etc.)
   - Event ajouté à un Document : s'appliquera globalement au Document (lorsqu'on clic sur Esc par exemple) */

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

// Fonction : afficher un Modal Window
const openModal = function () {
	modal.classList.remove("hidden"); // ou modal.style.display = "block";
	overlay.classList.remove("hidden"); // ou overlay.style.display = "block";
};

// Fonction : fermer un Modal Window
const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

// Afficher un Modal Window sur l'un des 3 boutons
for (let i = 0; i < btnsShowModal.length; i++) {
	btnsShowModal[i].addEventListener("click", openModal);
}

// Fermer le Modal Window en cliquant sur l'icône close ou sur l'overlay
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Pour fermer le Modal Window avec la touche Esc
document.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});
