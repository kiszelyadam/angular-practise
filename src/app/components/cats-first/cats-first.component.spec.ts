import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsFirstComponent } from './cats-first.component';

describe('CatsFirstComponent', () => {
  let component: CatsFirstComponent;
  let fixture: ComponentFixture<CatsFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatsFirstComponent]
    });
    fixture = TestBed.createComponent(CatsFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
