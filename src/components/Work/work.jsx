import React from 'react'
import {Link} from 'react-router-dom'

function Work({study}) {
  console.log(study)
  return(
    <div className='card'>
      <Link to={`/works/${study}-study-case`}> {study} </Link>
    </div>
  )
}

export default Work
