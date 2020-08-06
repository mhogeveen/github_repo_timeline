import { combineReducers } from 'redux'
import usernameReducer from './usernameReducer'

export default combineReducers({
   username: usernameReducer,
})
