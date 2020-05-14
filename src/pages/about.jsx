import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

function About (){
  return (
    <div className='container mt-3'>
      <p> <FormattedMessage id="main.about.title" /> </p>
    </div>      
  )
}

export default injectIntl(About)
