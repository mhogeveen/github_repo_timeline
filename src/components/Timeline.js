import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Back from './Back'
import UserInfo from './UserInfo'

import { getUserInfo, updateUsername } from '../actions'

const Timeline = ({ userInfo, getUserInfo, updateUsername }) => {
   useEffect(() => {
      updateUsername('mhogeveen')
      getUserInfo()
   }, [updateUsername, getUserInfo])

   return (
      <>
         <Back />
         <div className='timeline-container'>
            <div className='timeline-item ui raised segment'>
               <UserInfo userInfo={userInfo} />
            </div>
            <div className='timeline-item ui raised segment'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia suscipit
               vestibulum. Suspendisse ultricies enim neque, sit amet pulvinar felis dignissim eu.
               Cras nec sapien eu nisi mollis scelerisque. Aenean ultricies fringilla varius. Nullam
               aliquam, lacus sit amet posuere bibendum, odio nulla mollis metus, in fermentum lacus
               nunc id urna.
            </div>
            <div className='timeline-item ui raised segment'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia suscipit
               vestibulum. Suspendisse ultricies enim neque, sit amet pulvinar felis dignissim eu.
               Cras nec sapien eu nisi mollis scelerisque. Aenean ultricies fringilla varius. Nullam
               aliquam, lacus sit amet posuere bibendum, odio nulla mollis metus, in fermentum lacus
               nunc id urna.
            </div>
            <div className='timeline-item ui raised segment'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia suscipit
               vestibulum. Suspendisse ultricies enim neque, sit amet pulvinar felis dignissim eu.
               Cras nec sapien eu nisi mollis scelerisque. Aenean ultricies fringilla varius. Nullam
               aliquam, lacus sit amet posuere bibendum, odio nulla mollis metus, in fermentum lacus
               nunc id urna.
            </div>
         </div>
      </>
   )
}

const mapStateToProps = (state) => {
   return { userInfo: state.userInfo, userRepos: state.userRepos }
}

export default connect(mapStateToProps, { getUserInfo, updateUsername })(Timeline)
