import {Component, Input, OnInit} from '@angular/core';
import {RecipesModel} from '../Recipes.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  @Input() selectedRecipe: RecipesModel;
  constructor() { }

  ngOnInit(): void {
  }

}
