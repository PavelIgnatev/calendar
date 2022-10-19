import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BaseCircleDay from '.';
import getDate from '../../helpers/getDate';

export default {
  title: 'UI components/BaseCircleDay',
  component: BaseCircleDay,
} as ComponentMeta<typeof BaseCircleDay>;

const Template: ComponentStory<typeof BaseCircleDay> = (args) => (
  <BaseCircleDay {...args} />
);

export const Prev = Template.bind({});
Prev.args = { day: getDate(Date.now() - 86400000) };
export const Now = Template.bind({});
Now.args = { day: getDate(Date.now()) };
export const Next = Template.bind({});
Next.args = { day: getDate(Date.now() + 86400000) };
export const Weekends = Template.bind({});
Weekends.args = { day: '22-10-2022' };
