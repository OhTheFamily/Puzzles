import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDivider } from './dropdown-divider';

describe('DropdownDivider', () => {
  let component: DropdownDivider;
  let fixture: ComponentFixture<DropdownDivider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownDivider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownDivider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
