import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {SignUpForm} from "./SignUpForm";

export default {
    title: 'Example/SignUpForm',
    component: SignUpForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story = (args) => <SignUpForm />;

export const FirstExample = Template.bind({});