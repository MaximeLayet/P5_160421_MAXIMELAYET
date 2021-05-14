// Fonction pour afficher le nombre de choix qu'il faut car pas le même nombre de choix par produit//

function chooseColor(colors) {
	let choices = "";
	for (let i = 0; i < colors.length; i++) {
		choices += `<option value= "${i}">${colors[i]}</option>`;
	}
	return choices;
}

//recupérer l'ID du produit choisi sur index.html//

const personalisation = document.getElementById("personalisation");
let product = new URL(window.location.href);
let id = product.searchParams.get("id");

// //appel de l'API
// const fetchTeddy = async id => {
// 	return await fetch(`http://localhost:3000/api/teddies/${id}`).then(res => res.json());
// };

// // affichage d'un seul produit par page
// const showTeddy = async id => {
// 	let teddy = await fetchTeddy(id);

fetch(`http://localhost:3000/api/teddies/${id}`)
	.then(res => res.json())
	.then(data => showTeddy(data));

function showTeddy(teddy) {
	console.log(teddy);

	//Mise en page de la personnalisation du produit plus appel de la fonction pour le choix des couleurs//

	personalisation.innerHTML = `<div class="card-body">
		<h2 class="card-text">${teddy.name}</h2>
		<img class="only_bear card-img-top" src="${teddy.imageUrl}" />
		<h3 class="card-text">${teddy.description}</h3>
		<p class="price_product text-center" id="price">${teddy.price / 100}€</p>
	</div>
	<label for=quantity>Quantité :</label>
	<input type="number" min="1" class= w-25" id="quantityCount" value = "" ></input>
	<div>
		<label for="">Choisis ta couleur :</label>
		<select name="colors">
			<option id="color" value="">Sélectionne ta couleur</option>
			${this.chooseColor(teddy.colors)}
		</select>
	</div>
	<div class="two_buttons">
	<button id="sendToCart">Ajouter au panier</button>
	<a href="/front_end/Pages HTML/cart.html">
	<button class="see_my_cart">Voir mon panier</button>
	</a>	
	</div>
	`;

	//Créer un objet pour l'envoyer dans le local storage
	let quantit = document.querySelector("#quantityCount");
	console.log(quantit);

	let sheet = {
		Id: teddy._id,
		name: teddy.name,
		price: teddy.price / 100,
		picture: teddy.imageUrl,
		quantité: quantit
	};

	console.log(sheet.quantity);

	//Envoyer dans le localStorage

	sendToCart.addEventListener("click", function (e) {
		//Annuler l'event par défaut qui renvoie à l'index.hmtl
		e.preventDefault();

		// quantit.addEventListener("change", function (e) {
		// 	quantit = quantit.value;
		// });

		//Evoie dans le local storage en ajoutant une ligne au tableau

		const goToData = JSON.parse(localStorage.getItem("fiche")) || [];
		goToData.push(sheet);
		localStorage.setItem("fiche", JSON.stringify(goToData));

		//Ajouter une quantité quand produit similaire plutot qu'une nouvelle ligne

		//"Si la quantité est null, ajouter une ligne, sinon ajouter une quantité"
	});
}
//Appel de la fonction
