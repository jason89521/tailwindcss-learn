import React from 'react';

type ContextType = {
  isExpanded: boolean;
  toggle: () => void;
};

const AccordionContext = React.createContext<ContextType>({} as ContextType);

export default AccordionContext;
