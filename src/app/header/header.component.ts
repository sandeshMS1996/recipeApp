import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelector =  new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  Onselect(recipes: string): void {
    this.featureSelector.emit(recipes);
  }
}
