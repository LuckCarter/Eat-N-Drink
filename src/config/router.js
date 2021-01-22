import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,

} from 'react-router-dom'

import Home from '../screens/home'
import AllMenu from '../screens/allMenu'
import Panier from '../screens/panier'
import Details from '../components/Products/details'

const Routes = () =>{
    return(
        <Router>
            <Switch>
            <Route exact path='/home' component={Home}></Route>
            <Route exact path='/allMenu' component={AllMenu}></Route>
            <Route exact path='/panier' component={Panier}></Route>
            <Route exact path='/details/:name' component={Details}></Route>
            <Redirect to='/home' />
            </Switch>
        </Router>
    )
}

export default Routes