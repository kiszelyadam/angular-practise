import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsSecondComponent } from './cats-second.component';

describe('CatsSecondComponent', () => {
  let component: CatsSecondComponent;
  let fixture: ComponentFixture<CatsSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatsSecondComponent]
    });
    fixture = TestBed.createComponent(CatsSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
