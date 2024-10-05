const cardArray = [
    {
       name: 'fries',
       img: 'Images/fries.png',
    },
    {
        name:'cheeseburger',
        img: 'Images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img: 'Images/hotdog.png',
    },
    { 
       name:'ice-cream',
       img:'Images/ice-cream.png',

    },
    {
        name:'milkshake',
        img:'Images/milkshake.png',

    },
    {
        name:'pizza',
        img:'Images/pizza.png',

    },

    {
        name: 'fries',
        img: 'Images/fries.png',
     },
     {
         name:'cheeseburger',
         img: 'Images/cheeseburger.png',
     },
     {
         name:'hotdog',
         img: 'Images/hotdog.png',
     },
     { 
        name:'ice-cream',
        img:'Images/ice-cream.png',
 
     },
     {
         name:'milkshake',
         img:'Images/milkshake.png',
 
     },
     {
         name:'pizza',
         img:'Images/pizza.png',
 
     },
]

cardArray.sort(()=> 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid');


function createBoard () {
  for (let i = 0; i < 10; i++) {
   const card = document.createElement('img')
   card.setAttribute('src', 'Images/blank.png')
   card.setAttribute('data-id', i)
   gridDisplay.append(card)
  }
}
createBoard()