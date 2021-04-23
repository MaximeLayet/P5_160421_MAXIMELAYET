//Affichage dynamique du produit et personnalisation du produit


//Recupération API des produits

fetch("http://localhost:3000/api/teddies")
        .then(teddies => teddies.json())
        .then(json => console.log(json));

fetch("http://localhost:3000/api/cameras")
        .then(cameras => cameras.json())
        .then(json => console.log(json));

 fetch("http://localhost:3000/api/fourniture")
        .then(cameras => cameras.json())
        .then(json => console.log(json));
 