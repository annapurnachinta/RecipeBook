import { EventEmitter} from '@angular/core';
import { Ingredient } from './ingredient.model';

export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 15),
    ];

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientChanged.emit(this.ingredients.slice())
    }

    addIngredients(ingredient: Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientChanged.emit(this.ingredients.slice())
    }
}