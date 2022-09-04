import {useState} from 'react'
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Arrow } from '../images/arrow.svg';
import { ReactComponent as PopArrow } from '../images/popArrow.svg';

function PhoneHeader() {
    const [menu,toggleMenu] = useState(false)
    const [isOpen, setOpen] = useState('closed');

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
        {menu && 
              <nav className="phone_nav">
              <ul className="phone_nav_list">
                <li className="nav_list_item" onClick={() => setOpen('product')}>
                  <button className="nav_dropdown_button">Product<Arrow /></button>
                  <CSSTransition in={isOpen === 'product'} timeout={100} unmountOnExit classNames="dropdown-anim">
                    <ul className="dropdown dropdown_design">
                      <li className="dropdown_item"><a href="/">Design</a></li>
                      <li className="dropdown_item"><a href="/">Collaborate</a></li>
                      <li className="dropdown_item"><a href="/">Prototype</a></li>
                      <li className="dropdown_item"><a href="/">Developer Handoff</a></li>
                      <li className="dropdown_item"><a href="/">Workspaces</a></li>
                      <div className="dropdown_divider"></div>
                      <li className="dropdown_item"><a href="/">Extensions</a></li>
                      <li className="dropdown_item"><a href="/">Updates</a></li>
                    </ul>
                  </CSSTransition>
                </li>
                <li className="nav_list_item" onMouseOver={() => setOpen('learn')} onMouseLeave={() => setOpen('closed')}>
                  <button className="nav_dropdown_button" >Learn<Arrow /></button>
                  <CSSTransition in={isOpen === 'learn'} timeout={100} unmountOnExit classNames="dropdown-anim">
                    <ul className="dropdown dropdown_collaborate" onMouseOver={() => setOpen('learn')} onMouseLeave={() => setOpen('closed')}>
                      <li className="dropdown_item"><a href="/">Blog</a></li>
                      <li className="dropdown_item"><a href="/">Course: Sketch 101 <span className="newPill">NEW</span></a></li>
                      <li className="dropdown_item"><a href="/">Documentation</a></li>
                      <li className="dropdown_item"><a href="/">Events & Meetups <span className="number">1</span></a></li>
                      <div className="dropdown_divider"></div>
                      <li className="dropdown_item"><a href="/">Newsletter</a></li>
                      <li className="dropdown_item"><a href="/">Research Labs</a></li>
                    </ul>
                  </CSSTransition>
                </li>
                <li className="nav_list_item_link">
                  <a href="/">Apps</a>
                </li>
                <li className="nav_list_item_link">
                  <a href="/">Pricing</a>
                </li>
                <li className="nav_list_item" onMouseOver={() => setOpen('support')} onMouseLeave={() => setOpen('closed')}>
                  <button className="nav_dropdown_button">Support<Arrow /></button>
                  <CSSTransition in={isOpen === 'support'} timeout={100} unmountOnExit classNames="dropdown-anim">
                    <ul className="dropdown dropdown_support" onMouseOver={() => setOpen('support')} onMouseLeave={() => setOpen('closed')}>
                      <li className="dropdown_item"><a href="/">Help Center</a></li>
                      <li className="dropdown_item"><a href="/">Contact Us</a></li>
                      <li className="dropdown_item fexclude"><a href="/">Service Status<PopArrow /></a></li>
                    </ul>
                  </CSSTransition>
                </li>
              </ul>
          </nav>}
    </div>
  )
}

export default PhoneHeader
