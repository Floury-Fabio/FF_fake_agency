import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl';

function Home (){
  return (
    <p> <FormattedMessage id="main.home.content1" /> </p>
  )
}

export default injectIntl(Home)
