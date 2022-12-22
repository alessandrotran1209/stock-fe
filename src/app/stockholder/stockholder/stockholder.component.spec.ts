import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockholderComponent } from './stockholder.component';

describe('StockholderComponent', () => {
  let component: StockholderComponent;
  let fixture: ComponentFixture<StockholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
