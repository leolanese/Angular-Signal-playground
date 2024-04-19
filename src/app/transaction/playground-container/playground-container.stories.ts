import { PlaygroundContainerComponent } from './playground-container.component';
import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';
import { ApiTransactionService } from '../../services/api-transaction.service';
import { MockTransactionData } from '../../models/mocks/mockTransactions';
import { HttpClientModule } from '@angular/common/http';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

export default {
  title: 'Components/playground-container',
  component: PlaygroundContainerComponent,
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
} as Meta<PlaygroundContainerComponent>;

type MyComponentStory = StoryObj<PlaygroundContainerComponent>;
const Template: MyComponentStory = {
  args: {},
};

export const Default: MyComponentStory = {
  ...Template,
  args: {},
};