import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Details from'../../components/Details/Details';
import '../../vendor/fonts/fonts.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
         <Route path="/details/:productId">
          <Details />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route> 
      </Switch> 
    </div>
  );
}

export default App;