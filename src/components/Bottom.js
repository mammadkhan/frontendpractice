import React from 'react'
import { ReactComponent as Logo } from '../images/bottomlogo.svg';
import { ReactComponent as Twitter } from '../images/twitter.svg';
import { ReactComponent as Youtube } from '../images/youtube.svg';
import { ReactComponent as Instagram } from '../images/instagram.svg';
import { ReactComponent as Dribbble } from '../images/dribbble.svg';

function Bottom() {
  return (
    <div className='bottom'>
        <div><Logo className="logo" /></div>
        <p className='copyright'>© 2022 Sketch B.V.</p>
        <ul className='socials'>
            <li><a href="/" className='social'><Twitter /></a></li>
            <li><a href="/" className='social'><Instagram /></a></li>
            <li><a href="/" className='social'><Dribbble /></a></li>
            <li><a href="/" className='social'><Youtube /></a></li>
        </ul>
    </div> 
  )
}

export default Bottom