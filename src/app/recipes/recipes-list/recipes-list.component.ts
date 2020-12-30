import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {RecipesModel} from '../Recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: RecipesModel[] = [
    new RecipesModel( 'first recipe', 'first recipe Description', 'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg'),
    new RecipesModel('second Recipe', 'second-recipe description', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563')
  ];
  @Output() ResepiInfo = new EventEmitter<RecipesModel>();
  constructor() { }

  ngOnInit(): void {
  }
  OnRecieptofReciepe(reciepe: RecipesModel): void {
    this.ResepiInfo.emit(reciepe);
  }

}
