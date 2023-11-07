import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittheaterComponent } from './edittheater.component';

describe('EdittheaterComponent', () => {
  let component: EdittheaterComponent;
  let fixture: ComponentFixture<EdittheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittheaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
