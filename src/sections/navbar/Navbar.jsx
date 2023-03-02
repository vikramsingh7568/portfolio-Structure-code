import './navbar.css'
import logo from '../../assets/logo.png'
import  data from './data'
import {IoIosColorPalette} from 'react-icons/io'
const Navbar = () => {

const testfunction= function(){
    
}

  return (
  
  <nav>
    <div className="container nav__container"> 
    <a href='index.html' className='nav__logo'>
        <img src={logo} alt='logo' className='logo'/>
    </a>
    <ul className='nav__menu'>
        {
            data.map(item => <li key={item.id}><a href={item.link}> {item.title}</a></li>)
        }
    </ul>
    <button id='theme__icon' onClick={testfunction}><IoIosColorPalette/>
     
    </button> 
   </div>
   </nav>
   
  )
}

export default Navbar