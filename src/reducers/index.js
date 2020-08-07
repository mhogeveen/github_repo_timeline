import { combineReducers } from 'redux'
import usernameReducer from './usernameReducer'
import userInfoReducer from './userInfoReducer'

export default combineReducers({
   username: usernameReducer,
   userInfo: userInfoReducer,
})
