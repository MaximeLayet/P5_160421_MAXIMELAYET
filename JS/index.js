//////// API ///////

const url = "http://localhost:3000/api/teddies";

const output = document.getElementById("output");

fetch(url)
	.then(res => res.json())
	.then(teddies => {
		teddies.forEach(teddy => {
			// Affichage de tous les produits //

			const h2 = document.createElement("h2");
			h2.textContent = teddy.name;
			const p = document.createElement("p");
			p.textContent = teddy.price / 100 + " €";
			const img = document.createElement("img");
			img.src = teddy.imageUrl;
			const h3 = document.createElement("h3");
			h3.textContent = teddy.description;
			const a = document.createElement("a");
			a.href = `/Page HTML/product.html?id=${teddy._id}`;

			output.appendChild(h2);
			output.appendChild(img);
			output.appendChild(a);
			a.appendChild(img);
			output.appendChild(h3);
			output.appendChild(p);
		});
	})

	//Afficher un message d'erreur
	.catch(err => "Oups!");

//Styles//

output.style.fontFamily = "Helvetica";
output.style.padding = "0.5rem lg-4";
output.style.marginBottom = "1rem";
