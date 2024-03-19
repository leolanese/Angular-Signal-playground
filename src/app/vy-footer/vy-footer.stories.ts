import { VyFooterComponent } from './vy-footer.component';
import { StoryObj, Meta } from '@storybook/angular';

export default {
  title: 'Components/vy-Footer',
  component: VyFooterComponent,
} as Meta<VyFooterComponent>;

type MyComponentStory = StoryObj<VyFooterComponent>;
const Template: MyComponentStory = {
  args: {},
};

export const Default: MyComponentStory = {
  ...Template,
  args: {},
};