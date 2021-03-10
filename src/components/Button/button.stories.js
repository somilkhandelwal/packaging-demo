import React from 'react';
import Button from './index';

export default {
  title: 't500/Primitives/Button',
  component: Button,
  argTypes: {
  },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  variant: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  variant: 'primary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Button',
  variant: 'outlined',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  variant: 'disabled',
};

export const Transparent = Template.bind({});
Transparent.args = {
  children: 'Button',
  variant: 'transparent',
};

