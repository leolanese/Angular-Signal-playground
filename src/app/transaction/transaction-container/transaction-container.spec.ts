import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionContainerComponent } from './transaction-container.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('TransactionContainerComponent', () => {
  let component: TransactionContainerComponent;
  let fixture: ComponentFixture<TransactionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      declarations: [TransactionContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch filtered transactions when fetchFilteredTransactions is called', () => {
    const status = 'COMPLETED';
    const date = '2024-03-20';

    component.selectedStatus = status;
    component.selectedDate = new Date(date);

    component.fetchFilteredTransactions();

    expect(component.ParentTransactions.length).toBeGreaterThan(0);
  });
});
