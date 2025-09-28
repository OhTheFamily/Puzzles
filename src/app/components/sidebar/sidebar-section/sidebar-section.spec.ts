import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSection } from './sidebar-section';

describe('SidebarSection', () => {
  let component: SidebarSection;
  let fixture: ComponentFixture<SidebarSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
