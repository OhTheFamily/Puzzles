import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHeading } from './sidebar-heading';

describe('SidebarHeading', () => {
  let component: SidebarHeading;
  let fixture: ComponentFixture<SidebarHeading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarHeading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarHeading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
