import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntpCategoryComponent } from './entp-category.component';

describe('EntpCategoryComponent', () => {
  let component: EntpCategoryComponent;
  let fixture: ComponentFixture<EntpCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntpCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntpCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
