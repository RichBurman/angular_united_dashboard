import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniLeagueTable } from './mini-league-table';

describe('MiniLeagueTable', () => {
  let component: MiniLeagueTable;
  let fixture: ComponentFixture<MiniLeagueTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniLeagueTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniLeagueTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
