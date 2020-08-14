import React from 'react'

import { Router, Switch, Route } from 'react-router-dom'
import history from '../history'

import UserInput from './UserInput'
import Timeline from './Timeline'

const App = () => {
   return (
      <div className='ui container app-container'>
         <Router history={history} basename={'/github_repo_timeline'}>
            <Switch>
               <Route exact path={process.env.PUBLIC_URL + '/'}>
                  <UserInput />
               </Route>
               <Route path={process.env.PUBLIC_URL + '/:username'}>
                  <Timeline />
               </Route>
            </Switch>
         </Router>
      </div>
   )
}

export default App
