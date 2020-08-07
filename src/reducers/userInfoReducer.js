import { UPDATE_USERINFO } from '../actions/types'

export default (state = {}, action) => {
   switch (action.type) {
      case UPDATE_USERINFO:
         return action.payload
      default:
         return state
   }
}
