import { ShoppingListService } from './shopping-list.service';
import { Recipe } from '../recipes/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is simple a test', 
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/09/Deviled-Eggs-7-1.jpg',
        [
            new Ingredient('meat', 1),
            new Ingredient('frence fries', 10)
        ]),
        new Recipe('Another Test Recipe', 
        'This is simple a test', 
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/09/Deviled-Eggs-7-1.jpg',
        [
            new Ingredient('burger', 11),
            new Ingredient('bread', 2)
        ])
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
      }
}