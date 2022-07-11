import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityAndCategoryComponent } from './commodity-and-category.component';

describe('CommodityAndCategoryComponent', () => {
  let component: CommodityAndCategoryComponent;
  let fixture: ComponentFixture<CommodityAndCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommodityAndCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityAndCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
