(function() {
	var app = angular.module('recipeBook', []);

	app.controller('RecipeController',function(){
		this.products = dinnerRecipes;
	});

	var dinnerRecipes = [

	{
		name: 'Honey Pork Belly',
		ingredients: 'Pork Belly, Honey, Soy Sauce',
		picture: '',
	},
	{
		name: 'Teriyaki Chicken Wings',
		ingredients: 'Chicken wings, Teriyaki Sauce',
		picture: '',
	},
	
	]

})();
