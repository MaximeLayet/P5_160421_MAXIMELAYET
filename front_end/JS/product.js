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

//appel de l'API

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
		<p class="price_product text-center" id="price">${teddy.price / 100} €</p>
	</div>
	<div class="custom">
		<label for=quantity>Quantité :</label>
		<input type="number" min="1" class= w-25" id="quantityCount" value = "1" ></input>		
		<label for="color">Choisis ta couleur :</label>
			<select name="colors">
				<option id="color" value="">Sélectionne ta couleur</option>
				${this.chooseColor(teddy.colors)}
			</select>
	</div>
	<div class="three_buttons">
	<a href="/front_end/Pages_HTML/index.html">
	<button>Choisis un autre Orinours</button>
	</a>	
	<button id="sendToCart" >Ajouter au panier</button>
	<a href="/front_end/Pages_HTML/cart.html">
	<button class="see_my_cart">Voir mon panier</button>
	</a>	
	</div>
	`;

	//Envoyer dans le localStorage

	sendToCart.addEventListener("click", function (e) {
		//Annuler l'event par défaut qui renvoie à l'index.hmtl

		e.preventDefault();

		//Definir quantities et recupérer la valeur

		let quantities = document.getElementById("quantityCount").value;

		//Message d'ajout dans le panier d'un ou plusieurs Teddy

		if (quantities > 1) {
			alert(`Plusieurs ${teddy.name} ont sauté le panier`);
		} else if (teddy.name === "Lenny and Carl") {
			alert(`${teddy.name} ont sauté dans le panier`);
		} else {
			alert(`${teddy.name} a sauté dans le panier`);
		}

		//Définir les données à envoyer dans le localStorage

		let sheet = {
			id: teddy._id,
			name: teddy.name,
			price: teddy.price / 100,
			picture: teddy.imageUrl,
			quantity: parseFloat(quantities)
		};

		//Evoie dans le local storage en ajoutant une ligne au tableau et en additionnant les quantités quand l'id est identique(fonction)

		function addBears() {
			const cartContent = JSON.parse(localStorage.getItem("cartContent")) || [];
			let bearsInCart = false;
			for (let i = 0; i < cartContent.length; i++) {
				if (cartContent[i].id === sheet.id) {
					bearsInCart = true;
					cartContent[i].quantity += sheet.quantity;
					cartContent[i].price = cartContent[i].quantity * sheet.price;
				}
				console.log(cartContent[i].price);
			}
			if (!bearsInCart) {
				cartContent.push(sheet);
			}

			localStorage.setItem("cartContent", JSON.stringify(cartContent));
		}

		addBears();
	});
}
