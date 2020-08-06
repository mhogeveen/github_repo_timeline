import React from 'react'
import { connect } from 'react-redux'
import { updateUsername } from '../actions'

const UserInput = ({ updateUsername, username }) => {
   const handleUpdateUsername = (e) => {
      updateUsername(e.target.value)
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
               />
            </div>
            <button className='ui teal button'>Generate timeline</button>
         </div>
      </div>
   )
}

const mapStateToProps = (state) => {
   return { username: state.username }
}

export default connect(mapStateToProps, { updateUsername })(UserInput)
