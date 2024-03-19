import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VySideComponent } from './vy-side.component';

describe('VySideComponent', () => {
  let component: VySideComponent;
  let fixture: ComponentFixture<VySideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VySideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VySideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
