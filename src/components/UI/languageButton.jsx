import React, {useState} from 'react'
import {injectIntl} from 'react-intl'
import flagFr from 'assets/img/flagFr.png'
import flagEn from 'assets/img/flagEn.png'
import './languageButton.scss'


function LanguageButton({intl}) {

  let {locale} = intl

  const [src, setSrc] = useState(initFlag)

  function initFlag() {
    if (locale.language == 'fr')
      return flagEn
    else
      return flagFr
  }

  function change() {
    if (locale.language == 'fr'){
      locale.setLanguage('en')
      setSrc(flagFr)
      localStorage.language = 'en'
    }
    else{
      locale.setLanguage('fr')
      setSrc(flagEn)
      localStorage.language = 'fr'
    }
  }
  return(
    <button id='flag' className='p-0' onClick={change}> <img src={src} alt='flag'/> </button>
  )
}

export default injectIntl(LanguageButton)
