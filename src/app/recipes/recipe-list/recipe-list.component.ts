import { Recipe } from '../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSeleted = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/09/Deviled-Eggs-7-1.jpg'),
    new Recipe('Another Test Recipe', 'This is simple a test', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/09/Deviled-Eggs-7-1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSeleted.emit(recipe)
  }

}
