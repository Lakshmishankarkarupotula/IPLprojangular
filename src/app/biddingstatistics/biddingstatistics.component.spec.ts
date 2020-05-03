import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingstatisticsComponent } from './biddingstatistics.component';

describe('BiddingstatisticsComponent', () => {
  let component: BiddingstatisticsComponent;
  let fixture: ComponentFixture<BiddingstatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingstatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
