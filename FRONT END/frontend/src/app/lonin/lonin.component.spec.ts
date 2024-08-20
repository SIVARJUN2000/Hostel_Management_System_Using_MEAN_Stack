import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoninComponent } from './lonin.component';

describe('LoninComponent', () => {
  let component: LoninComponent;
  let fixture: ComponentFixture<LoninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
