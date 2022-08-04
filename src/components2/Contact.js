import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div class="main" id="main">
        <section class="page-banner">
          <div class="container">
            <div class="page-banner-in">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-12">
                  <h1 class="page-banner-title text-uppercase">Contact Us</h1>
                </div>
                <div class="col-xl-6 col-lg-6 col-12">
                  <ul class="right-side">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="contact-form pt-100">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="contact-box">
                  <ul>
                    <li>
                      <div class="contact-thumb">
                        <img src="images/location.png" alt="location" />
                      </div>
                      <div class="contact-box-detail">
                        <h2 class="contact-title text-uppercase">ADDRESS</h2>
                        <p>
                          Queens stae park city, Momin Tower 78, New York,WT47.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="contact-thumb">
                        <img src="images/mail.png" alt="mail" />
                      </div>
                      <div class="contact-box-detail">
                        <h2 class="contact-title text-uppercase">Email</h2>
                        <a href="mailto:eroxxoptions@exmaple.com">
                          eroxxoptions@exmaple.com, eroxxoptions@exmaple.com
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="contact-thumb">
                        <img src="images/admin.png" alt="user" />
                      </div>
                      <div class="contact-box-detail">
                        <h2 class="contact-title text-uppercase">Phone</h2>
                        <a href="tel:+911234567890">
                          +91 123 456 789 0, +91 123 456 789 0
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-8">
                <div class="contact-form-detail">
                  <h2 class="contact-head text-uppercase">LEAVE A MESSAGE</h2>
                  <form>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Name*"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Your Email*"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Phone*"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            placeholder="Massage"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-12">
                        <button class="btn btn-color">submit form</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="newsletter pt-100">
          <div class="container">
            <div class="newsletter-inner text-center ptb-100">
              <h2 class="newsletter-title">Sign up for Newsletter</h2>
              <p class="newsletter-sub">
                Wants to get latest updates! sign up for Free
              </p>
              <form>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <button type="submit" class="form-btn text-uppercase">
                  <span class="sub-r">Subscribe</span>
                  <i class="fa fa-send icon-r"></i>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
