const catalog = {
    catalog: document.querySelector('.catalog'),
    buttonBuy: document.querySelector('.catalog'),
    allproducts: [
        {
            name: 'Yamaha',
            cost: 1200000,
            description: 'Описание мотоцикла',
        },
        {
            name: 'Harley-Davidson',
            cost: 1600000,
            description: 'Описание мотоцикла',
        },
        {
            name: 'Honda',
            cost: 1250000,
            description: 'Описание мотоцикла',
        },
        {
            name: 'Suzuki',
            cost: 1300000,
            description: 'Описание мотоцикла',
        },

    ],
    init() {
        this.display();
        this.buyButtonEvent();
    },

    display() {
        this.allProducts.forEach(good => {
            this.catalog.insertAdjacentHTML('beforeend', this.showAllProducts(good))
        });
    },

    showAllProducts(product) {
        return `<div class="products">
                    <div><b>${product.name}</b></div>
                    <div>${product.cost}</div>
                    <div>${product.description}</div>
                    <button class="buy-it" data-name="${product.name}">Купить</button>
                </div>`
    },

    buyButtonEvent() {
        this.buttonBuy.addEventListener('click', targetClick => this.addProduct(targetClick));
    },

    addProduct(event) {
        if (!event.target.classList.contains('buy-it')) return;
        const prodName = event.target.dataset.name;
        const prodObj = this.allProducts.find((obj) => obj.name === prodName);
        basket.addProductCart(prodObj);
    },

};

const basket = {
    products: [
        {
            name: 'Yamaha',
            cost: 1200000,
            quantity: 2,
        },
        {
            name: 'Цепь',
            cost: 9000,
            quantity: 1,
        },

    ],
    allproducts: document.querySelector('.basket'),
    totalPrice: document.querySelector('.basket-total'),
    clearButton: document.createElement('button'),

    init() {
        this.clearButton.setAttribute('id', 'button-clear')
        document.querySelector('.basket-total').appendChild(this.clearButton);
        this.clearButton.textContent = 'Очистить корзину';
        document.getElementById('button-clear').addEventListener('click', this.basketClear.bind(this));
        this.display();
    },

    showAll(product) {
        return `<div class="products">
                    <div>Наименование: ${product.name}</div>
                    <div>Цена за мотоцикл: ${product.cost}</div>
                    <div>Количество: ${product.quantity}</div>
                </div>`
    },

    display() {
        if (this.products.length) {
            this.products.forEach(good => {
                this.allproducts.insertAdjacentHTML('afterbegin', this.showAll(good));
            });
            this.totalPrice.insertAdjacentHTML('beforeend',
                `Всего покупок: <b>${this.amountOfGoods()}</b> <br> на сумму: <b>${this.totalCost()}</b>`

            );

            this.clearButton.setAttribute('id', 'button-clear')
            document.querySelector('.basket-total').appendChild(this.clearButton);
            this.clearButton.textContent = 'Очистить корзину';
        } else {
            this.allproducts.textContent = "В корзине нет покупок";
        }

    },

    totalCost() {
        return this.products.reduce(function (total, basketItem) {
            return total + basketItem.cost * basketItem.quantity
        }, 0);
    },

    amountOfGoods() {
        return this.products.reduce(function (total, basketItem) {
            return total + basketItem.quantity
        }, 0);
    },

    addProductCart(obj) {
        const prodInCart = this.products.find((product) => obj.name === product.name);
        if (prodInCart) {
            prodInCart.quantity++;
        } else {
            this.products.push({ ...obj, quantity: 1 });
        }
        this.allproducts.innerHTML = ''
        this.totalPrice.innerHTML = ''
        this.display();
    },

    basketClear() {
        this.products = [];
        this.totalPrice.innerHTML = ''
        this.display();
    },
}
catalog.init();
basket.init();