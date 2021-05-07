//Récupérer la photo avec _id de la page précédente//

// const img = document.createElement("img");
// let search = "_id";
// img.src = window.location.search;
// console.log(123);

//Créer les éléments pour y mettre les données//
// const personalisation = document.getElementById("personalisation");
// personalisation.appendChild("img");

// Fonction pour afficher le nombre de choix qu'il faut car pas le même nombre de choix par produit//

function chooseColor(color) {
	let choices = "";
	for (let i = 0; i < color.length; i++) {
		choices += `<option value= "${i}">${color[i]}</option>`;
	}
	console.log();
	return choices;
}

//recupérer l'ID du produit choisi sur index.html
const personalisation = document.getElementById("personalisation");
let product = new URL(window.location.href);
let id = product.searchParams.get("id");

//appel de l'API
const fetchTeddy = async id => {
	return await fetch(`http://localhost:3000/api/teddies/${id}`).then(res => res.json());
};

// affichage d'un seul produit par page
const showTeddy = async id => {
	let teddy = await fetchTeddy(id);
	console.log(teddy);
	const img = document.createElement("img");
	img.src = teddy.imageUrl;

	personalisation.appendChild(img);
};

showTeddy(id);

// fetch("http://localhost:3000/api/teddies")
// 	.then(res => res.json())
// 	.then(teddies => {
// 		const img = document.createElement("img");
// 		img.src = teddies.imageUrl;

// 		personalisation.appendChild(img);
// 	})
// 	.then(console.log(123));
