import { Recipe } from './../recipes/recipe.model';
import { ShoppingListService } from './shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{

    // recipeSelected = new EventEmitter<Recipe>();
    // recipeSelected = new Subject<Recipe>();

    recipeChanged = new Subject<Recipe[]>();


    // recipes: Recipe[] = [
    //     new Recipe('A Test Recipe', 
    //     'This is simple a test', 
    //     'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/09/Deviled-Eggs-7-1.jpg',
    //     [
    //         new Ingredient('meat', 1),
    //         new Ingredient('frence fries', 10)
    //     ]),
    //     new Recipe('Another Test Recipe', 
    //     'This is simple a test', 
    //     'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/09/Deviled-Eggs-7-1.jpg',
    //     [
    //         new Ingredient('burger', 11),
    //         new Ingredient('bread', 2)
    //     ])
    //   ];

    private recipes : Recipe [] = [];

      constructor(private slService: ShoppingListService){}

      setRecipes(recipe: Recipe[]){
        this.recipes = recipe;
        this.recipeChanged.next(this.recipes.slice())
      }

      getRecipes(){
          return this.recipes.slice();
      }

      getId(index: number){
          return this.recipes[index];
      }

      addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice())
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice())
      }

      deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice())
      }



}