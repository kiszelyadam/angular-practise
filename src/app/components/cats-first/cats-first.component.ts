import { DoCheck, TrackByFunction } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { OnChanges } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterViewInit, SimpleChanges } from '@angular/core';
import { Component, ViewChild, OnInit, Input, HostBinding } from '@angular/core';
import { cats } from 'src/app/mocks/cats';
import { Cats } from 'src/app/types/cats.types';

@Component({
  selector: 'app-cats-first',
  templateUrl: './cats-first.component.html',
  styleUrls: ['./cats-first.component.scss']
})
export class CatsFirstComponent implements
AfterContentInit, AfterContentChecked  {

@ViewChild('cats') public cats!: HTMLElement;
@Input('catType') public type: string = 'sphinx';

@HostBinding('class') public class = 'cats-class';

  timer = 0;
  catsArray: Array<Cats> = cats

    constructor() {
      console.log('constructor inited');
    }

    ngOnInit(): void {

      console.log(this.cats);
      console.log('component inited');
    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      console.log('------------------------------');
    }

    ngAfterViewInit(): void {
      console.log('paragraph template', this.cats);
      console.log('component inited, after')
    }

    ngDoCheck(): void {
      console.log('change detection cicle triggered');
    }

    ngAfterViewChecked(): void {
      console.log('after change detection cicle triggered');
    }

    ngAfterContentInit(): void {
      console.log('after content init')
    }

    ngAfterContentChecked(): void {
      console.log('after content init checked')
    }

    trackBy: TrackByFunction<Cats> = (
      _,
      item: Cats,
    ) => item.id;

}
