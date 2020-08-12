import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Back from './Back'
import UserInfo from './UserInfo'
import UserRepo from './UserRepo'

const Timeline = ({ userInfo, userRepos }) => {
   const [loading, setLoading] = useState(true)

   useEffect(() => {
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
      }, 1000)
   }, [])

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
                  <UserInfo userInfo={userInfo} />
                  {userRepos.map((repo) => (
                     <UserRepo repo={repo} key={repo.id} />
                  ))}
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

export default connect(mapStateToProps)(Timeline)
