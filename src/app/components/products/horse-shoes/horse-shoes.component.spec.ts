import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseShoesComponent } from './horse-shoes.component';

describe('HorseShoesComponent', () => {
  let component: HorseShoesComponent;
  let fixture: ComponentFixture<HorseShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorseShoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
