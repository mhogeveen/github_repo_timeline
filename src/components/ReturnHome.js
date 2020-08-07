import React from 'react'
import { connect } from 'react-redux'
import { updateUsername } from '../actions'
import { Link } from 'react-router-dom'

const ReturnHome = ({ updateUsername }) => {
   const handleReturnHome = () => {
      updateUsername('')
   }

   return (
      <Link to='/' className='return-home' onClick={handleReturnHome}>
         <button className='ui circular teal icon button'>
            <i className='arrow left icon'></i>
         </button>
      </Link>
   )
}

export default connect(null, { updateUsername })(ReturnHome)
