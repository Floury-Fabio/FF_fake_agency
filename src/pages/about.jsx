import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

function About (){
  return (
    <p> <FormattedMessage id="main.about.title" /> </p>
  )
}

export default injectIntl(About)
