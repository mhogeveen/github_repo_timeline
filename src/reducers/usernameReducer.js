import { UPDATE_USERNAME } from '../actions/types'

export default (state = '', action) => {
   switch (action.type) {
      case UPDATE_USERNAME:
         return (state = action.payload)
      default:
         return state
   }
}
