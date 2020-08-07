import React from 'react'
import { connect } from 'react-redux'
import { updateUsername, updateUserInfo } from '../actions'
import axios from 'axios'

const UserInput = ({ updateUsername, username, updateUserInfo }) => {
   const handleUpdateUsername = (e) => {
      updateUsername(e.target.value)
   }

   const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
         getUser()
      }
   }

   const getUser = () => {
      const githubAPI = axios.create({
         baseURL: 'https://api.github.com/',
      })

      githubAPI
         .get(`users/${username}`)
         .then((res) => {
            const userInfo = { ...res.data }
            updateUserInfo(userInfo)
         })
         .catch((err) => {
            updateUsername('')
            const inputContainer = document.querySelector('.popup')
            inputContainer.classList.add('active')

            setTimeout(() => {
               inputContainer.classList.remove('active')
            }, 5000)
         })
   }

   return (
      <div className='ui-container'>
         <div className='ui segment teal raised ui-segment'>
            <div className='ui labeled input'>
               <div className='ui label'>https://github.com/</div>
               <input
                  type='text'
                  placeholder='username'
                  onChange={handleUpdateUsername}
                  value={username}
                  onKeyDown={handleKeyDown}
               />
               <div className='popup'>Unable to find user</div>
            </div>
            <button className='ui teal button' onClick={getUser}>
               Generate timeline
            </button>
         </div>
      </div>
   )
}

const mapStateToProps = (state) => {
   return { username: state.username }
}

export default connect(mapStateToProps, { updateUsername, updateUserInfo })(UserInput)
