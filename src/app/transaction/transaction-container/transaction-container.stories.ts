import { TransactionContainerComponent } from './transaction-container.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';
import { ApiTransactionService } from './../../services/api-transaction.service';
import { MockTransactionData } from '../../models/mocks/mockTransactions';
import { HttpClientModule } from '@angular/common/http';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

export default {
  title: 'Components/vy-transaction-container',
  component: TransactionContainerComponent,
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
  }
} as Meta<TransactionContainerComponent>;

type MyComponentStory = StoryObj<TransactionContainerComponent>;
const Template: MyComponentStory = {
  args: {},
};

export const Default: MyComponentStory = {
  ...Template,
  args: {},
};