import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatewisedataComponent } from './statewisedata.component';

describe('StatewisedataComponent', () => {
  let component: StatewisedataComponent;
  let fixture: ComponentFixture<StatewisedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatewisedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatewisedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
