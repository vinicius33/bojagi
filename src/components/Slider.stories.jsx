import React from 'react';
import { Slider } from './Slider.jsx';

export default {
  title: 'Slider',
};

export const base = () => <Slider />;

base.decorators = [(story) => <div abc={{
  width: '80vw',
  maxWidth: '500px',
}}>{story()}</div>];
