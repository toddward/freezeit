import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezerContentsComponent } from './freezer-contents.component';

describe('FreezerContentsComponent', () => {
  let component: FreezerContentsComponent;
  let fixture: ComponentFixture<FreezerContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreezerContentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreezerContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
