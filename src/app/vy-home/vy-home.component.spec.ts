import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VyHomeComponent } from './vy-home.component';

describe('VyHomeComponent', () => {
  let component: VyHomeComponent;
  let fixture: ComponentFixture<VyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VyHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
