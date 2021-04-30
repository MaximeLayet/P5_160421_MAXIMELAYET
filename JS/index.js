        //////// API ///////

const url ='http://localhost:3000/api/teddies'

let product;
const output = document.getElementById('output');


        //Noms//

fetch(url)
        .then(res => res.json())
        .then(teddies => {
                teddies.forEach(teddy => {
                        const h2 = document.createElement('h2');
                        h2.textContent = teddy.name;
                        console.log(h2);
                        output.appendChild(h2);
                        product = teddy;
                })
        })

        // Prix //

const teddyPrice = document.getElementById('teddyPrice');
fetch(url)
        .then(res => res.json())
        .then(teddies => {
                teddies.forEach(teddy => {
                        const h2 = document.createElement('h2');
                        h2.textContent = teddy.price;
                        console.log(h2);
                        teddyPrice.appendChild(h2);
                        product = teddy;
                })
        })

        // Description //

fetch(url)
        .then(res => res.json())
        .then(teddies => {
                teddies.forEach(teddy => {
                        const p = document.createElement('p');
                        p.textContent = teddy.description;
                        console.log(p);
                        teddyPrice.appendChild(p);
                        product = teddy;
                })
        })
        // Photo Teddies // 

const img = document.getElementById("bear_pic");

fetch(url)
        .then(res=> res.json())
        .then(data => {
                img.innerHTML = data[0].url;
                img.src = data[0].imageUrl;
        })

fetch(url)
        .then(res=> res.json())
        .then(data => {
                img.innerHTML = data[1].url;
                img.src = data[1].imageUrl;
        })

fetch(url)
        .then(res=> res.json())
        .then(data => {
                img.innerHTML = data[2].url;
                img.src = data[2].imageUrl;
        })

fetch(url)
        .then(res=> res.json())
        .then(data => {
                img.innerHTML = data[3].url;
                img.src = data[3].imageUrl;
        })

fetch(url)
        .then(res=> res.json())
        .then(data => {
                img.innerHTML = data[4].url;
                img.src = data[4].imageUrl;
        })

// Fonction pour diviser le prix et l'afficher en Euros // 

let price = 5900;

function realPrice() {
    price /= 100;
    console.log(price + ' €');
}

realPrice();

// .......... //





