(function() {
	var app = angular.module('recipeBook', []);

	app.controller('DinnerRecipeController',function(){
		this.products = dinnerRecipes;
	});

	var dinnerRecipes = [

	{
		name: 'Honey Pork Belly',
		ingredients: 'Pork Belly, Honey, Soy Sauce',
		images: "images/honeyporkbelly.jpg",
		
	},
	{
		name: 'Teriyaki Chicken Wings',
		ingredients: 'Chicken wings, Teriyaki Sauce',
		images: "images/teriyakichicken.jpg",
	},
	{
		name: 'Panko Baked Chicken Thighs',
		ingredients: 'Chicken thighs, Panko, Milk, Flour, Eggs',
		images: "images/pankochicken.jpg",
	},
	
	]

})();
