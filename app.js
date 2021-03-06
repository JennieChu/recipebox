(function() {
	var app = angular.module('recipeBook', []);

	app.controller('BrunchRecipeController', function(){
		this.products = brunchRecipes;
	});

	var brunchRecipes = [
	{
		name:'',
		ingredients: '',
		images: ""
	},

	]

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
	
	];

	app.controller('DessertRecipeController', function(){
		this.products = dessertRecipes;
	});

	var dessertRecipes = [
	{
		name: 'Cocoa Brownies',
		ingredients: 'Dutch Cocoa Powder, Sugar, Vanilla Extrat, Flour, Eggs',
		images: "images/brownies.jpg",
		
	},

	];

})();
