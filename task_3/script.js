'use strict';

const Basket = {
    goods: [
        {
            id_product: 123,
            product_name: "Ноутбук",
            price: 40000,
            quantity: 2
        },
        {
            id_product: 456,
            product_name: "Мышка",
            price: 1000,
            quantity: 4
        }
    ],

    countBasketPrice() {
        let totalPrice = (beforeTotalPrice, nextTotalPrice) => (beforeTotalPrice.price * beforeTotalPrice.quantity) + (nextTotalPrice.price * nextTotalPrice.quantity);
        return this.goods.reduce(totalPrice);
    }
}


function genButton() {
    document.querySelector('body').insertAdjacentHTML('afterbegin', '<div class="button"><a class="button_text">Корзина</a></div>');
}

function showBasket() {
    document.querySelector('body').insertAdjacentHTML('afterbegin', `<div class="show_basket"></div>`);
    let goodsCount = Basket.goods.length;
    if (goodsCount) {
        document.querySelector('.show_basket').insertAdjacentText('afterbegin', `В корзине: ${goodsCount} товарa(ов) на сумму ${Basket.countBasketPrice()} рублей!`);
    }
    else {
        document.querySelector('.show_basket').insertAdjacentText('afterbegin', 'Корзина пуста!');
    }
}

function showEvent() {
    let basket = document.querySelector('.button_text');
    console.log(basket);
    basket.addEventListener('click', showBasket);
}


genButton();
showEvent();







