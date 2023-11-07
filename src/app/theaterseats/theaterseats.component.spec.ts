import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterseatsComponent } from './theaterseats.component';

describe('TheaterseatsComponent', () => {
  let component: TheaterseatsComponent;
  let fixture: ComponentFixture<TheaterseatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheaterseatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheaterseatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
