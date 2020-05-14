import React from 'react'
import {Link} from 'react-router-dom'
import { injectIntl, FormattedMessage } from 'react-intl';

function Work({study}) {
  console.log(study)
  return(
    <div className='card p-2 mt-2'>
      <h5 className='text-danger'> {study} </h5>
      <p> <FormattedMessage id={`cases.${study}.title`} /> </p>
      <Link to={`/works/${study}-study-case`}> <button className='btn btn-outline-primary'><FormattedMessage id={`UI.button.access`} /></button></Link>
    </div>
  )
}

export default Work
