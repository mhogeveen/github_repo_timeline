import React from 'react'

const UserRepo = ({ repo }) => {
   const returnDateString = () => {
      const dateParse = new Date(repo.created_at)
      const dateString = dateParse.toLocaleDateString()
      return dateString
   }

   const returnRepoSize = () => {
      if (Number(repo.size) < 1000) {
         return `${repo.size} kB`
      } else {
         return `${Number(repo.size) / 1000} MB`
      }
   }

   return (
      <div className='timeline-item ui raised segment'>
         <div className='userrepo-container'>
            <div className='content-name'>{`Repository: ${repo.name}`}</div>
            <div className='content-info'>{`Created on: ${returnDateString()}`}</div>
            <div className='content-info'>{`Size: ${returnRepoSize()}`}</div>
            <a href={repo.html_url} className='content-link'>
               <i className='teal external square alternate link icon'></i>
            </a>
         </div>
      </div>
   )
}

export default UserRepo
