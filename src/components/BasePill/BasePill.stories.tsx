import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BasePill from '.';

export default {
  title: 'UI components/BasePill',
  component: BasePill,
} as ComponentMeta<typeof BasePill>;

const Template: ComponentStory<typeof BasePill> = (args) => (
  <BasePill {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Long name of the event in calendar',
};
