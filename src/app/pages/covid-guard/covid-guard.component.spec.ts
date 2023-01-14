import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidGuardComponent } from './covid-guard.component';

describe('CovidGuardComponent', () => {
  let component: CovidGuardComponent;
  let fixture: ComponentFixture<CovidGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
