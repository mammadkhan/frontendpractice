import { ReactComponent as PopArrow } from '../images/popArrow.svg';

function Footer(){
    return(
        <footer className="footer">
            <div className="footer_nav footer_1">
                <h3 className="footer_heading">Product</h3>
                <ul className="footer_links">
                    <li className="footer_link"><a href="/">Design</a></li>
                    <li className="footer_link"><a href="/">Collaborate</a></li>
                    <li className="footer_link"><a href="/">Prototype</a></li>
                    <li className="footer_link"><a href="/">Developer Handoff</a></li>
                    <li className="footer_link"><a href="/">Workspaces</a></li>
                    <li className="footer_link"><a href="/">Apps<span className="number">3</span></a></li>
                    <li className="footer_link"><a href="/">Extensions</a></li>
                    <li className="footer_link"><a href="/">Updates</a></li>
                    <li className="footer_link"><a href="/">Pricing</a></li>
                </ul>
            </div>
            <div className="footer_nav footer_2">
                <h3 className="footer_heading">Why Sketch<span className="newPill">NEW</span></h3>
                <ul className="footer_links">
                    <li className="footer_link"><a href="/">Sketch vs. Figma</a></li>
                    <li className="footer_link"><a href="/">Sketch vs. Adobe XD</a></li>
                </ul>
            </div>
            <div className="footer_nav footer_3">
                <h3 className="footer_heading">Learn</h3>
                <ul className="footer_links">
                    <li className="footer_link"><a href="/">Blog</a></li>
                    <li className="footer_link"><a href="/">Course: Sketch 101</a></li>
                    <li className="footer_link"><a href="/">Documentation</a></li>
                    <li className="footer_link"><a href="/">Events & Meetups</a></li>
                    <li className="footer_link"><a href="/">Research Labs</a></li>
                    <li className="footer_link"><a href="/" className="footer_link_svg">Developer Platform <PopArrow /></a></li>
                </ul>
            </div>
            <div className="footer_nav footer_4">
                <h3 className="footer_heading">Support</h3>
                <ul className="footer_links">
                    <li className="footer_link"><a href="/">Help Center</a></li>
                    <li className="footer_link"><a href="/">Contact Us</a></li>
                    <li className="footer_link"><a href="/">Manage License</a></li>
                    <li className="footer_link"><a href="/" className="footer_link_svg">Service Status <PopArrow /></a></li>
                </ul>
            </div>
            <div className="footer_nav footer_5">
                <h3 className="footer_heading">Company</h3>
                <ul className="footer_links">
                    <li className="footer_link"><a href="/">About Us</a></li>
                    <li className="footer_link"><a href="/">Careers<span className="number">10</span></a></li>
                    <li className="footer_link"><a href="/">Terms & Policies</a></li>
                    <li className="footer_link"><a href="/">Cookie Preferences</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer