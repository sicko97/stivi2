import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntpAdditInfoComponent } from './entp-addit-info.component';

describe('EntpAdditInfoComponent', () => {
  let component: EntpAdditInfoComponent;
  let fixture: ComponentFixture<EntpAdditInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntpAdditInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntpAdditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
