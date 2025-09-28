import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBody } from './sidebar-body';

describe('SidebarBody', () => {
  let component: SidebarBody;
  let fixture: ComponentFixture<SidebarBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
