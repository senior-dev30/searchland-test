import { ComponentProps } from 'react';
import React from 'react';

import { Story } from '@storybook/react';

import CardMediaImg from 'common/assets/images/CardMedia.png';

import Card from './Card';

export default {
  title: 'common/Card',
  component: Card,
};

export const CardComponent: Story<ComponentProps<typeof Card>> = (args) => {
  const [checked, setChecked] = React.useState(false);
  const onChange = () => {
    setChecked(!checked);
  };

  return <Card {...args} checked={checked} onChange={onChange} />;
};

CardComponent.args = {
  image: CardMediaImg,
  label: 'Flood zone 3',
};
