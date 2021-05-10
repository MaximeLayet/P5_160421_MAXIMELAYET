// Fonction pour afficher le nombre de choix qu'il faut car pas le même nombre de choix par produit//

function chooseColor(colors) {
	let choices = "";
	for (let i = 0; i < colors.length; i++) {
		choices += `<option value= "${i}">${colors[i]}</option>`;
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

	//Mise en page de la personnalisation du produit plus appel de la fonction pour le choix des couleurs//

	personalisation.innerHTML = `<div class="card-body">
		<h2 class="card-text">${teddy.name}</h2>
		<img class="card-img-top" src="${teddy.imageUrl}" />
		<h3 class="card-text">${teddy.description}</h3>
		<p class="price_product text-center">${teddy.price / 100}€</p>
	</div>
	<label for=quantity>Quantité :</label>
	<input type="number" min="0" class="w-25"></input>
	<div>
		<label for="">Choisis ta couleur :</label>
		<select name="colors">
			<option value="">Sélectionne ta couleur</option>
			${this.chooseColor(teddy.colors)}
		</select>
	</div>
		
	`;
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
