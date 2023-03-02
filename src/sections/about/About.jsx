import './about.css'
import AboutImage from '../../assets/about.jpg'
import cv from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import Data from './data'
import Card from '../../components/Card'

const About = () => {
  return (
    <section id='about'> 
      <div className='container about__container'>
          <div className='about__left'>
               <div className='about__portrait'>
                <img src={AboutImage} alt='AboutImage' className='image'/>
               </div>
            </div> 
            <div className='about__right'>
              <h2>About Me</h2>
              <div className='about__cards'>
                {
                  Data.map(item => (
                    <Card key = {item.id}  className='about__card' >
                    <span className='about__card-icon'>{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.desc}</small>
                    </Card>
                  ))
                }
              </div>
             <p>
              Building projects my clients love have always
              been my passion
              being in the web development industry for over 1 years and serving
              more than 10 happy cllients worldwide i am alwas motivated to do more
    
             </p>
             <p>
             My name is vikram singh, and I'm a web developer with 1 year of experience in 
             building custom websites and web applications for businesses of all sizes.
             </p>
             <a href={cv} download className='btn primary'>Download Cv
             <HiDownload/></a>
            </div>
      </div>
    </section>
  )
}

export default About