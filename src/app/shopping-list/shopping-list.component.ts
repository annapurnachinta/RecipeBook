import { ShoppingListService } from './../shared/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy{
    ingredients: Ingredient[] = [];
    private subcribeEnd: Subscription 

    constructor(private slService: ShoppingListService){}

    ngOnInit(){
        this.ingredients = this.slService.getIngredients()
        this.subcribeEnd = this.slService.ingredientChanged.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        )
    }

    ngOnDestroy(){
        this.subcribeEnd.unsubscribe();
    }
}