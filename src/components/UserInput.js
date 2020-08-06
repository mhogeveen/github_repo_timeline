import React from 'react'

const UserInput = () => {
   return (
      <div className='ui-container'>
         <div className='ui segment teal raised ui-segment'>
            <div className='ui labeled input'>
               <div className='ui label'>https://github.com/</div>
               <input type='text' placeholder='username' />
            </div>
            <button className='ui teal button'>Generate timeline</button>
         </div>
      </div>
   )
}

export default UserInput
