import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsThirdComponent } from './cats-third.component';

describe('CatsThirdComponent', () => {
  let component: CatsThirdComponent;
  let fixture: ComponentFixture<CatsThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatsThirdComponent]
    });
    fixture = TestBed.createComponent(CatsThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
