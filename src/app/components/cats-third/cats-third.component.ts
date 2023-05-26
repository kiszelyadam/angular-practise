import { Component } from '@angular/core';
import { cats } from 'src/app/mocks/cats';
import { Cats } from 'src/app/types/cats.types';

@Component({
  selector: 'app-cats-third',
  templateUrl: './cats-third.component.html',
  styleUrls: ['./cats-third.component.scss']
})
export class CatsThirdComponent {
  cats: Array<Cats> = cats;
}
