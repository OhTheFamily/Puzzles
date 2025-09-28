import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLabel } from './sidebar-label';

describe('SidebarLabel', () => {
  let component: SidebarLabel;
  let fixture: ComponentFixture<SidebarLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarLabel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarLabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
