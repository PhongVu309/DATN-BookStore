import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCategoriesComponent } from './group-categories.component';

describe('GroupCategoriesComponent', () => {
  let component: GroupCategoriesComponent;
  let fixture: ComponentFixture<GroupCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
