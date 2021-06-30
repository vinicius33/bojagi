import React from 'react';
require('./Accordion.css');

export function Accordion({children}) {
  const [indexOpen, setIndexOpen] = React.useState(null);

  return <>
    {children.map((child, i) => (
      <>
        <h3 className="accordion__item__title" onClick={() => setIndexOpen(i)}>{child.props.title}</h3>
        {React.cloneElement(child, { open: indexOpen === i })}
      </>
    ))}
  </>
}

export function AccordionItem({title, open, children}) {
  const wrapperRef = React.useRef(null);
  const [fullHeight, setFullHeight] = React.useState(false);

  React.useEffect(() => {
    if (wrapperRef.current && wrapperRef.current.scrollHeight > 0) {
      setFullHeight(wrapperRef.current.scrollHeight);
    }
  }, [wrapperRef.current]);
  
  return (
    <div className="accordion__item"
      style={{height: open ? fullHeight : undefined}}
      ref={wrapperRef}
    >
      <div className="accordion__item__inner">
        {children}
      </div>
    </div>
  )
}
