////Le panier doit résumer les produits selectionnés, le prix total et un formulaire de renseignement pour pouvoir valider la commande////

//Appeler les produits du localStorage
let cartContent = JSON.parse(localStorage.getItem("cartContent"));
console.log(cartContent);

//Creer une fonction pour afficher les informations necessaires
function myCart() {
	for (let i = 0; i < cartContent.length; i++) {
		let cart = document.getElementById("cartSummary");

		cart.innerHTML += `<tr class="mySummary"><td><img class="cartPicture" src="${cartContent[i].picture}" alt="Photo du teddy"/></td><td>${cartContent[i].name}<td>
		<td>x${cartContent[i].quantity}</td>
		<td>${cartContent[i].price}€<td>
		<td><btn class="btn btn-danger btn-sm delete">X</btn></td></tr>`;
		console.log(cart);

		//Supprimer une ligne

		let deleteLine = document.querySelectorAll(".delete");

		for (let i = 0; i < deleteLine.length; i++) {
			deleteLine[i].addEventListener("click", e => {
				let newSheet = cartContent.indexOf(cartContent[i]);
				cartContent.splice(newSheet, 1);
				localStorage.setItem("cartContent", JSON.stringify(cartContent));
				deleteLine[i].parentElement.parentElement.remove();
				window.location.reload();
			});
		}
	}
}

myCart();

//Creer une fonction pour calculer et afficher le total du panier

function totalCart() {
	let globalPrice = 0;
	for (let i = 0; i < cartContent.length; i++) {
		total = cartContent[i].price;
		globalPrice += total;
	}

	let showPrice = document.getElementById("total");
	showPrice.innerHTML = "Total: " + globalPrice + "€";

	if (globalPrice === 0) {
		alert("Je crois que ton panier est vide...");
	}
	console.log(globalPrice);
}

totalCart();

//mise en place d'un regex pour la fiche de renseignement//

document.getElementById("confirmCommand").addEventListener("click", function () {
	let products = [];
	console.log(products);

	if (
		firstName.value.match(/^([a-zA-Z- àâäéèêëïîôöùûüç]+)$/) &&
		lastName.value.match(/^([a-zA-Z- àâäéèêëïîôöùûüç]+)$/) &&
		address.value.match(/^([0-9a-zA-Z- àâäéèêëïîôöùûüç]+)$/) &&
		email.value.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/) &&
		city.value.match(/^([a-zA-Z- àâäéèêëïîôöùûüç]+)$/)
	) {
		for (let i = 0; i < cartContent.length; i++) {
			total = cartContent[i].id;
			console.log(cartContent[i].id);
			products.push(total);
		}

		//création du let contact qui sera envoyé avec products//

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

		let sendCart = JSON.stringify({ contact, products });

		fetch("http://localhost:3000/api/teddies/order", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: sendCart
		})
			.then(res => res.json())
			.then(function (command) {
				localStorage.setItem("number", JSON.stringify(command));
				localStorage.removeItem("cartContent");
				window.location.href = "/front_end/Pages_HTML/confirm.html";
				alert("tu as validé ton panier, cela nous rempli de joie!");
			});
	} else {
		alert("Il nous faudrait tes coordonnées sinon ca va être compliqué!");
	}
});

//Envoyer les données et récuperer un id ---> confirmation de la commande
