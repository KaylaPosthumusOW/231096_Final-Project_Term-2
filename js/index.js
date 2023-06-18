let subOrder = [];

addSandwich = () => {

    let total = 0;

    let subName = document.getElementById("subName").value;

    let breadOption = document.getElementsByName("bread");
    let breadValue;
    for (let i = 0; i < breadOption.length; i++) {
        if (breadOption[i].checked) {
            breadValue = breadOption[i].value;
            total = total + +breadOption[i].dataset.cost;
        }
    }

    let toppingOption = document.getElementsByName("toppings");
    let toppingsArray = [];
    for (let i = 0; i < toppingOption.length; i++) {
        if (toppingOption[i].checked) {
            toppingsArray.push(toppingOption[i].value);
            total = total + +toppingOption[i].dataset.cost;
        }
    }

    let saucesOption = document.getElementsByName("sauces");
    let sauceArray = [];
    for (let i = 0; i < saucesOption.length; i++) {
        if (saucesOption[i].checked) {
            sauceArray.push(saucesOption[i].value);
            total = total + +saucesOption[i].dataset.cost;
        }
    }

    subOrder.push({
        subName: subName,
        breadOption: breadValue,
        toppingOption: toppingsArray,
        saucesOption: sauceArray,
        total: total
    });

    console.log(subOrder)


    document.getElementById("realTimeCost").innerHTML = "R0.00"
    document.getElementById("subSandwich").reset();

}

realTimeCost = () => {

    let displayPrice = 0;

    let breadOption = document.getElementsByName("bread");
    let breadValue;
    for (let i = 0; i < breadOption.length; i++) {
        if (breadOption[i].checked) {
            breadValue = breadOption[i].value;
            displayPrice = displayPrice + +breadOption[i].dataset.cost;
        }
    }

    let toppingOption = document.getElementsByName("toppings");
    let toppingsArray = [];
    for (let i = 0; i < toppingOption.length; i++) {
        if (toppingOption[i].checked) {
            toppingsArray.push(toppingOption[i].value);
            displayPrice = displayPrice + +toppingOption[i].dataset.cost;
        }
    }

    let saucesOption = document.getElementsByName("sauces");
    let sauceArray = [];
    for (let i = 0; i < saucesOption.length; i++) {
        if (saucesOption[i].checked) {
            sauceArray.push(saucesOption[i].value);
            displayPrice = displayPrice + +saucesOption[i].dataset.cost;
        }
    }

    document.getElementById("realTimeCost").innerHTML = "R" + displayPrice + ".00"
    
}

orderDisplay = () => {

    let area = document.getElementById("currentOrder");
    let price = document.getElementById("orderTotal")

    area.innerHTML = "";

    let overallTotal = 0;

    for(let i = 0; i < subOrder.length; i++){

        let name = subOrder[i].subName;
        let bread = subOrder[i].breadOption;
        let toppings = subOrder[i].toppingOption.join(", ");
        let sauce = subOrder[i].saucesOption.join(", ");
        let total = subOrder[i].total;

        overallTotal += total;

        area.innerHTML += `
        <div class="order-card">
            <div>
                <h5 class="title-name">${name}</h5>
                <p class="subtitles"><strong>Bread:</strong> ${bread}</p>
                <p class="subtitles"><strong>Toppings:</strong> ${toppings}</p>
                <p class="subtitles"><strong>Sauces:</strong> ${sauce}</p>
                <p class="subtitles"><strong>Total cost:</strong> R${total}.00</p>
            </div>
        </div>`

    price.innerHTML = "R" + overallTotal + ".00"

    }

}

checkout = () => {
    let data = JSON.stringify(subOrder);
    localStorage.setItem('order', data);
    window.location.href = '../pages/checkout.html'
}
