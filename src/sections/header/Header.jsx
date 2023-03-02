import './header.css'
import HeaderImage from '../../assets/header.jpg' 
import data from './data'


const Header = () => {
  return (
    <section id="header">
      <div className="container header__container" >
        <div className="header__profile">
          <img src={HeaderImage} alt='Header__Portait' className='headerimage'></img>
        </div>
        <h3>vikram singh</h3>
        <p>
          you are a click away from building your drem website or web app.
          send me the details of your project for a modern, mobile responsive ,highly 
          performant webiste today !
        </p>
        <div className='header__cta'>
          <a href='#contact' className='btn primary'> Let's talk</a>
          <a href='#portfolio' className='btn light'>My work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target='__blank'
            rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    </section>
  )
}

export default Header