import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastResult } from './last-result';

describe('LastResult', () => {
  let component: LastResult;
  let fixture: ComponentFixture<LastResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
