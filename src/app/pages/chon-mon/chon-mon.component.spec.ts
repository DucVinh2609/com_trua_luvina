import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChonMonComponent } from './chon-mon.component';

describe('ChonMonComponent', () => {
  let component: ChonMonComponent;
  let fixture: ComponentFixture<ChonMonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChonMonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChonMonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
