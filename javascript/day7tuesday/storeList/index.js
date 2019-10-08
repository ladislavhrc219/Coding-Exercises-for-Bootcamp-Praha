class Products {
    constructor(brand, price, quantity) {
        this.brand = brand;
        this.price = price;
        this.quantity = quantity;
        }
        sell() {
            this.quantity -= 1;
        }
    
        store(count) {
            this.quantity += count;
        }
    }

    const NewList =[
    new product ('TV', 3443435, 344345),
    new product ('LGGGG', 32323, 2432323),
    new product ('SONY', 43434, 345),
    new product ('APPLE', 3424, 3232),
    new product ('ONEPLUS', 345, 323),
    ];


    document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.productList');

    for (const products of NewList) {
        const newElement = document.createElement('div');
        newElement.classList.add("container");
        newElement.innerHTML = (
            `
            <div class="p-name">Name: ${products.brand}</div>
            <div class="p-price">Price: ${products.price}</div>
            <div class="p-quantity">In stock: ${products.quantity}</div>
            <button class="buy">Buy</button>
            `
        );

        const buybutton = productElement.querySelector('.buy');
        const quantity = productElement.querySelector('.p-quantity');

        buybutton.addEventListener('click', () => {
            product.sell();
            quantity.textContent = `In stock: ${products.quantity}`;
            console.log('sell');
        });
        productList.appendChild(newElement);
    }
});