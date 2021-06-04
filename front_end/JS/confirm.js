//récupération et affichage du numéro de confirmation de commande

//récupération du localStorage

let getCommand = JSON.parse(localStorage.getItem("number"));
console.log(getCommand);

//récupération du numéro de commande

let order = getCommand.orderId;
console.log(order);

//affichage dans le html

let confirm = document.getElementById("confirmation");
confirm.innerHTML = "Ton numéro de commande est le " + order;
console.log(confirm.innerHTML);
