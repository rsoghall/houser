import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import House from './Components/House/House'
import Wizard from './Components/Wizard/Wizard'

export default (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/House" component={House} />
        <Route path="/Header" component={Header} />
        <Route path="/Wizard" component={Wizard} />
    </Switch>
)