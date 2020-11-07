import React from 'react';
import {Switch, Route} from 'react-router-dom';
import BigRoulette from './roulette/BigRoulette';

const Main = () => {
    return(
        <Switch>
          <Route exact path="/" component={BigRoulette} />
        </Switch>
    );
}

export default Main;