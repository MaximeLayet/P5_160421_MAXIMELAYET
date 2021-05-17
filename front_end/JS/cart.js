//Le panier doit résumer les produits selectionnés, le prix total et un formulaire pour passer la commande

//Appeler les produits du loczlStorage
let cartContent = JSON.parse(localStorage.getItem("cartContent"));
console.log(cartContent);

//Creer une fonction pour afficher les informations necessaires
function myCart() {
	for (var i = 0; i < cartContent.length; i++) {
		console.log(cartContent[i]);
		let cart = document.getElementById("cartSummary");

		cart.innerHTML += `<tr><td><img class="cartPicture" src="${cartContent[i].picture}" alt="Photo du teddy"/></td><td>${cartContent[i].name}<td>
		<td>${cartContent[i].quantity}</td>
		<td>${cartContent[i].price}€<td></tr>`;
	}
}

myCart();

//Creer une fonction pour calculer et afficher le total du panier
function totalCart() {
	let globalPrice = 0;
	for (var i = 0; i < cartContent.length; i++) {
		total = cartContent[i].price;
		globalPrice += total;
	}

	let showPrice = document.getElementById("total");
	showPrice.innerHTML = globalPrice;
}

totalCart();

//Envoyer les données et récuperer un id ---> confirmation de la commande

document.getElementById("confirmCommand").addEventListener("click", function () {
	let firstName = document.getElementById("firstName").value;

	let lastName = document.getElementById("lastName").value;

	let email = document.getElementById("email").value;

	let city = document.getElementById("city").value;

	let address = document.getElementById("address").value;

	let contact = {
		firstName: firstName,
		lastName: lastName,
		email: email,
		city: city,
		address: address
	};
	console.log(contact);

	let products = [];

	let sendCart = JSON.stringify({ contact, products });
});
