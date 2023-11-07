import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittheaterdetailComponent } from './edittheaterdetail.component';

describe('EdittheaterdetailComponent', () => {
  let component: EdittheaterdetailComponent;
  let fixture: ComponentFixture<EdittheaterdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittheaterdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittheaterdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
