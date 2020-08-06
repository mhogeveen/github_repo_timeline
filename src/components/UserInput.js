import React from 'react'

const UserInput = () => {
   return (
      <div className='userinput-container'>
         <div className='ui segment teal raised center aligned'>
            <div class='ui labeled input'>
               <div class='ui label'>https://github.com/</div>
               <input type='text' placeholder='username' />
            </div>
            <button class='ui teal button'>Generate timeline</button>
         </div>
      </div>
   )
}

export default UserInput
