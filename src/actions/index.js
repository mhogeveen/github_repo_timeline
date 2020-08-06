import { UPDATE_USERNAME } from './types'

export const updateUsername = (payload) => {
   return {
      type: UPDATE_USERNAME,
      payload,
   }
}
