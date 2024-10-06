document.addEventListener('DOMContentLoaded', () => {
    //list all card options
    const cardArray = [
      {
        name: 'fries',
        img: 'Images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'Images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'Images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'Images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'Images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'Images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'Images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'Images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'Images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'Images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'Images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'Images/hotdog.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('#grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'Images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'Images/blank.png')
        cards[optionTwoId].setAttribute('src', 'Images/blank.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'Images/white.png')
        cards[optionTwoId].setAttribute('src', 'Images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'Images/blank.png')
        cards[optionTwoId].setAttribute('src', 'Images/blank.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })