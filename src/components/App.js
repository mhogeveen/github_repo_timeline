import React from 'react'
import { connect } from 'react-redux'

import { Router, Switch, Route } from 'react-router-dom'
import history from '../history'

import UserInput from './UserInput'
import Timeline from './Timeline'

const App = ({ username }) => {
   return (
      <div className='ui container app-container'>
         <Router history={history}>
            <Switch>
               <Route exact path='/'>
                  <UserInput />
               </Route>
               <Route path={`/:username`}>
                  <Timeline />
               </Route>
            </Switch>
         </Router>
      </div>
   )
}

const mapStateToProps = (state) => {
   return { username: state.username, userInfo: state.userInfo }
}

export default connect(mapStateToProps)(App)
