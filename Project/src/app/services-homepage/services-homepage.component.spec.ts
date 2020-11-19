import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesHomepageComponent } from './services-homepage.component';

describe('ServicesHomepageComponent', () => {
  let component: ServicesHomepageComponent;
  let fixture: ComponentFixture<ServicesHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
