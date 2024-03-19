import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { TransactionListComponent } from './transaction-list.component';
import { StoryObj, Meta } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiTransactionService } from './../../services/api-transaction.service';
import { MockTransactionData } from './../../models/mocks/mockTransactions'; 
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Components/vy-transaction-list',
  component: TransactionListComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(HttpClientModule),
      ],
    }),
  ],
  moduleMetadata: {
    imports: [CommonModule, HttpClientModule],
    providers: [
      { provide: ApiTransactionService, useClass: MockTransactionData } 
    ],
    declarations: [
      TransactionListComponent
    ],
  }
} as Meta<TransactionListComponent>;

type MyComponentStory = StoryObj<TransactionListComponent>;
const Template: MyComponentStory = {
  args: {},
};

export const Default: MyComponentStory = {
  ...Template,
  args: {},
};
