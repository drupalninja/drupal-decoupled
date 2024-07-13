import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBox } from './search-box';

export default {
  title: 'Data Entry/Search Box',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = (args) => <SearchBox {...args} />;

export const SearchBoxComponent = Template.bind({});
SearchBoxComponent.args = {};