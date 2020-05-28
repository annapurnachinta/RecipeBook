import { Ingredient } from './../../shared/ingredient.model';
import { RecipeService } from './../../shared/recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  // using route
   recipe: Recipe;
   id: number;


  constructor(private recipeService: RecipeService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.recipe = this.recipeService.getId(this.id)
      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }

}
