import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownLabel } from './dropdown-label';

describe('DropdownLabel', () => {
  let component: DropdownLabel;
  let fixture: ComponentFixture<DropdownLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownLabel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownLabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
