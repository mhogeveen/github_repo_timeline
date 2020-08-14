import React from 'react'
import { connect } from 'react-redux'
import { updateUsername } from '../actions'
import { Link } from 'react-router-dom'

const Back = ({ updateUsername }) => {
   const handleBack = () => {
      updateUsername('')
   }

   return (
      <Link to={process.env.PUBLIC_URL + '/'} className='return-home' onClick={handleBack}>
         <button className='ui circular teal icon button'>
            <i className='arrow left icon'></i>
         </button>
      </Link>
   )
}

export default connect(null, { updateUsername })(Back)
