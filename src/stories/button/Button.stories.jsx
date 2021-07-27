import React from 'react';

import {Button} from './Button';

export default {
    title: 'Input/Button',
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
    label: 'Button',
};

export const Success = Template.bind({});
Success.args = {
    type: 'success',
    label: 'Button'
}

export const Danger = Template.bind({});
Danger.args = {
    type: 'danger',
    label: 'Button'
}