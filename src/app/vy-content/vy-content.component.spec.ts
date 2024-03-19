import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VyContentComponent } from './vy-content.component';

describe('VyContentComponent', () => {
  let component: VyContentComponent;
  let fixture: ComponentFixture<VyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VyContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
