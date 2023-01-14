import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnamicFormComponent } from './dnamic-form.component';

describe('DnamicFormComponent', () => {
  let component: DnamicFormComponent;
  let fixture: ComponentFixture<DnamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnamicFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
