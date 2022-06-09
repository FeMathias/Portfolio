import React from 'react'
import './projects.css'
import project01 from '../../assets/project01_gpt3.png'
import project02 from '../../assets/project_recipee.png'
import project04 from '../../assets/project_meme.png'
import project03 from '../../assets/project_travel.png'
import acme from '../../assets/project-acme.jpg'
import animais from '../../assets/project-animais.png'
import {FiArrowUpCircle} from 'react-icons/fi'

const Projects = () => {
  return (
    <div className='projects' id='Projects'>
      <h1 className='section__callout'>projects.</h1>
      <div className='projects__project'>
      <figure className='project__box'>
          <a href="https://acme-store-one.vercel.app/" alt='ACME Store' target='_blank' rel='noreferrer'>
            <img src={acme} alt='project01' className='project__box-image'/>
            <span className='project__hover-text'>
              <h1>ACME store</h1>
              <p>fully functional marketplace for fictional company "Acme", developed for a test </p>
            </span>
          </a>
        </figure>
        <figure className='project__box'>
          <a href="https://github.com/FeMathias/website" alt='projeto01'  target='_blank' rel='noreferrer'>
            <img src={project01} alt='project01' className='project__box-image'/>
            <span className='project__hover-text'>
              <h1>GPT-3 design</h1>
              <p>website developed based on a FIGMA file for a ReactJS course</p>
            </span>
          </a>
        </figure>
        <figure className='project__box'>
          <img src={animais} alt='animais_fantasticos' className='project__box-image'/>
          <span className='project__hover-text'>
            <h1>recipee</h1>
            <p>project developed for Orgamid's ES6 JavaScript course</p>
          </span>
        </figure>
        <figure className='project__box'>
          <img src={project02} alt='project02' className='project__box-image'/>
          <span className='project__hover-text'>
            <h1>animais fantásticos</h1>
            <p>personal project developed on ReactJS to explore API management on the front end</p>
          </span>
        </figure>
        <figure className='project__box'>
          <a href="https://github.com/FeMathias/Travel" alt='projeto03' target='_blank' rel='noreferrer'>
            <img src={project03} alt='project01' className='project__box-image'/>
            <span className='project__hover-text'>
              <h1>travel journal</h1>
              <p>website developed for a React course exploring useState and objects</p>
            </span>
          </a>
        </figure>
        <figure className='project__box'>
          <img src={project04} alt='project01' className='project__box-image'/>
          <span className='project__hover-text'>
            <h1>meme gen</h1>
            <p>website developed for a React course, exploring external api and RNG</p>
          </span>
        </figure>
        
        
      </div>   
      <div className='arrow__up1'>
        <a href="#Main">
          <FiArrowUpCircle size={30}/>
        </a>
      </div>
    </div>
  )
}

export default Projects