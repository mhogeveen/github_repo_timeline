import { UPDATE_USERNAME, UPDATE_USERINFO } from './types'

export const updateUsername = (payload) => {
   return {
      type: UPDATE_USERNAME,
      payload,
   }
}

export const updateUserInfo = (payload) => {
   return {
      type: UPDATE_USERINFO,
      payload,
   }
}
