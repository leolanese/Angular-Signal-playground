import { VyNavComponent } from './vy-nav.component';
import { StoryObj, Meta } from '@storybook/angular';

export default {
  title: 'Components/vy-Nav',
  component: VyNavComponent,
} as Meta<VyNavComponent>;

type MyComponentStory = StoryObj<VyNavComponent>;
const Template: MyComponentStory = {
  args: {},
};

export const Default: MyComponentStory = {
  ...Template,
  args: {},
};