import React from 'react';
import { Accordion, AccordionItem } from './Accordion.jsx';

export default {
  title: 'Accordion',
};

export const base = () => (
  <Accordion>
    <AccordionItem title="Title of first item">
      Content of first item<br />
      Content of first item<br />
      Content of first item<br />
      Content of first item<br />
      Content of first item
    </AccordionItem>
    <AccordionItem title="Title of the second item">Content of the second item</AccordionItem>
    <AccordionItem title="Three time's a charm">Lorem Ipsum Dolor</AccordionItem>
  </Accordion>
);

base.decorators = [(story) => <div style={{ width: '80vw', maxWidth: '500px' }}>{story()}</div>];
