let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active'); 
})

let products = [ 
    {
        id: 1,
        name: 'backpack',
        image: 'backpack.webp',
        price: 698
    },
    {
        id: 2,
        name: 'luggage bag',
        image: 'luggage bag.webp',
        price: 3000
    },
    {
        id: 3,
        name: 'luggage trolly bag',
        image: 'luggage trolly bag.webp',
        price: 3560
    },
    {
        id: 4,
        name: 'medical kit',
        image: 'medical kit.jpg',
        price: 700
    },
    {
        id: 5,
        name: 'sunglass',
        image: 'sunglass.jpg',
        price: 400
    },
    {
        id: 6,
        name: 'Toiletry travel bag',
        image: 'Toiletry travel bag.webp',
        price: 500
    },
    {
        id: 7,
        name: 'trolly bag',
        image: 'trolly bags.webp',
        price: 6000
    },
    {
        id: 8,
        name: 'wallet',
        image: 'wallet.avif',
        price: 350
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="Images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="Images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}