let getCommand = JSON.parse(localStorage.getItem("number"));
console.log(getCommand);

let order = getCommand.orderId;
console.log(order);

let total = getCommand.total;
console.log(total);

let confirm = document.getElementById("confirmation");
confirm.innerHTML = "Ton numéro de commande est le " + order;
