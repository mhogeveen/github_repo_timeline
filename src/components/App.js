import React from 'react'
import { connect } from 'react-redux'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import UserInput from './UserInput'
import Timeline from './Timeline'

const App = ({ username }) => {
   return (
      <div className='ui container app-container'>
         <Router>
            <Switch>
               <Route path='/'>
                  <UserInput />
               </Route>
               <Route path={`/timeline/${username}`}>
                  <Timeline />
               </Route>
            </Switch>
         </Router>
      </div>
   )
}

const mapStateToProps = (state) => {
   return { username: state.username }
}

export default connect(mapStateToProps)(App)
