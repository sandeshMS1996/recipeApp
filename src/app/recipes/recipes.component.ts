import {Component, OnInit} from '@angular/core';
import {RecipesModel} from './Recipes.model';
import {RecipeListService} from './recipe-list.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeListService]
})
export class RecipesComponent implements OnInit {
  myRecipe: RecipesModel;
  constructor(private recipeService: RecipeListService) { }
  ngOnInit(): void {
    this.recipeService.RecipeSelected.subscribe((recipe: RecipesModel) => {
      // console.log(recipe);
      this.myRecipe = recipe;
    });
  }

}
