import {useState} from 'react'
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Arrow } from '../images/arrow.svg';

function PhoneHeader() {
    const [menu,toggleMenu] = useState(false)

  return (
    <div className="phone_header_wrapper">
        <div className='phone_header'>
            <button className='burger_menu' onClick={()=>toggleMenu(!menu)}>
                    <span className='burger_menu_container'>
                        <span className={menu ? 'burger1anim burger1' : 'burger1'}></span>
                        <span className={menu ? 'burger2anim burger2' : 'burger2'}></span>
                    </span>
            </button>
            <Logo  className='phone_logo'/>
            <a href="/" className='phone_link right_item_link'>Sign In</a>
        </div>
    </div>
  )
}

export default PhoneHeader