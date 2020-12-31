import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipesModel} from '../../Recipes.model';
import {RecipeListService} from '../../recipe-list.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  constructor(private recipeService: RecipeListService) { }
  @Input() Parentrecipes: RecipesModel;
  /*@Output() detailedRecipe =  new EventEmitter<void>();
  */ngOnInit(): void {
    console.log('Recipes-item');
  }
  RecipeDescription(recipe: RecipesModel): void {
    /*this.detailedRecipe.emit();*/
    this.recipeService.RecipeSelected.emit(this.Parentrecipes);
  }
}
