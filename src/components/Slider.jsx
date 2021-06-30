import React from 'react';
require('./Slider.css');

const HANDLE_SIZE = 24;

export const Slider = () => {
  const barRef = React.useRef(null);
  const [dragged, setDragged] = React.useState(false);
  const [position, setPosition] = React.useState(0);
  const handleDragStart = React.useCallback(() => {
    setDragged(true);
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragged) {
        const barRect = barRef.current.getBoundingClientRect();
        
        const mousePos = e.clientX - barRect.left;
        const posPercentage = mousePos / barRect.width;
        
        setPosition(Math.max(Math.min(posPercentage, 1), 0));
      }
    };
    const handleMouseUp = (e) => {
      setDragged(false);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragged, barRef]);

  return <div className="slider" ref={barRef}>
    <div 
      className="slider__bar_active"
      style={{width: `calc(${position * 100}% - ${HANDLE_SIZE * 0.5}px`}}
    />
    <div
      className="slider__handle"
      style={{ marginLeft: `calc(${position * 100}% - ${HANDLE_SIZE * 0.5}px` }}
      onMouseDown={handleDragStart}
    />
  </div>;
}
