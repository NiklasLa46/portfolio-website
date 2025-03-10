import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowSectionComponent } from './arrow-section.component';

describe('ArrowSectionComponent', () => {
  let component: ArrowSectionComponent;
  let fixture: ComponentFixture<ArrowSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
