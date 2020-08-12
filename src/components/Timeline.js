import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Back from './Back'
import UserInfo from './UserInfo'

import { getUserInfo, updateUsername } from '../actions'

const Timeline = ({ userInfo, getUserInfo, updateUsername }) => {
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      updateUsername('mhogeveen')
      getUserInfo()

      setTimeout(() => {
         setLoading(false)

         const observer = new IntersectionObserver(
            (entries) => {
               entries.forEach((entry) => {
                  if (entry.isIntersecting === true) {
                     entry.target.classList.add('show-on-scroll')
                  }
               })
            },
            [1]
         )

         const targets = document.querySelectorAll('.timeline-item')
         targets.forEach((target) => {
            observer.observe(target)
         })
      }, 2000)
   }, [updateUsername, getUserInfo])

   const renderContent = () => {
      if (loading) {
         return (
            <div className='ui active inverted dimmer'>
               <div className='ui loader'></div>
            </div>
         )
      } else {
         return (
            <>
               <Back />
               <div className='timeline-container'>
                  <div className='timeline-item ui raised segment'>
                     <UserInfo userInfo={userInfo} />
                  </div>
                  <div className='timeline-item ui raised segment'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia
                     suscipit vestibulum. Suspendisse ultricies enim neque, sit amet pulvinar felis
                     dignissim eu. Cras nec sapien eu nisi mollis scelerisque. Aenean ultricies
                     fringilla varius. Nullam aliquam, lacus sit amet posuere bibendum, odio nulla
                     mollis metus, in fermentum lacus nunc id urna.
                  </div>
                  <div className='timeline-item ui raised segment'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia
                     suscipit vestibulum. Suspendisse ultricies enim neque, sit amet pulvinar felis
                     dignissim eu. Cras nec sapien eu nisi mollis scelerisque. Aenean ultricies
                     fringilla varius. Nullam aliquam, lacus sit amet posuere bibendum, odio nulla
                     mollis metus, in fermentum lacus nunc id urna.
                  </div>
                  <div className='timeline-item ui raised segment'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia
                     suscipit vestibulum. Suspendisse ultricies enim neque, sit amet pulvinar felis
                     dignissim eu. Cras nec sapien eu nisi mollis scelerisque. Aenean ultricies
                     fringilla varius. Nullam aliquam, lacus sit amet posuere bibendum, odio nulla
                     mollis metus, in fermentum lacus nunc id urna.
                  </div>
                  <div className='timeline-item ui raised segment'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia
                     suscipit vestibulum. Suspendisse ultricies enim neque, sit amet pulvinar felis
                     dignissim eu. Cras nec sapien eu nisi mollis scelerisque. Aenean ultricies
                     fringilla varius. Nullam aliquam, lacus sit amet posuere bibendum, odio nulla
                     mollis metus, in fermentum lacus nunc id urna.
                  </div>
                  <div className='timeline-item ui raised segment'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia
                     suscipit vestibulum. Suspendisse ultricies enim neque, sit amet pulvinar felis
                     dignissim eu. Cras nec sapien eu nisi mollis scelerisque. Aenean ultricies
                     fringilla varius. Nullam aliquam, lacus sit amet posuere bibendum, odio nulla
                     mollis metus, in fermentum lacus nunc id urna.
                  </div>
                  <div className='timeline-item ui raised segment'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia
                     suscipit vestibulum. Suspendisse ultricies enim neque, sit amet pulvinar felis
                     dignissim eu. Cras nec sapien eu nisi mollis scelerisque. Aenean ultricies
                     fringilla varius. Nullam aliquam, lacus sit amet posuere bibendum, odio nulla
                     mollis metus, in fermentum lacus nunc id urna.
                  </div>
                  <div className='timeline-item ui raised segment'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia
                     suscipit vestibulum. Suspendisse ultricies enim neque, sit amet pulvinar felis
                     dignissim eu. Cras nec sapien eu nisi mollis scelerisque. Aenean ultricies
                     fringilla varius. Nullam aliquam, lacus sit amet posuere bibendum, odio nulla
                     mollis metus, in fermentum lacus nunc id urna.
                  </div>
                  <div className='timeline-item ui raised segment'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia
                     suscipit vestibulum. Suspendisse ultricies enim neque, sit amet pulvinar felis
                     dignissim eu. Cras nec sapien eu nisi mollis scelerisque. Aenean ultricies
                     fringilla varius. Nullam aliquam, lacus sit amet posuere bibendum, odio nulla
                     mollis metus, in fermentum lacus nunc id urna.
                  </div>
                  <div className='timeline-item ui raised segment'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia
                     suscipit vestibulum. Suspendisse ultricies enim neque, sit amet pulvinar felis
                     dignissim eu. Cras nec sapien eu nisi mollis scelerisque. Aenean ultricies
                     fringilla varius. Nullam aliquam, lacus sit amet posuere bibendum, odio nulla
                     mollis metus, in fermentum lacus nunc id urna.
                  </div>
               </div>
            </>
         )
      }
   }

   return renderContent()
}

const mapStateToProps = (state) => {
   return { userInfo: state.userInfo, userRepos: state.userRepos }
}

export default connect(mapStateToProps, { getUserInfo, updateUsername })(Timeline)
