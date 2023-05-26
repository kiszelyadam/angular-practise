import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[structural]'
})
export class StructuralDirective implements OnChanges {

  @Input('structural') specialDog = '';
  @Input('structuralDogLength') public dogLength!: number;
  @Input('structuralFirstDogCharacter') public firstDogCharacter!: string;

  constructor(
    private readonly tpl: TemplateRef<any>,
    private readonly vcr: ViewContainerRef,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.vcr.clear();
    this.hideSpecialDog(this.specialDog)
  }

  hideSpecialDog(dog: string): void {
    if (this.firstDogCharacter === 'h') {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }

}
