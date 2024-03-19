import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VyNavComponent } from './vy-nav.component';

describe('VyNavComponent', () => {
  let component: VyNavComponent;
  let fixture: ComponentFixture<VyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VyNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
