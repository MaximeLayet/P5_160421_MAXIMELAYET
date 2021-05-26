//Le panier doit résumer les produits selectionnés, le prix total et un formulaire pour passer la commande

//Appeler les produits du loczlStorage
let cartContent = JSON.parse(localStorage.getItem("cartContent"));

//Creer une fonction pour afficher les informations necessaires
function myCart() {
	for (var i = 0; i < cartContent.length; i++) {
		let cart = document.getElementById("cartSummary");

		cart.innerHTML += `<tr class="mySummary"><td><img class="cartPicture" src="${cartContent[i].picture}" alt="Photo du teddy"/></td><td>${cartContent[i].name}<td>
		<td>${cartContent[i].quantity}</td>
		<td>${cartContent[i].price}€<td>
		<td><btn class="btn btn-danger btn-sm delete " >X</btn></td></tr>`;
	}
}

myCart();

//Supprimer une ligne

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

document.getElementById("confirmCommand").addEventListener("click", function (e) {
	console.log(cartContent);

	if (cartContent.lenght > 0) {
		alert("Ton panier est vide, cela nous attriste");
	} else {
		alert("tu as validé ton panier, cela nous rempli de joie!");
	}

	// if (
	// 	firstName.value.match(/^([a-zA-Z- àâäéèêëïîôöùûüç]+)$/) &&
	// 	lastName.value.match(/^([a-zA-Z- àâäéèêëïîôöùûüç]+)$/) &&
	// 	address.value.match(/^([0-9a-zA-Z- àâäéèêëïîôöùûüç]+)$/) &&
	// 	email.value.match(
	// 		/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/,
	// 	) &&
	// 	city.value.match(/^([a-zA-Z- àâäéèêëïîôöùûüç]+)$/)
	// )

	let products = [];
	console.log(products);
	for (var i = 0; i < cartContent.length; i++) {
		total = cartContent[i].Id;
		products.push(total);
	}

	let firstName = document.getElementById("firstName").value;
	console.log(firstName);
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

	let sendCart = JSON.stringify({ contact, products });
	console.log(sendCart);

	fetch("http://localhost:3000/api/teddies/order", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: sendCart
	})
		.then(res => res.json())
		.then(command => localStorage.setItem("number", JSON.stringify(command)));
	localStorage.removeItem("cartContent");
	window.location.href = "/front_end/Pages HTML/confirm.html";
});
