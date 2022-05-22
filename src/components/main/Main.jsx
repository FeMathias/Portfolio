import React from 'react'
import './main.css'
import '../navbar/navbar.css'
import fotoFM from '../../assets/foto-perfil.jpg'
import Navbar from '../navbar/Navbar'
import { TiSocialGithub, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'
import {AiTwotoneMail} from 'react-icons/ai'

const Main = () => {
  return (
    <div id='Main'>
      <Navbar />
      <div className='main__container' >
           <div className='main__container-img'>
             <img src={fotoFM} alt='foto' className='personal__foto'/>
             <h1>hello. this is me. feel welcomed!</h1> 
           </div>
            <div className='main__container-text'>
              <h1>a little about me</h1>
              <p>I'm a Brazilian, born in 1993, in the southern part of the country. Until 2021, I used to work as an architect and project manager. A few months ago I felt I wasn't where I was supposed to be, and that my skillset wasn't really suited for the position I was in. I'm a really good learner, and I've been into tech since I was a kid, so I felt the IT career would suit me well and, at the age of 28, decided to change my entire career. And here I am, trying to fit myself into the IT market.</p>
              <br></br>
              <h1>my goals</h1>
              <p>I aim to be a reference on the development market. I'm moving towards a fullstack aproach, embrancing JavaScript both on the front end(React, Vue and Angular), and on the back end (NodeJS)</p>
              <br></br>
              
              <div className='network'> 
                <h1>my networks</h1>
                <div className='network__icons'>
                  <a href="https://github.com/FeMathias" rel='noreferrer' target='_blank' className="icon-links">
                    <TiSocialGithub size={55}/>
                  </a>
                  <a href="https://instagram.com/FeMathiass" rel='noreferrer' target='_blank' className="icon-links">
                  <TiSocialInstagram size={35} /> </a>
                  <a href='https://www.twitter.com/femathias' rel='noreferrer' target='_blank' className="icon-links"> <TiSocialTwitter size={40}/></a>
                  <a href="https://www.linkedin.com/in/felipe-mathias/" rel='noreferrer' target= '_blank' className="icon-links"><TiSocialLinkedin size={50} /> </a>
                  <a href='mailto:fmathias.dev@gmail.com' className="icon-links"><AiTwotoneMail size={35}/></a>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Main