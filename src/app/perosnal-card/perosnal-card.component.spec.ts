import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerosnalCardComponent } from './perosnal-card.component';

describe('PerosnalCardComponent', () => {
  let component: PerosnalCardComponent;
  let fixture: ComponentFixture<PerosnalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerosnalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerosnalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
