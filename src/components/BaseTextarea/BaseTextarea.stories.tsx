import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BaseTextarea from '.';

export default {
  title: 'UI components/BaseTextarea',
  component: BaseTextarea,
} as ComponentMeta<typeof BaseTextarea>;

const Template: ComponentStory<typeof BaseTextarea> = (args) => (
  <BaseTextarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter value',
};
