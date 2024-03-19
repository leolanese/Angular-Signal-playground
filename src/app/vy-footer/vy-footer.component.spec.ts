import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VyFooterComponent } from './vy-footer.component';

describe('VyFooterComponent', () => {
  let component: VyFooterComponent;
  let fixture: ComponentFixture<VyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VyFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
