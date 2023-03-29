import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedpageComponent } from './featuredpage.component';

describe('FeaturedpageComponent', () => {
  let component: FeaturedpageComponent;
  let fixture: ComponentFixture<FeaturedpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
