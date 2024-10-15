 async function gitPizza(){

const responce= await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');

const data =await responce.json();
console.log(data);
const recipes = data.recipes;

const result= recipes.map(function(pizza){

return `
<div class="element">
<h2>${pizza.title}</h2>
<div class="images" >
<img src="${pizza.image_url}" alt="${pizza.title}"  >
</div>
</div>
`;




}).join('');

document.querySelector( ".row").innerHTML += result; 

}



gitPizza();

