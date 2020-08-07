import { GET_USERREPOS } from '../actions/types'

export default (state = {}, action) => {
   switch (action.type) {
      case GET_USERREPOS:
         return action.payload
      default:
         return state
   }
}
