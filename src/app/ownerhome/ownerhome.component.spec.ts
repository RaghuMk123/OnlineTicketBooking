import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerhomeComponent } from './ownerhome.component';

describe('OwnerhomeComponent', () => {
  let component: OwnerhomeComponent;
  let fixture: ComponentFixture<OwnerhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
