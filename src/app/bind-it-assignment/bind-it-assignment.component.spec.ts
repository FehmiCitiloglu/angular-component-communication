import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindItAssignmentComponent } from './bind-it-assignment.component';

describe('BindItAssignmentComponent', () => {
  let component: BindItAssignmentComponent;
  let fixture: ComponentFixture<BindItAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindItAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindItAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
