import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEntpComponent } from './about-entp.component';

describe('AboutEntpComponent', () => {
  let component: AboutEntpComponent;
  let fixture: ComponentFixture<AboutEntpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEntpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEntpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
