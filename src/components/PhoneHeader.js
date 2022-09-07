import { useState } from 'react'
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Arrow } from '../images/arrow.svg';
import { ReactComponent as PopArrow } from '../images/popArrow.svg';

function PhoneHeader({menu,toggleMenu}) {
  const [menu1,toggleMenu1] = useState(false)
  const [menu2,toggleMenu2] = useState(false)
  const [menu3,toggleMenu3] = useState(false)

  const handleBurger = () => {
    if(menu===true){
      toggleMenu(false)
      toggleMenu1(false)
      toggleMenu2(false)
      toggleMenu3(false)
    }else{
      toggleMenu(true)
    }
  }

  const handleMenu1 = () => {
    toggleMenu2(false)
    toggleMenu3(false)
    toggleMenu1(!menu1)
  }

  const handleMenu2 = () => {
    toggleMenu1(false)
    toggleMenu3(false)
    toggleMenu2(!menu2)
  }

  const handleMenu3 = () => {
    toggleMenu1(false)
    toggleMenu2(false)
    toggleMenu3(!menu3)
  }

  return (
    <div className={menu ? "phone_header_wrapper wrapper_nontrans" : "phone_header_wrapper"}>
        <div className='phone_header'>
            <button className='burger_menu' onClick={handleBurger}>
                    <span className='burger_menu_container'>
                        <span className={menu ? 'burger1anim burger1' : 'burger1'}></span>
                        <span className={menu ? 'burger2anim burger2' : 'burger2'}></span>
                    </span>
            </button>
            <Logo  className='phone_logo'/>
            <a href="/" className='phone_link right_item_link'>Sign In</a>
        </div>
        {menu &&
          <nav className={menu ? 'phone_nav phone_nav_color':"phone_nav"}>
              <ul className="phone_nav_list">
                <li className="phone_nav_list_item">
                  <button className="phone_nav_dropdown_button" onClick={()=>handleMenu1()}>Product<Arrow /></button>
                  {menu1 && 
                  <ul className="phone_dropdown">
                    <li className="phone_dropdown_item"><a href="/">Design</a></li>
                    <li className="phone_dropdown_item"><a href="/">Collaborate</a></li>
                    <li className="phone_dropdown_item"><a href="/">Prototype</a></li>
                    <li className="phone_dropdown_item"><a href="/">Developer Handoff</a></li>
                    <li className="phone_dropdown_item"><a href="/">Workspaces</a></li>
                    <li className="phone_dropdown_item"><a href="/">Extensions</a></li>
                    <li className="phone_dropdown_item"><a href="/">Updates</a></li>
                  </ul>
                  }
                </li>
                <li className="phone_nav_list_item">
                  <button className="phone_nav_dropdown_button" onClick={()=>handleMenu2()} >Learn<Arrow /></button>
                  {menu2 && 
                  <ul className="phone_dropdown">
                    <li className="phone_dropdown_item"><a href="/">Blog</a></li>
                    <li className="phone_dropdown_item"><a href="/">Course: Sketch 101 <span className="newPill">NEW</span></a></li>
                    <li className="phone_dropdown_item"><a href="/">Documentation</a></li>
                    <li className="phone_dropdown_item"><a href="/">Events & Meetups <span className="number">1</span></a></li>
                    <li className="phone_dropdown_item"><a href="/">Newsletter</a></li>
                    <li className="phone_dropdown_item"><a href="/">Research Labs</a></li>
                  </ul>
                  }
                </li>
                <li className="phone_nav_list_item_link">
                  <a href="/">Apps</a>
                </li>
                <li className="phone_nav_list_item_link">
                  <a href="/">Pricing</a>
                </li>
                <li className="phone_nav_list_item">
                  <button className="phone_nav_dropdown_button" onClick={()=>handleMenu3()}>Support<Arrow /></button>
                  {menu3 && 
                  <ul className="phone_dropdown">
                    <li className="phone_dropdown_item"><a href="/">Help Center</a></li>
                    <li className="phone_dropdown_item"><a href="/">Contact Us</a></li>
                    <li className="phone_dropdown_item phone_fexclude"><a href="/">Service Status<PopArrow /></a></li>
                  </ul>
                  }
                </li>
              </ul>
              <a href="/" className='right_item right_button phone_nav_button'>Get started for free</a>
          </nav>}
          <div className='overlay'></div>
    </div>
  )
}

export default PhoneHeader
