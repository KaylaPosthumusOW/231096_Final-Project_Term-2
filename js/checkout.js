let checkout = [];

displayCheck = () => {
    let data = JSON.parse(localStorage.getItem('order'));
    let items = document.getElementById('checkoutOrder');
    let totalArea = document.getElementById('totalOut');

    let checkTotal = 0;

    for(let i = 0; i < data.length; i++){

        let name = data[i].subName;
        let bread = data[i].breadOption;
        let toppings = data[i].toppingOption.join(", ");
        let sauce = data[i].saucesOption.join(", ");
        let total = data[i].total;

        checkTotal += total;

        items.innerHTML += `
        <div class="order-card">
            <div>
                <h5 class="title-name">${name}</h5>
                <p class="subtitles"><strong>Bread:</strong> ${bread}</p>
                <p class="subtitles"><strong>Toppings:</strong> ${toppings}</p>
                <p class="subtitles"><strong>Sauces:</strong> ${sauce}</p>
                <p class="subtitles"><strong>Total cost:</strong> R${total}.00</p>
            </div>
        </div>`

        totalArea.innerHTML = "R" + checkTotal + ".00"
    }

    checkout.push({
        checkTotal: checkTotal
    })
}


addCoupon = () => {

    for(let i = 0; i < checkout.length; i++){

        let couponTotal = checkout[i].checkTotal;
        let totalArea = document.getElementById('totalOut');

    var inputElement = document.getElementById("coupon");
    var discountCode = inputElement.value;

    if(discountCode === "discount23"){
        couponTotal = couponTotal * (90/100)
    } else {
        alert("Incorrect Discount Code")
    }

    totalArea.innerHTML = "R" + couponTotal + ".00"

    }
   
}

resetReturn = () => {
    localStorage.removeItem('order')
    window.location.href = '../index.html'
}