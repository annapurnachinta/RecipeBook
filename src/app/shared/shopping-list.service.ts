import { EventEmitter} from '@angular/core';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
    // ingredientChanged = new EventEmitter<Ingredient[]>();
    ingredientChanged = new Subject<Ingredient[]>();
    startEditing = new Subject<number>();
    

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 15),
    ];

    getIngredients() {
        return this.ingredients.slice()
    }

    getIngredient(index: number) {
        return this.ingredients[index]
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        // this.ingredientChanged.emit(this.ingredients.slice())
        this.ingredientChanged.next(this.ingredients.slice())

    }

    addIngredients(ingredient: Ingredient[]){
        this.ingredients.push(...ingredient);
        // this.ingredientChanged.emit(this.ingredients.slice())
        this.ingredientChanged.next(this.ingredients.slice())
    }

    updateIngredient(index:number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice()) 
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice())
    }
}