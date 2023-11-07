import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterbookingComponent } from './theaterbooking.component';

describe('TheaterbookingComponent', () => {
  let component: TheaterbookingComponent;
  let fixture: ComponentFixture<TheaterbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheaterbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheaterbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
