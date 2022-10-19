import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BaseInput from '.';

export default {
  title: 'UI components/BaseInput',
  component: BaseInput,
} as ComponentMeta<typeof BaseInput>;

const Template: ComponentStory<typeof BaseInput> = (args) => (
  <BaseInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter value',
};
