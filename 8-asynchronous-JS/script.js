/******************************************************************************
 *                   Lecture 120 - Example of Async JS
 *****************************************************************************/

// const first = () => {
//   console.log('Hey there');
//   second();
//   console.log('The end');
// }

// const second = () => {
//   setTimeout(() => {
//     console.log('Async: Hey there');
//   }, 2000);
// }

// first();

/******************************************************************************
 *                 Lecture 122 - Async JS w/Callbacks
 *****************************************************************************/

//  // Simulate getting recipe IDs from server, select a recipe, then get recipe from server
//  function getRecipe() {
//   setTimeout(() => {
//     const recipeId = [523, 883, 432, 974];
//     console.log(recipeId);

//     setTimeout((id) => {
//       const recipe ={
//         title: 'Fresh tomato pasta',
//         publisher: 'Jonas'
//       };
//       console.log(`Id: ${id}, Title: ${recipe.title}`);
//     }, 1000, recipeId[2]);
//   }, 1500);
//  }

//  getRecipe();

/******************************************************************************
 *            Lecture 123 - From Callback Hell to Promises
 *****************************************************************************/

//  const getIds = new Promise((resolve, reject) => {
//    setTimeout(() => {
//     resolve([523, 883, 432, 974]);
//     // reject();
//    }, 1500);
//  })

//  const getRecipe = recId => {
//   return new Promise((resolve, reject) => {
//     setTimeout(id => {
//       const recipe = {
//         title: 'Fresh tomato pasta',
//         publisher: 'Jonas'
//       };
//       resolve(`Id: ${id}, Title: ${recipe.title}`);
//     }, 1500, recId);
//   });
// };

// const getRelated = publisher => {
//   return new Promise((resolve, reject) => {
//     setTimeout((pub) => {
//       const recipe = {
//         title: 'Italian Pizza',
//         publisher: 'Jonas'
//       };
//       resolve(`${pub}, ${recipe.title}`);
//     }, 1500, publisher);
//   })
// }

//getIds
// .then( Ids => {
//   console.log(Ids);
//   return getRecipe(Ids[2]);
// })
// .then(recipe => {
//   console.log(recipe);
//   return getRelated('Jonas');
// })
// .then(recipe => {
//   console.log(recipe);  
// })
// .catch(() => {
//   console.log('Error!!!');
// })

/******************************************************************************
 *            Lecture 124 - From Promises to Async/Await
 *****************************************************************************/

//  // ES8 Introduces Async/Await

// const getIds = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([523, 883, 432, 974]);
//     // reject();
//    }, 1500);
//  })

// const getRecipe = recId => {
//   return new Promise((resolve, reject) => {
//     setTimeout(id => {
//       const recipe = {
//         title: 'Fresh tomato pasta',
//         publisher: 'Jonas'
//       };
//       resolve(`${id}: ${recipe.title}`);
//     }, 1500, recId);
//   });
// };

// const getRelated = publisher => {
//   return new Promise((resolve, reject) => {
//     setTimeout((pub) => {
//       const recipe = {
//         title: 'Italian Pizza',
//         publisher: 'Jonas'
//       };
//       resolve(`${pub}, ${recipe.title}`);
//     }, 1500, publisher);
//   })
// }

// async function getRecipesAW(){
//   const ids = await getIds;
//   console.log(ids);
//   const recipe = await getRecipe(ids[2]);
//   console.log(recipe);
//   const related = await getRelated('Jonas');
//   console.log(related);
//   return recipe;
// }
// getRecipesAW().then((result) => {
//   console.log(`${result} is the best ever!`);
// })

// console.log('Hey there!');

/******************************************************************************
 *         Lecture 126 - Making AJAX Calls w/Fetch + Promises
 *****************************************************************************/

//  function getWeather(woeid){
//   fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
//   .then((result) => {
//     return result.json();
//   })
//   .then((result) => {
//     console.log(`It is currently ${result.consolidated_weather[0].the_temp} degrees in ${result.title}`)
//   })
//   .catch((result) => {
//     console.log(result);
//   })
// }

// getWeather(2487956);
// getWeather(44418);

async function getWeather(woeid){
  const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
  const json = await result.json();
  console.log(`It is currently ${json.consolidated_weather[0].the_temp} degrees in ${json.title}`);
}

getWeather(2487956);
getWeather(44418);