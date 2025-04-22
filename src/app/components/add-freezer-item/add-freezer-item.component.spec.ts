import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFreezerItemComponent } from './add-freezer-item.component';

describe('AddFreezerItemComponent', () => {
  let component: AddFreezerItemComponent;
  let fixture: ComponentFixture<AddFreezerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFreezerItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFreezerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
