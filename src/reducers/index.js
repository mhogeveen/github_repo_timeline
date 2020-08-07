import { combineReducers } from 'redux'
import usernameReducer from './usernameReducer'
import userInfoReducer from './userInfoReducer'
import userReposReducer from './userReposReducer'

export default combineReducers({
   username: usernameReducer,
   userInfo: userInfoReducer,
   userRepos: userReposReducer,
})
