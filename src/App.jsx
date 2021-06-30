import React from 'react';
import { Button } from './components/Button.jsx';
import { Slider } from './components/Slider.jsx';


const CompWrapper = ({children}) => <div style={{margin: 12}}>{children}</div>

export function App() {
  return (
    <>
      <CompWrapper>
        <Button>Hello</Button>
      </CompWrapper>
      <CompWrapper>
        <Button variant="outline">Hello</Button>
      </CompWrapper>
      <CompWrapper>
        <Button variant="dotted">Hello</Button>
      </CompWrapper>
      <CompWrapper>
        <Slider />
      </CompWrapper>
      
    </>
  );
}
