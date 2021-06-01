let getCommand = JSON.parse(localStorage.getItem("number"));
console.log(getCommand);

let order = getCommand.orderId;
console.log(order);

let confirm = document.getElementById("confirmation");
confirm.innerHTML = "Ton numéro de commande est le " + order;
console.log(confirm.innerHTML);
