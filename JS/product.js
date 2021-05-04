// Fonction pour afficher le nombre de choix qu'il faut car pas le même nombre de choix par produit

function chooseColor(color) {
	let choice = [];
	for (let i = 0; i < color.lenght; i++) {
		choice += `<option value= "${i}">${color[i]}</option>`;
	}
	return choice;
}
  

//recupérer l'ID du produit choisi sur index.html

const id = ;