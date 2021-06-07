//récupération et affichage du numéro de confirmation de commande

//récupération du localStorage

let getCommand = JSON.parse(localStorage.getItem("number"));
console.log(getCommand);

let getTotal = JSON.parse(localStorage.getItem("total"));
console.log(getTotal);

//récupération du numéro de commande

let order = getCommand.orderId;
console.log(order);

//affichage dans le html

let confirm = document.getElementById("confirmation");
confirm.innerHTML =
	"Ton numéro de commande est le " + order + " pour un total de " + getTotal + " Euros";
console.log(confirm.innerHTML);
