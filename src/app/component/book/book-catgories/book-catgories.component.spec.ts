import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCatgoriesComponent } from './book-catgories.component';

describe('BookCatgoriesComponent', () => {
  let component: BookCatgoriesComponent;
  let fixture: ComponentFixture<BookCatgoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCatgoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCatgoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
