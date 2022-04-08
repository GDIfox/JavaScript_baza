const basket = {
    products: [
        {
            name: 'Yamaha',
            cost: 1200000,
            quantity: 2,
        },
        {
            name: 'Harley-Davidson',
            cost: 1600000,
            quantity: 3,
        },
        {
            name: 'Honda',
            cost: 1250000,
            quantity: 4,
        },
        {
            name: 'Suzuki',
            cost: 1300000,
            quantity: 5,
        },

    ],
    allProducts: document.querySelector('.cart'),
    clearButton: document.createElement('button'),

    init() {
        this.clearButton.setAttribute('id', 'button-clear')
        document.querySelector('.cart').appendChild(this.clearButton);
        this.clearButton.textContent = 'Корзину можно очистить';
        document.getElementById('button-clear').querySelector('.button-clear');
        document.getElementById('button-clear').addEventListener('click', this.cartClear.bind(this));
        this.display();
    },

    showAll(product) {
        return `<div class="products">
                    <div>Наименование: ${product.name}</div>
                    <div>Цена за одно изделие: ${product.cost}</div>
                    <div>Количество: ${product.quantity}</div>
                </div>`
    },

    display() {
        if (this.products.length) {
            this.products.forEach(good => {
                this.allProducts.insertAdjacentHTML('beforeend', this.showAll(good))
            });
            this.allProducts.insertAdjacentHTML('beforeend',
                `Всего товаров: <b>${this.amountOfGoods()}</b> <br> Общей суммой: <b>${this.totalCost()}</b>`
            )
        } else {
            this.allProducts.textContent = "У вас нет покупок";
        }

    },

    totalCost() {
        return this.products.reduce(function (total, cartItem) {
            return total + cartItem.cost * cartItem.quantity
        }, 0);
    },

    amountOfGoods() {
        return this.products.reduce(function (total, cartItem) {
            return total + cartItem.quantity
        }, 0);
    },

    cartClear() {
        this.products = [];
        this.display();
    },
}
basket.init();