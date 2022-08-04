import React from 'react'

const Footer = () => {
  return (
    <div>    <footer className="footer pt-100">
    <div className="container">
      <div className="footer-inner">
        <div className="footer-box">
          <div className="footer-logo">
            <a href="index.html">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipi-scing elit. In
            purus sem, consectetur sed aliquam vel, hendrerit in elit. Nunc
            interdum dolor at quam pulvinar sodales. Nunc venenatis egestas
            mi ac fermentum.
          </p>
        </div>
        <div className="footer-box footer-static">
          <span className="opener plus"></span>
          <h2 className="footer-title text-uppercase">Our company</h2>
          <ul className="footer-block-contant">
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Order History</a>
            </li>
            <li>
              <a href="wishlist.html">Wish List</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
            <li>
              <a href="#">Gift Certificates</a>
            </li>
          </ul>
        </div>
        <div className="footer-box footer-static">
          <span className="opener plus"></span>
          <h2 className="footer-title text-uppercase">Information</h2>
          <ul className="footer-block-contant">
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="#">Delivery Information</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="contact.html">Contact Us</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
          </ul>
        </div>
        <div className="footer-box footer-static m-0">
          <span className="opener plus"></span>
          <h2 className="footer-title text-uppercase">Your Account</h2>
          <ul className="footer-block-contant">
            <li>
              <a href="#">Running Shoes</a>
            </li>
            <li>
              <a href="#">Football Shoes</a>
            </li>
            <li>
              <a href="#">Basketball Shoes</a>
            </li>
            <li>
              <a href="#">Volleyball Shoes</a>
            </li>
            <li>
              <a href="#">Trainee Shoes</a>
            </li>
          </ul>
        </div>
        <div className="footer-box footer-contact footer-static m-0">
          <span className="opener plus"></span>
          <h2 className="footer-title text-uppercase">Contact us</h2>
          <ul className="footer-block-contant">
            <li>
              <img src="images/cont-1.png" alt="img" />
              <span>
                28 Green Tower, Street Name <br />
                New York City, USA
              </span>
            </li>
            <li>
              <img src="images/cont-2.png" alt="img" />
              <a href="tel:+911234567890">+ 91 123 456 789 0</a>
            </li>
            <li>
              <img src="images/cont-3.png" alt="img" />
              <a href="mailto:roxxoptions@example.com">
                roxxoptions@example.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy-right mt-100">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <p className="copyright-text">
              &#169; All Rights Reserved by <a href="#">roxxoptions</a>
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer