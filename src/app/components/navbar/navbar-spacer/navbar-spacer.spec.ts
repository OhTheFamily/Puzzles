import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSpacer } from './navbar-spacer';

describe('NavbarSpacer', () => {
  let component: NavbarSpacer;
  let fixture: ComponentFixture<NavbarSpacer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarSpacer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSpacer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
