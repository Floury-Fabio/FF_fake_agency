import React, { createContext } from 'react';

const CasesContext = createContext('');

export const withCases = Component => props => (
  <CasesContext.Consumer>
    {value => <Component {...props}  {...value}/>}
  </CasesContext.Consumer>
);

export default CasesContext;

