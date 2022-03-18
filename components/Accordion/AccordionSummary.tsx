import React, { useContext } from 'react';
import AccordionContext from './AccordionContext';

type AccordionSummaryProps = {
  className?: string;
  children?: React.ReactNode | ((isExpanded: boolean) => React.ReactNode);
};

const AccordionSummary = ({ className, children }: AccordionSummaryProps) => {
  const { isExpanded, toggle } = useContext(AccordionContext);
  const content = typeof children === 'function' ? children(isExpanded) : children;

  return (
    <div className={className} onClick={toggle}>
      {content}
    </div>
  );
};

export default AccordionSummary;
