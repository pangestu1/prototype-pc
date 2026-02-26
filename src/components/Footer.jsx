import './Footer.css';

export default function Footer() {
    const scrollTo = (id) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="footer-logo-icon">N</span>
                            NovaTech
                        </div>
                        <p>
                            Your trusted technology partner for innovative digital solutions.
                            We build the future, one line of code at a time.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="footer-social" aria-label="LinkedIn">in</a>
                            <a href="#" className="footer-social" aria-label="Twitter">𝕏</a>
                            <a href="#" className="footer-social" aria-label="Instagram">📷</a>
                            <a href="#" className="footer-social" aria-label="GitHub">⌘</a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}>About Us</a></li>
                            <li><a href="#team" onClick={(e) => { e.preventDefault(); scrollTo('#team'); }}>Our Team</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}>Web Development</a></li>
                            <li><a href="#">Mobile Apps</a></li>
                            <li><a href="#">Cloud Solutions</a></li>
                            <li><a href="#">AI & ML</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}>Contact Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Status</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} NovaTech Solutions. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
