import { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import Checkbox from './index';

export default {
  title: 'core/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<ComponentProps<typeof Checkbox>> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Checkbox Label', checked: false, disabled: false };

export const Checked = Template.bind({});
Checked.args = { label: 'This is checked', checked: true, disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { label: 'This is disabled', checked: false, disabled: true };
