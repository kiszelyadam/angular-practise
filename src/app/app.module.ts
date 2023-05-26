import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatsFirstComponent } from './components/cats-first/cats-first.component';
import { CatsSecondComponent } from './components/cats-second/cats-second.component';
import { CatsThirdComponent } from './components/cats-third/cats-third.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { AttributeDirective } from './directives/attribute.directive';
import { StructuralDirective } from './directives/structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    CatsFirstComponent,
    CatsSecondComponent,
    CatsThirdComponent,
    DogsComponent,
    AttributeDirective,
    StructuralDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
