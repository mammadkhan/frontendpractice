import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Arrow } from '../images/arrow.svg';
import { ReactComponent as PopArrow } from '../images/popArrow.svg';

function Header() {
  const [isOpen, setOpen] = useState('closed');

  return (
    <header className="header">
        <nav className="nav">
            <a href="/" className="nav_logo"><Logo /></a>
            <ul className="nav_list">
              <li className="nav_list_item" onMouseOver={() => setOpen('product')} onMouseLeave={() => setOpen('closed')}>
                <button className="nav_dropdown_button">Product<Arrow /></button>
                <CSSTransition in={isOpen === 'product'} timeout={100} unmountOnExit classNames="dropdown-anim">
                  <ul className="dropdown dropdown_design" onMouseOver={() => setOpen('product')} onMouseLeave={() => setOpen('closed')}>
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
            <span className='divider'></span>
            <div className="right">
              <a href="/" className='right_item_link'>Sign In</a>
              <a href="/" className='right_item right_button'>Get started for free</a>
            </div>
        </nav>
    </header>
  )
}

export default Header