import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTheaterComponent } from './show-theater.component';

describe('ShowTheaterComponent', () => {
  let component: ShowTheaterComponent;
  let fixture: ComponentFixture<ShowTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTheaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
