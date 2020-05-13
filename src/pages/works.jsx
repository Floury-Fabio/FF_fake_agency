import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { withCases } from 'casesContext';

import Work from 'components/Work/work.jsx'

function Works ({cases}){
  console.log(cases)

  function initWorkList(){
    return cases.map(el => 
      <Work study={el} />
    )
  }
  return (
    <>
    <p> <FormattedMessage id="main.works.title" /> </p>
    {initWorkList()}
    </>
  )
}

export default injectIntl(withCases(Works))
