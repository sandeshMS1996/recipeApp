import {Component, Input, OnInit} from '@angular/core';
import {RecipesModel} from './Recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  myRecipe: RecipesModel;
  constructor() { }
  ngOnInit(): void {
  }

}
