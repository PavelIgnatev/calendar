import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Calendar from '.';

export default {
  title: 'UI components/Calendar',
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
);

export const Default = Template.bind({});
