let getCommand = JSON.parse(localStorage.getItem("number"));
console.log(getCommand);

let order = getCommand.orderId;
console.log(order);

let confirm = document.getElementById("confirmation");
confirm.innerHTML = "Mon N° de commande<br>" + order;
