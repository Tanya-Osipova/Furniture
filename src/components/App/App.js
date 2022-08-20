import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import '../../vendor/fonts/fonts.css';

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