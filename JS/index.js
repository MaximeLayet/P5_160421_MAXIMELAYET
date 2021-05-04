//////// API ///////

const url = "http://localhost:3000/api/teddies";

let product;
const output = document.getElementById("output");

//Noms//

fetch(url)
	.then(res => res.json())
	.then(teddies => {
		teddies.forEach(teddy => {
			const h2 = document.createElement("h2");
			h2.textContent = teddy.name;
			const p = document.createElement("p");
			p.textContent = teddy.price / 100 + " €";
			const img = document.createElement("img");
			img.src = teddy.imageUrl;
			const a = document.createElement("a");
			a.textContent = teddy.description;
			const button = document.createElement("button");
			button.textContent = "Je te choisis";

			output.appendChild(h2);
			output.appendChild(img);
			output.appendChild(a);
			output.appendChild(p);
			output.appendChild(button);
		});
	});

//Styles//

output.style.fontFamily = "Helvetica";
output.style.padding = "0.5rem";
output.style.marginBottom = "1rem";

// .......... //

// const teddies = [
// 	{
// 		colors: ["Tan", "Chocolate", "Black", "White"],
// 		_id: "5be9c8541c9d440000665243",
// 		name: "Norbert",
// 		price: 2900,
// 		imageUrl: "http://localhost:3000/images/teddy_1.jpg",
// 		description:
// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// 	},
// 	{
// 		colors: ["Pale brown", "Dark brown", "White"],
// 		_id: "5beaa8bf1c9d440000a57d94",
// 		name: "Arnold",
// 		price: 3900,
// 		imageUrl: "http://localhost:3000/images/teddy_2.jpg",
// 		description:
// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// 	},
// 	{
// 		colors: ["Brown"],
// 		_id: "5beaaa8f1c9d440000a57d95",
// 		name: "Lenny and Carl",
// 		price: 5900,
// 		description:
// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// 		imageUrl: "http://localhost:3000/images/teddy_3.jpg"
// 	},
// 	{
// 		colors: ["Brown", "Blue", "Pink"],
// 		_id: "5beaabe91c9d440000a57d96",
// 		name: "Gustav",
// 		price: 4500,
// 		imageUrl: "http://localhost:3000/images/teddy_4.jpg",
// 		description:
// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// 	},
// 	{
// 		colors: ["Beige", "Tan", "Chocolate"],
// 		_id: "5beaacd41c9d440000a57d97",
// 		name: "Garfunkel",
// 		price: 5500,
// 		description:
// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// 		imageUrl: "http://localhost:3000/images/teddy_5.jpg"
// 	}
// ];
