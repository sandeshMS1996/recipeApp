import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {RecipesModel} from '../Recipes.model';
import {RecipeListService} from '../recipe-list.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: RecipesModel[] = [];
  /*@Output() ResepiInfo = new EventEmitter<RecipesModel>();*/
  constructor(private recipeService: RecipeListService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  /*OnRecieptofReciepe(reciepe: RecipesModel): void {
    this.ResepiInfo.emit(reciepe);
  }*/

}
