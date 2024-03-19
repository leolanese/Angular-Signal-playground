import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VyHeaderComponent } from './vy-header.component';

describe('VyHeaderComponent', () => {
  let component: VyHeaderComponent;
  let fixture: ComponentFixture<VyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VyHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
