import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacrionsComponent } from './transacrions.component';

describe('TransacrionsComponent', () => {
  let component: TransacrionsComponent;
  let fixture: ComponentFixture<TransacrionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransacrionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacrionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
