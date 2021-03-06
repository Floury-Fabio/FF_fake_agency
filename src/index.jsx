import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import messagesFr from 'assets/translation/fr';
import messagesEn from 'assets/translation/en';
import CasesContext from './casesContext.jsx'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/Navbar/navbar.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Works from './pages/works.jsx'
import StudyCase from './pages/studyCase.jsx'

const messages = {
    fr: messagesFr,
    en: messagesEn,
};

const App = () => {
  
  const [language, setLanguage] = useState(localStorage.language || 'fr')

    return (
      <Router>
        <IntlProvider locale={{language: language, setLanguage: setLanguage}} messages={messages[language]} setLanguage={setLanguage}>
          <CasesContext.Provider value={{cases: ['platon', 'solane', 'sedal']}}>
            <>
              <Navbar />        
                <Switch>
                  <Route path="/agency"> <About /> </Route>
                  <Route exact path="/"> <Home /> </Route>
                  <Route exact path="/works"> <Works /> </Route>
                  <Route exact path="/works/:study_id"> <StudyCase /> </Route>
                </Switch>
            </>
          </CasesContext.Provider>
        </IntlProvider>
      </Router>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))


