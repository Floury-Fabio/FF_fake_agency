import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl';

function Home (){
  return (
    <div className='container mt-3'>
      <p> <FormattedMessage id="main.home.content1" /> </p>
    </div>
  )
}

export default injectIntl(Home)
