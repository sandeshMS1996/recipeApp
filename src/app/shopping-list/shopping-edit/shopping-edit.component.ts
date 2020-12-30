import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {Ingredients} from '../../shared/Ingredients';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientsAdded = new EventEmitter<Ingredients>();
  @ViewChild('name', {static: true})nameInputRed: ElementRef;
  @ViewChild('amount', {static: true})amountInputRed: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(): any {
    const name = this.nameInputRed.nativeElement.value;
    const amount = this.amountInputRed.nativeElement.value;
    const ingredients = new Ingredients(name, amount);
    this.ingredientsAdded.emit(ingredients);
  }
}
