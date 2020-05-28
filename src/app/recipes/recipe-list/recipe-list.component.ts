import { Subscription } from 'rxjs';
import { RecipeService } from './../../shared/recipe.service';
import { Recipe } from '../recipe.model';
import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit , OnDestroy {
  @Output() recipes: Recipe[];
  subscription: Subscription

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipe: Recipe[]) => {
        this.recipes = recipe;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
