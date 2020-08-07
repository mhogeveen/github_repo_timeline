import github from '../api/github'
import history from '../history'
import { UPDATE_USERNAME, GET_USERINFO } from './types'

export const updateUsername = (payload) => {
   return {
      type: UPDATE_USERNAME,
      payload,
   }
}

export const getUserInfo = () => async (dispatch, getState) => {
   const { username } = getState()
   try {
      const response = await github.get(`users/${username}`)

      dispatch({
         type: GET_USERINFO,
         payload: response.data,
      })
      history.push(`/${username}`)
   } catch (error) {
      const inputContainer = document.querySelector('.popup')
      inputContainer.classList.add('active')

      setTimeout(() => {
         inputContainer.classList.remove('active')
      }, 5000)
   }
}
