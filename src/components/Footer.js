import React from 'react';
// import css styles
import '../styles/Basic.css';
import '../styles/Footer.css'

function Footer() {

  return (
    <div className="footer-clean">
        <footer>
            <div className="foot">
                <div className="build">
                    <div className="contact">
                        <h3>Github</h3>
                        <ul>
                            <li ><a href="https://github.com/JWLeamy"><i class="fa-brands fa-github"></i></a></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h3>Email Me</h3>
                        <ul>
                            <li><a href="mailto:jwleamy@gmail.com"><i class="fa-solid fa-envelope"></i></a></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h3>LinkedIn</h3>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/john-leamy-b68676238/"><i class="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="copyright">John W Leamy © 2023</p>
        </footer>
    </div>
  );
}

export default Footer;