import React from 'react'
import '../css/Footer.css'
import { useEffect } from 'react';
const Footer = () => {
    useEffect(() => {
        // Ensure the DOM is fully loaded
        const handleRaindrops = () => {
          window.jQuery('#waterdrop').raindrops({
            color: '#1c1f2f',
            canvasHeight: 150,
            density: 0.1,
            frequency: 20,
          });
        };
    
        // Call the function when the component mounts
        handleRaindrops();
      }, []); // Empty dependency array ensures the effect runs only once when the component mounts
    
  return (
    <section className='footer'>
    <div className="page-wrapper">
    <div id="waterdrop"></div>
    <footer>
      <div className="footer-top">
        <div className="pt-exebar">
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 footer-col-3">
              <div className="widget footer_widget">
                <h5 className="footer-title">Address</h5>
                <div className="gem-contacts">
                  <div className="gem-contacts-item gem-contacts-address">Corporate Office :<br/> Doon House, B-275(A), First floor
                    Sector-57, Shushant Lok 3
                    Near Hong Kong Bazzar, Gurugram Pin 122001, Haryana.
                  </div>
                  <div className="gem-contacts-item gem-contacts-phone"><i className="fa fa-phone" aria-hidden="true"></i> Phone: <a href="">+91-9122588799</a></div>

                  <div className="gem-contacts-item gem-contacts-address mt-2">Reg. Office :<br/> Doon House, D2/3,
                    4th Floor, Chandra Tower, IDBI Bank Building
                    Dimna Road, Mango, Jamshedpur-831012, Jharkhand.</div>
                  <div className="gem-contacts-item gem-contacts-phone"><i className="fa fa-phone" aria-hidden="true"></i> Phone: <a>+91 9122588799</a></div>

                </div>
              </div>

            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
              <div className="row">
                <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="widget footer_widget">
                    <h5 className="footer-title">Recent News</h5>
                    <ul className="posts  styled">
                      <li className="clearfix gem-pp-posts">
                        <div className="gem-pp-posts-text">
                          <div className="gem-pp-posts-item">
                            <a href="#">Want to start Your Own Play School.
                            </a>
                          </div>
                          <div className="gem-pp-posts-date">Call +91-9122588799</div>
                        </div>
                      </li>
                      <li className="clearfix gem-pp-posts">
                        <div className="gem-pp-posts-text">
                          <div className="gem-pp-posts-item">
                            <a href="#">Now we are in Faridabad,Now we are in DaudNagar.
                            </a>
                          </div>
                          <div className="gem-pp-posts-date">Call +91-9122588799, +91-9122588799</div>
                        </div>
                      </li>
                      <li className="clearfix gem-pp-posts">
                        <div className="gem-pp-posts-text">
                          <div className="gem-pp-posts-item">
                            <a href="">Now we are in Ranchi, Admission open
                            </a>
                          </div>
                          <div className="gem-pp-posts-date">Call +91-9122588799, +91-9122588799</div>
                        </div>
                      </li>

                    </ul>
                  </div>
                </div>
                <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="widget">
                    <h5 className="footer-title">Email Us</h5>
                    <div className="textwidget">
                      <div role="form" className="wpcf7" id="wpcf7-f4-o1" lang="en-US" dir="ltr">

                        <form method="post" className="wpcf7-form" novalidate="novalidate">

                          <div className="contact-form-footer">
                            <p><span className="wpcf7-form-control-wrap your-first-name"><input type="text" name="your-first-name" value="" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Your name"/></span></p>
                            <p><span className="wpcf7-form-control-wrap your-email_1"><input type="email" name="your-email_1" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email" aria-invalid="false" placeholder="Your email"/></span></p>
                            <p><span className="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Your message"></textarea></span></p>
                            <div><input type="submit" value="Send" className="wpcf7-form-control wpcf7-submit"/><span className="ajax-loader"></span></div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-5 col-sm-12 footer-col-4">
              <div className="widget widget_gallery gallery-grid-4">
                <h5 className="footer-title">Our Gallery</h5>
                <ul className="magnific-image">

                  <li><a className="magnific-anchor"><img src="https://navodayatrendz.in/wp-content/uploads/2023/09/1.webp" alt=""/></a></li>
                  <li><a className="magnific-anchor"><img src="https://navodayatrendz.in/wp-content/uploads/2023/09/navodayan-designs-tshirt-3.jpg" alt=""/></a></li>
                  <li><a className="magnific-anchor"><img src="https://navodayatrendz.in/wp-content/uploads/2022/04/Navodayan-design-tshirt-59.jpg" alt=""/></a></li>
                  <li><a className="magnific-anchor"><img src="https://navodayatrendz.in/wp-content/uploads/2023/03/2.jpg" alt=""/></a></li>
                  <li><a className="magnific-anchor"><img src="https://navodayatrendz.in/wp-content/uploads/2023/04/12-resized.jpg" alt=""/></a></li>
                  <li><a className="magnific-anchor"><img src="https://navodayatrendz.in/wp-content/uploads/2022/02/2-2.png" alt=""/></a></li>
                  <li><a className="magnific-anchor"><img src="https://navodayatrendz.in/wp-content/uploads/2023/08/Navodayan-bottle-11.jpg" alt=""/></a></li>
                  <li><a className="magnific-anchor"><img src="https://navodayatrendz.in/wp-content/uploads/2023/08/6-eyeware-cases-4.jpg" alt=""/></a></li>
                  <li><a className="magnific-anchor"><img src="https://navodayatrendz.in/wp-content/uploads/2023/08/8-card-holder-6.jpg" alt=""/></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">

            <div className="col-md-3">
              <div className="footer-site-info">2020 © <a href="https://www.youtube.com/watch?v=pdr4IzBpacI&t=34s" target="_blank">Top HTML & CSS Program </a></div>
            </div>

            <div className="col-md-6">
              <nav id="footer-navigation" className="site-navigation footer-navigation centered-box" role="navigation">
                <ul id="footer-menu" className="nav-menu styled clearfix inline-inside">
                  <li id="menu-item-26" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"><a href="#">Support</a></li>
                  <li id="menu-item-27" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"><a href="#">Contact Us</a></li>
                  <li id="menu-item-28" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"><a href="#">Disclaimer</a></li>
                  <li id="menu-item-29" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29"><a href="#">Add more</a></li>
                </ul>
              </nav>
            </div>

            <div className="col-md-3">
              <div id="footer-socials">
                <div className="socials inline-inside socials-colored">

                  <a href="#" target="_blank" title="Facebook" className="socials-item">
                    <i className="fab fa-facebook-f facebook"></i>
                  </a>
                  <a href="#" target="_blank" title="Twitter" className="socials-item">
                    <i className="fab fa-twitter twitter"></i>

                  </a>
                  <a href="#" target="_blank" title="Instagram" className="socials-item">
                    <i className="fab fa-instagram instagram"></i>
                  </a>
                  <a href="#" target="_blank" title="YouTube" className="socials-item">
                    <i className="fab fa-youtube youtube"></i>
                  </a>
                  <a href="#" target="_blank" title="Telegram" className="socials-item">
                    <i className="fab fa-telegram telegram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  </section>
  )
}

export default Footer;
