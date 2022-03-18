import React, { useState } from 'react';

import AccordionContext from './AccordionContext';

type AccordionProps = {
  className?: string;
  children?: React.ReactNode;
};

const Accordion = ({ className, children }: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AccordionContext.Provider value={{ isExpanded, toggle }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
