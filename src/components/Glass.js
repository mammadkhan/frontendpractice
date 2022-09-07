import sec1 from '../images/main_1_desktop.png'
import sec2 from '../images/main_2_desktop.png'
import sec3 from '../images/main_3_desktop.png'

import sec1m from '../images/main_1_mobile.png'
import sec2m from '../images/main_2_mobile.png'
import sec3m from '../images/main_3_mobile.png'




function Glass() {
  return (
    <div className="glass">
        <section className="sec glass_sec_one">
            <figure className="sec_img_m">
                <img src={sec1m} alt="" />
            </figure>
            <figure className="sec_img">
                <img src={sec1} alt="" />
            </figure>
            <div className="text_sec sec_one_text">
                <p className='sec_label'>FOR EDITORS</p>
                <h2 className='sec_heading'>Design on your Mac</h2>
                <p className='sec_text'>Design, prototype, and illustrate in a truly native macOS app, online or offline. Work in private or collaborate with others, in real time.</p>
                <a href="/" className='sec_btn'>Download for macOS</a>
                <ul className='sec_links'>
                    <li><a href="/" id="first_link" className='sec_link'>Browse old versions</a></li>
                    <li><a href="/" className='sec_link'>Download Beta</a></li>
                </ul>
            </div>
        </section>
        <section className="sec glass_sec_two">
            <div className="text_sec sec_one_text">
                <p className='sec_label'>FOR EVERYONE</p>
                <h2 className='sec_heading'>Explore in your browser</h2>
                <p className='sec_text'>Browse documents, inspect designs, export assets, discuss feedback, manage users, and invite guests — on any computer, in any browser.</p>
                <a href="/" className='sec_btn'>Open the web app</a>
            </div>
            <figure className="sec_img r">
                <img src={sec2} alt="" />
            </figure>
            <figure className="sec_img_m">
                <img src={sec2m} alt="" />
            </figure>
        </section>
        <section className="sec glass_sec_three">
            <figure className="sec_img_m">
                <img src={sec3m} alt="" />
            </figure>
            <figure className="sec_img l">
                <img src={sec3} alt="" />
            </figure>
            <div className="text_sec sec_one_text">
                <p className='sec_label'>FOR EVERYONE</p>
                <h2 className='sec_heading'>Preview on iPhone</h2>
                <p className='sec_text'>View your documents on the go, play prototypes on a real device, and mirror designs as you edit them on your Mac.</p>
                <a href="/" className='sec_btn'>Download on the App Store</a>
                <p className='sec_ps'>Our iPhone app works exclusively with Workspace documents.</p>
            </div>
        </section>
    </div>
  )
}

export default Glass