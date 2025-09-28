import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSpacer } from './sidebar-spacer';

describe('SidebarSpacer', () => {
  let component: SidebarSpacer;
  let fixture: ComponentFixture<SidebarSpacer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarSpacer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSpacer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
