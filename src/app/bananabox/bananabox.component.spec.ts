import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BananaboxComponent } from './bananabox.component';

describe('BananaboxComponent', () => {
  let component: BananaboxComponent;
  let fixture: ComponentFixture<BananaboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BananaboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BananaboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
