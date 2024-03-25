import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5ModelsComponent } from './html5-models.component';

describe('Html5ModelsComponent', () => {
  let component: Html5ModelsComponent;
  let fixture: ComponentFixture<Html5ModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Html5ModelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Html5ModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
