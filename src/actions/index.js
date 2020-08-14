import github from '../api/github'
import history from '../history'
import { UPDATE_USERNAME, GET_USERINFO, GET_USERREPOS } from './types'

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
      history.push(`${process.env.PUBLIC_URL}/${username}`)
   } catch (error) {
      const inputContainer = document.querySelector('.popup')
      inputContainer.classList.add('active')

      setTimeout(() => {
         inputContainer.classList.remove('active')
      }, 5000)
   }
}

export const getUserRepos = () => async (dispatch, getState) => {
   const { username } = getState()
   try {
      const response = await github.get(`users/${username}/repos?sort=created`)

      dispatch({
         type: GET_USERREPOS,
         payload: response.data,
      })
   } catch (error) {
      console.log(error)
   }
}
