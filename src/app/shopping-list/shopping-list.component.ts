import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/Ingredients';
import {ShoppingListService} from './shopping-list.service';
import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [];
  constructor(private shoppingService: ShoppingListService) { }
  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientEmitter.subscribe((ing: Ingredients) => {
      // @ts-ignore
      this.ingredients = ing;
    });
      // console.log(ing);
     // this.shoppingService.addIngredients(ing);
  }
}
