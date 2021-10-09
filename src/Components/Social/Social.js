import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './Social.css'

function Social() {
  return (
    <div className='sociallogos fa fa-lg'>
      <a className='socialmedialink' href='https://twitter.com/'>
        <i className='fa fa-twitter icon'></i>
      </a>
      <a className='socialmedialink' href='https://www.instagram.com/'>
        <i className='fa fa-instagram'></i>
      </a>
      <a className='socialmedialink' href='https://www.youtube.com/'>
        <i className='fa fa-youtube-play'></i>
      </a>
      <a className='socialmedialink' href='https://www.facebook.com/'>
        <i className='fa fa-facebook'></i>
      </a>
    </div>
  )
}

export default Social
