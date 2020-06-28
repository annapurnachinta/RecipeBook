import { Ingredient } from './ingredient.model';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';


export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipe(){
        const recipe = this.recipeService.getRecipes();
        return this.http.put('https://recipebook-a60e4.firebaseio.com/recipes.json',
        recipe).subscribe(response => {
            console.log(response)
        })
    }

    fetchRecipe(){
        return this.http.get<Recipe[]>('https://recipebook-a60e4.firebaseio.com/recipes.json')
        .pipe(map(recipes => {
            return recipes.map(recipe =>{
                return {
                    ...recipe, ingredients: recipe. ingredients? recipe.ingredients : []
                };
            });
        }),
        tap(recipes => {
            this.recipeService.setRecipes(recipes);
        }))
    }

}