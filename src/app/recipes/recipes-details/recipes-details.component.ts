import {Component, Input, OnInit} from '@angular/core';
import {RecipesModel} from '../Recipes.model';
import {RecipeListService} from '../recipe-list.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  @Input() selectedRecipe: RecipesModel;
  constructor(private recipeService: RecipeListService) { }

  ngOnInit(): void {
  }

  onAddToRecipeList(): void {
    this.recipeService.addRecipeToShoppingList(this.selectedRecipe.ingredients);
  }
}
