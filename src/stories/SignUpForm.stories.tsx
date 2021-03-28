import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {SignUpForm, SignUpFormProps} from "./SignUpForm";


function callbackMock(firstName: string, lastName: string, email: string, password: string) {
    console.group("Button data");
    console.log("First name: " + firstName);
    console.log("Last name: " + lastName);
    console.log("Email: " + email);
    console.log("Password: " + password);
    console.groupEnd();
}

export default {
    title: 'Example/SignUpForm',
    component: SignUpForm,
} as Meta;

const Template: Story<SignUpFormProps> = (args) => <SignUpForm {...args}/>;

export const FirstExample = Template.bind({});
FirstExample.args = {
    callback: callbackMock
}