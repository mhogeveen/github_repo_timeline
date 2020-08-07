import React from 'react'
import { Link } from 'react-router-dom'

const ReturnHome = () => {
   return (
      <Link to='/'>
         <button class='ui circular teal icon button'>
            <i class='arrow left icon'></i>
         </button>
      </Link>
   )
}

export default ReturnHome
