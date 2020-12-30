import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/Ingredients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('salt', 10.5),
    new Ingredients('sugar', 45)
    ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientsAdded(ingredient: Ingredients): void {
    this.ingredients.push(ingredient);
  }
}
