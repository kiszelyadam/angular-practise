import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[attribute]'
})
export class AttributeDirective {
@HostBinding('class') background = 'background';
@HostListener('mouseenter') onMouseEnter() {
  this.changeYellow('yellow');
}
@HostListener('mouseleave') onMouseLeave() {
  this.changeYellow('white');
}


  constructor(
    private readonly el: ElementRef
  ) {}

  changeYellow(color: string) {
    this.el.nativeElement.style.background = color;
  }

}
