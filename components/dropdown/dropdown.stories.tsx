import React from 'react';
import { Dropdown } from './Dropdown';

export default {
  title: 'Data Entry/Dropdown',
  component: Dropdown,
};

export const Default = () => {
  const options = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
  ];

  return <Dropdown options={options} />;
};
