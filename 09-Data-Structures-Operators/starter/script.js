'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  ingredient: function (ing1, ing2, ing3) {
    console.log(`Let get the ingredient of menu ${ing1}, ${ing2}, ${ing3}`)
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


const oldArr = ['olusola', 'David', 'Eagle']
const newArr = [...oldArr, 'Ibukunoluwa', 'Hannah']

const mergeArr = [...oldArr, ...newArr]
console.log(mergeArr)

const str = oldArr[0]
const letter = [...str]
console.log(letter)


// const ingredients = [
//   prompt('The pasta ingridient1'),
//   prompt('ingrdient2'),
//   prompt('ingrdient3')
// ]

//console.log(restaurant.ingredient(...ingredients));


  console.log(false || undefined)
  console.log(null || undefined)