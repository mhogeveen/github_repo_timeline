import React from 'react'

const UserInfo = ({ userInfo }) => {
   const returnDateString = () => {
      const dateParse = new Date(userInfo.created_at)
      const dateString = dateParse.toLocaleDateString()
      return dateString
   }

   return (
      <div className='timeline-item ui raised segment'>
         <div className='userinfo-container'>
            <div className='ui tiny circular image'>
               <img src={userInfo.avatar_url} alt='User avatar' />
            </div>
            <div className='userinfo-content'>
               <div className='content-name'>{`User: ${userInfo.login}`}</div>
               <div className='content-info'>{`Name: ${userInfo.name}`}</div>
               <div className='content-info'>{`Created on: ${returnDateString()}`}</div>
               <div className='content-info'>{`Public repos: ${userInfo.public_repos}`}</div>
               <a href={userInfo.html_url} className='content-link'>
                  <i className='teal external square alternate link icon'></i>
               </a>
            </div>
         </div>
      </div>
   )
}

export default UserInfo
