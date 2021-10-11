document.addEventListener('DOMContentLoaded', () => {
    //card options

    const cardArray =[
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'white',
            img: 'images/white.png'
        },
        
    ]


    const grid = document.querySelector('.grid')

    function createBorad() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('date-id', i)
            //card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }


})