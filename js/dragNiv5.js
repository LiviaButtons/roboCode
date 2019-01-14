
document.addEventListener("DOMContentLoaded", function (event) {

	validation.disabled = true;
	var dragged;


	// empêche de draguer autre chose
	document.addEventListener ("drag", function (event) {}, false);

	document.addEventListener ("dragstart", function (event) {
	    // store a ref. on the dragged elem
	    dragged = event.target;
	    // make it half transparent
	    event.target.style.opacity = .5;
//	    console.log(dragged);

		// si un message était afficher dans la div .propositions (parce que l'utilisateur avait déjà essayer une combinaison de toutes les instruction et donc vidé la div .propositions) -> le remover
		if (propositions.children[0].id == "trymessage") {
//			console.log("teeeeeest");
//			console.log(propositions.removeChild(trymessage));
		}
	}, false);

	document.addEventListener ("dragend", function (event) {
	    // reset the transparency
	    event.target.style.opacity = "";
	}, false);

	/* events fired on the drop targets */
	document.addEventListener ("dragover", function (event) {
	    // prevent default to allow drop
	    event.preventDefault(); 
	}, false);




	/* what happens when you drop a draggable element */
	document.addEventListener("drop", function (event) {
        // prevent default action
	    event.preventDefault();

		// move dragged element to the selected drop target
		if (event.target.classList.contains("dropzone")) {
			// dragged.parentNode.style.background = "#00e3e3"; //donne la couleur à l'élément que le dragged leave

			//remet la class "dropzone" au parent quitté si il contient la classe "drop-solution" (il ne contenait qu'un seul élément et doit maintenant être vide: il faut pouvoir dropper une nouvelle réponse)
			if (dragged.parentNode.classList.contains("drop_solution")) {
				dragged.parentNode.classList.add("dropzone");
			}

			dragged.parentNode.removeChild(dragged); //enlève le dragged de son "précédant" parent
			event.target.appendChild(dragged); //ajoute le dragged en tant qu'enfant là ou il est droppé

			//empêche qu'on drag de nouveaux éléments dans les div "drop-solution" si il y en à déjà un
			if (event.target.classList.contains("drop_solution")) {
//				console.log(event.target);
				event.target.classList.remove("dropzone");
//				console.log(event.target);
			}

			// vérification:

			// sélectionne toutes les réponses (éléments draggable) DEJA droppées dans les div "drop_solution" et les stock dans un tableau
			let answers = document.querySelectorAll(".drop_solution .dragEle");
//			console.log(answers);
			// console.log(answers[0]);

			// crée un variable qui comptabilise le nombre de réponses déjà droppées (=longueur du tableau)
			var nbr_answers = answers.length;
//			console.log(nbr_answers);

			// si le nombre de réponses données > 3 (donc == 4 -> toutes les div "drop_solution" sont remplies), vérifier si les réponses sont dans le bon ordre
			if (nbr_answers > 3) {

				// crée variable boléenne "succes" et l'instancie à true
				let succes = true;
//				console.log(succes);

				//crée un array qui reprend l'ordre alternatif de bonnes réponses (les id sont 0, 1, 2, 3, et cet ordre est correct, mais comme 2solution sont possible (les deux marche(droite) sont intervertible, il faut vérifier la combinaison 2,1,0,3))
				let valeursAlt = [2,1,0,3];
//				console.log(valeursAlt);
//				console.log(valeursAlt[0]);


				// vérifie que les 4 réponses droppées (reprisent dans "answers") sont données dans l'ordre attendu (leurs id doivent, dans l'ordre, correspondre à 0, 1, 2 -> valeurs également prisent par i OU à 2,1,0,3 -> valeurs contenues dans la tableau valeursAlt)
				for (let i = 0; i < nbr_answers; i++) {
					console.log(answers[i].id);
					if (answers[i].id != i && answers[i].id != valeursAlt[i]) {
						// si une seule des vakeurs n'est pas à la place attendue, "succes" passe a false
						succes = false;
					}
//					console.log(succes);
				}
//				console.log(succes);

				// dans le cas où "succes" est resté à "true", le jeu est gagné
				if (succes) {

					for (let i = 0; i < answers.length; i++) {
						// toutes les réponses (dragEle) sont rendues"undraggable"
						answers[i].setAttribute("draggable", "false");

						// crée et rempli puis incruste un span fas fa-check dans chaque div ".drop-solution"
						var yesSpan = document.createElement('span');

						yesSpan.classList.add("fas");
						yesSpan.classList.add ("fa-check");
//						console.log(answers[i].parentNode);

						answers[i].parentNode.appendChild(yesSpan);

//						console.log(answers[i].parentNode);
//						console.log(yesSpan);
						//test
					}

					// on rend le bouton valider actif
					validation.disabled = false; 

//					// on crée un message à afficher dans la div  id="proposition"
//					var spanYouWin = document.createElement('span');
//					var textWin = document.createTextNode("You Win!!!");
//					spanYouWin.appendChild(textWin);
//					propositions.appendChild(spanYouWin);
				}
				else{
					// si la combinaison des trois propositions est fausse, on crée un message "trymessage" pour dire à l'utilisateur de réessayer -> à afficher dans la div  id="proposition" (pour l'instant vide). Le message sera enlevé dès que quelque chose sera droppé dans la div "propositions"

					var spanYouWin = document.createElement('span');
					var textWin = document.createTextNode("Ce n'est pas la bonne combinaison! Essaie encore!");
					spanYouWin.appendChild(textWin);
					spanYouWin.setAttribute("id", "trymessage");
					propositions.appendChild(spanYouWin);
				}
			}
		}

	}, false);
    
    valider.addEventListener('click', function(e){
        validation.disabled = true;
  // quelque chose qui se passe quand bouton valider est clicqué
  progressbar.setAttribute("style", "width: 100%;");
  progressbar.setAttribute("aria-valuenow", "100");
    progressbar.textContent = "100% Complete";
    gameImg5.src = "./assets/gif/robot_lvl5.gif";

});
});
