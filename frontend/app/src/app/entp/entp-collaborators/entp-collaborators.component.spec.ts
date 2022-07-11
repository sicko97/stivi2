import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntpCollaboratorsComponent } from './entp-collaborators.component';

describe('EntpCollaboratorsComponent', () => {
  let component: EntpCollaboratorsComponent;
  let fixture: ComponentFixture<EntpCollaboratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntpCollaboratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntpCollaboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
