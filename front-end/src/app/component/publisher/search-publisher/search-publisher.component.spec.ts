import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPublisherComponent } from './search-publisher.component';

describe('SearchPublisherComponent', () => {
  let component: SearchPublisherComponent;
  let fixture: ComponentFixture<SearchPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPublisherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
