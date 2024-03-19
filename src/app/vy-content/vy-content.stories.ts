import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { VyContentComponent } from './vy-content.component';
import { StoryObj, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ApiTransactionService } from './../services/api-transaction.service';
import { MockTransactionData } from '../models/mocks/mockTransactions';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Components/vy-Content',
  component: VyContentComponent,
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

} as Meta<VyContentComponent>;

type MyComponentStory = StoryObj<VyContentComponent>;
const Template: MyComponentStory = {
  args: {},
};

export const Default: MyComponentStory = {
  ...Template,
  args: {},
};