import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittheatermovieComponent } from './edittheatermovie.component';

describe('EdittheatermovieComponent', () => {
  let component: EdittheatermovieComponent;
  let fixture: ComponentFixture<EdittheatermovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittheatermovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittheatermovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
