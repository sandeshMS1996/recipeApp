import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropDown]',
  exportAs: 'appDropDown'
})
export class DropDownDirective {
  @HostBinding('class.show') isOpen = false;
  @HostListener('click') toggleOpen(): void {
    console.log('isting direcive');
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
  constructor() { }
}
