import { VySideComponent } from './vy-side.component';
import { StoryObj, Meta } from '@storybook/angular';

export default {
  title: 'Components/vy-Side',
  component: VySideComponent,
} as Meta<VySideComponent>;

type MyComponentStory = StoryObj<VySideComponent>;
const Template: MyComponentStory = {
  args: {},
};

export const Default: MyComponentStory = {
  ...Template,
  args: {},
};