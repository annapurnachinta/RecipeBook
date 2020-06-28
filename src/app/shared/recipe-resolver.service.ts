import { RecipeService } from './recipe.service';
import { DataStorageService } from './data-storage.service';
import { Recipe } from './../recipes/recipe.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]>{
    constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const recipes = this.recipeService.getRecipes();

        if(recipes.length === 0){
        return this.dataStorageService.fetchRecipe();
        }else{
            return recipes;
        }
    }
}
