import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPlanetsComponent } from './list-of-planets.component';

describe('ListOfPlanetsComponent', () => {
  let component: ListOfPlanetsComponent;
  let fixture: ComponentFixture<ListOfPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfPlanetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
