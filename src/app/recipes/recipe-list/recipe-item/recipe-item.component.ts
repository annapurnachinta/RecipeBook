import { RecipeService } from './../../../shared/recipe.service';
import { Recipe } from '../../recipe.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent{
    @Input() recipe: Recipe;

    constructor(private recipeSelect: RecipeService){}

    onSelected(){
        this.recipeSelect.recipeSelected.emit(this.recipe)
    }

}