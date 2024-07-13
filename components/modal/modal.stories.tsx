import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from './Modal';

export default {
  title: 'General/Modal',
  component: Modal,
  argTypes: {
    id: {
      description: 'Define the modal id.',
      control: 'text'
    },
    title: {
      description: 'Define the modal title.',
      control: 'text'
    },
    body: {
      description: 'Define the modal body text.',
      control: 'text'
    },
    buttonText1: {
      description: 'Define the modal close button text.',
      control: 'text'
    },
    buttonText2: {
      description: 'Define the modal save button text.',
      control: 'text'
    },
    modifier: {
      description: 'Define the modal modifier class for button.',
      control: 'text'
    }
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalComponent = Template.bind({});
ModalComponent.args = {
  id: 'exampleModal',
  title: 'Modal title',
  body: '<p>Modal body text goes here.</p>',
  buttonText1: 'Close',
  buttonText2: 'Save Changes',
  modifier: 'btn-primary'
};
