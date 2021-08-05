document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'pretzel',
            img: 'images/pretzel.png'
        },
        {
            name: 'cheese',
            img: 'images/cheese.png'
        },
        {
            name: 'cherry',
            img: 'images/cherry.png'
        },
        {
            name: 'chocolate',
            img: 'images/chocolate.png'
        },
        {
            name: 'naan',
            img: 'images/naan.png'
        },
        {
            name: 'taco',
            img: 'images/taco.png'
        },
        {
            name: 'pretzel',
            img: 'images/pretzel.png'
        },
        {
            name: 'cheese',
            img: 'images/cheese.png'
        },
        {
            name: 'cherry',
            img: 'images/cherry.png'
        },
        {
            name: 'chocolate',
            img: 'images/chocolate.png'
        },
        {
            name: 'naan',
            img: 'images/naan.png'
        },
        {
            name: 'taco',
            img: 'images/taco.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //board creation
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/square.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    function checkForMatches() {
        var cards = document.querySelectorAll('img')
        const optionOne = cardsChosenId[0]
        const optionTwo = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]){
            alert('Found a Match')
            cards[optionOne].setAttribute('src', 'images/star.png')
            cards[optionTwo].setAttribute('src', 'images/star.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOne].setAttribute('src', 'images/square.png')
            cards[optionTwo].setAttribute('src', 'images/square.png')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length

        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congrats!'
        }
    }


    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if (cardsChosen.length === 2){
            setTimeout(checkForMatches, 500)
        }
    }


createBoard();


})