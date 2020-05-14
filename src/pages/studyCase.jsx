import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl';
import {useParams} from "react-router-dom";


function StudyCase({intl}){
  let {study_id} = useParams()
  study_id = study_id.split('-')[0] 
  console.log(study_id)
  console.log()

  function initListContent(){
    let ans = []
    let i = 1
    while(intl.formatMessage({ id: `cases.${study_id}.content${i}`}) != `cases.${study_id}.content${i}` && i <= 3){
      console.log(intl.formatMessage({ id: `cases.${study_id}.content${i}`}))
      ans.push(<p><FormattedMessage id={`cases.${study_id}.content${i}`} /></p>)
      i+=1
    }
    return ans
  }

  return (

    <div className='container mt-3'>
      <h4><FormattedMessage id={`cases.${study_id}.title`} /></h4>
      {initListContent()}
    </div>
  )
}

export default injectIntl(StudyCase);
