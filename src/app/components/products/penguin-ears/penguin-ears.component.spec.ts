import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenguinEarsComponent } from './penguin-ears.component';

describe('PenguinEarsComponent', () => {
  let component: PenguinEarsComponent;
  let fixture: ComponentFixture<PenguinEarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenguinEarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenguinEarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
