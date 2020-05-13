import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

function Works (){
  return (
    <p> <FormattedMessage id="main.works.title" /> </p>
  )
}

export default injectIntl(Works)
