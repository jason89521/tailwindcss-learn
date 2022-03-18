import React, { useContext } from 'react';

import AccordionContext from './AccordionContext';

type AccordionDetailsProps = {
  className?: string;
  children?: React.ReactNode | ((isExpanded: boolean) => React.ReactNode);
};

const AccordionDetails = ({ className, children }: AccordionDetailsProps) => {
  const { isExpanded } = useContext(AccordionContext);
  const content = typeof children === 'function' ? children(isExpanded) : children;

  return <>{isExpanded && <div className={className}>{content}</div>}</>;
};

export default AccordionDetails;
