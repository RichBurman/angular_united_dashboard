import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPosts } from './latest-posts';

describe('LatestPosts', () => {
  let component: LatestPosts;
  let fixture: ComponentFixture<LatestPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestPosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestPosts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
