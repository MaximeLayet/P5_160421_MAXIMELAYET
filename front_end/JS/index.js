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
			// lien vers la page product avec l'id concerné
			a.href = `/front_end/Pages_HTML/product.html?id=${teddy._id}`;
			console.log(a.href);

			// implementation dans le html

			output.appendChild(h2);
			output.appendChild(img);
			output.appendChild(a);
			a.appendChild(img);
			output.appendChild(h3);
			output.appendChild(p);
			img.classList.add("only_bear");
		});
	})
	.catch(err => {
		console.log(err);
	});
