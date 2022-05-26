import React from 'react'
import './blog.css'
import avatar from '../../assets/artwork.jpg'
import gira from '../../assets/giira.JPG'
import {FiArrowUpCircle} from 'react-icons/fi'

const Blog = () => {
  return (
    <div className='blog__general' id='Blog'>
      <div className='section__title'>
        <h1>blog.</h1>
      </div>
      <div className='blog__container'>
        <div className='blog__excerpt'>
          <img src={gira} alt='blog01' className='blog__excerpt-img'/>
          <div className='blog__excerpt-text'>
            <h1>new project</h1>
            <p>I'm starting the biggest challenge on my short development career(yet) - a real estate agency platform, developed in React (using react router), with a working search bar integrated with a MySQL db(also developed by me). I intend to add administrator features, such as uploading new real estate, manage payments, etc, and user features. It'll be hard, I know I dont have all the knowledge to do so now, but it'll be great for my growth as a developer.</p>
          </div>
        </div>
        <div className='blog__excerpt'>
          <img src={avatar} alt='blog01' className='blog__excerpt-img'/>
          <div className='blog__excerpt-text'>
            <h1>welcome, stranger!</h1>
            <p>HI! I've created this section to talk to you, stranger. Talk about my projects, about my achievments, and everything I feel that is relevant. Here I'll post w.i.p's, job notes, courses, and everything that I feel may add on my professional curriculum. I plan to add a comment section in the future, as I develop my coding skills.</p>
          </div>
        </div>
      </div>
      <div className='arrow__up1'>
        <a href="#Main">
          <FiArrowUpCircle size={30}/>
        </a>
        </div>
    </div>
  )
}

export default Blog