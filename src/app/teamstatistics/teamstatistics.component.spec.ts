import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamstatisticsComponent } from './teamstatistics.component';

describe('TeamstatisticsComponent', () => {
  let component: TeamstatisticsComponent;
  let fixture: ComponentFixture<TeamstatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamstatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
