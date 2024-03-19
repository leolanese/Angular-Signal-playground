import { VyHeaderComponent } from './vy-header.component';
import { StoryObj, Meta } from '@storybook/angular';

export default {
  title: 'Components/vy-Header',
  component: VyHeaderComponent,
} as Meta<VyHeaderComponent>;

type MyComponentStory = StoryObj<VyHeaderComponent>;
const Template: MyComponentStory = {
  args: {},
};

export const Default: MyComponentStory = {
  ...Template,
  args: {},
};