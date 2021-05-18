//Le panier doit résumer les produits selectionnés, le prix total et un formulaire pour passer la commande

//Appeler les produits du loczlStorage
let cartContent = JSON.parse(localStorage.getItem("cartContent"));

//Creer une fonction pour afficher les informations necessaires
function myCart() {
	for (var i = 0; i < cartContent.length; i++) {
		let cart = document.getElementById("cartSummary");

		cart.innerHTML += `<tr><td><img class="cartPicture" src="${cartContent[i].picture}" alt="Photo du teddy"/></td><td>${cartContent[i].name}<td>
		<td>${cartContent[i].quantity}</td>
		<td>${cartContent[i].price}€<td>
		<td><a href="#" class="btn btn-danger btn-sm delete">X</a></td></tr>`;
	}
}

myCart();

//Supprimer une ligne
// function deleteItem() {
// 	if (tr.contains("delete")) {
// 		parentElement.parentElement.remove();
// 	}
// }

// console.log(deleteItem());

// document.querySelector("#cartSummary").addEventListener("click", e => {
// 	cartContent.deleteItem(e.target)
// });

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
		.then(function (response) {
			console.log(response);
			return response.json();
		})
		.then(function (command) {
			console.log(command);
			localStorage.setItem("number", JSON.stringify(command));
			localStorage.removeItem("cartContent");
			window.location.href = "/front_end/Pages HTML/confirm.html";
		});
});
