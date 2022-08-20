import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import '../../vendor/fonts/fonts.css'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import PageNotFound from '../PageNotFound/PageNotFound';

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route> 
      </Switch>
    </div>
  );
}

export default App;