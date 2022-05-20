import React from 'react'
import './curriculum.css'
import {FiArrowUpCircle} from 'react-icons/fi'

const Curriculum = () => {
  return (
    <div className='curriculum__container' id='Curriculum'>
      <div className='callout-container'>
        <h1 className='section__callout2'>curriculum.</h1>
      </div>
      <div className='curriculum__content'>
        <div className='curriculum__content-work'>
          <h1>work experience</h1>
          <hr></hr>
          <div className='unity'>
            <p className='work-duration'>2014 - 2017</p>
            <div className='work-general'>
              <p className='work-name'>Milani Arquitetura, Florianópolis/Santa Catarina - Brazil</p>
              <p className='work-description'>2014-2016, intern architect</p>
              <p className='work-description'>2016-2017, junior architect</p>
            </div>
          </div>
          <div className='unity'>
            <p className='work-duration'>2017 - present</p>
            <div className='work-general'>
              <p className='work-name'>Girassol Imóveis, Jaraguá do Sul/Santa Catarina - Brazil</p>
              <p className='work-description'>2017 - present, senior architect, responsible for the projects, digital marketing and legal process</p>
            </div>
          </div>
        </div>
        <div className='curriculum__content-work'>
          <h1>education</h1>
          <hr></hr>
          <div className='unity'>
            <p className='work-duration'>2012 - 2017</p>
            <div className='work-general'>
              <p className='work-name'>Federal University of Santa Catarina (UFSC)</p>
              <p className='work-description'>2012-2017, bachelor degree in architecture and urbanism</p>
            </div>
          </div>
        </div>
        <div className='curriculum__content-work'>
          <h1>tecnologies</h1>
          <hr></hr>
          <div className='unity'>
            <div className='tecnology'>
              <p className='tecnology-name'>FRONT END DEVELOPMENT</p>
              <p className='tecnology-description'>html5, css3, JavaScript(vanilla), React.JS, API with Fetch and Axios</p>
              <p className='tecnology-name'>BACK END DEVELOPMENT</p>
              <p className='tecnology-description'>NodeJS, relational database(MySQL, SQL Server), APIs(Insomnia and Postman)</p>
              <p className='tecnology-name'>OTHER</p>
              <p className='tecnology-description'>GIT, GitHub, FIGMA and excel</p>
              <p className='tecnology-name'>PROJECT MANAGEMENT</p>
              <p className='tecnology-description'>General knowledge in PMBOK, ITIL, COBIT, Agile methodology/SCRUM, BPM and BPMN</p>
              <p className='tecnology-name'>DESIGN TOOLS</p>
              <p className='tecnology-description'>Adobe Photoshop and Adobe Illustrator</p>
              <p className='tecnology-name'>LANGUAGES</p>
              <p className='tecnology-description'>Portuguese(native language), english(fluent), spanish(can read/listen)</p>
            </div>
          </div>
        </div>
        <div className='arrow__up'>
          <a href="#Main">
            <FiArrowUpCircle size={30}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Curriculum