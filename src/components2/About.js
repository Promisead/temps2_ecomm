import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div class="main" id="main">
        <section class="page-banner">
          <div class="container">
            <div class="page-banner-in">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-12">
                  <h1 class="page-banner-title text-uppercase">about us</h1>
                </div>
                <div class="col-xl-6 col-lg-6 col-12">
                  <ul class="right-side">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>About us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="pt-100">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 align-flax order-r-2">
                <div class="about-box about-box-text">
                  <h2 class="about-title text-uppercase">
                    THE NEW WAY TO SUCCESS
                  </h2>
                  <p class="about-des">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 order-r-1">
                <div class="about-box">
                  <img src="images/3.jpg" alt="about" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="team pt-100">
          <div class="container">
            <div class="team-inner owl-carousel">
              <div class="team-slide text-center">
                <div class="team-img position-r">
                  <img src="images/team-1.jpg" alt="team" />
                  <span class="quote-c">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                  </span>
                </div>
                <div class="team-desc">
                  <p class="member-detail">
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was make a type specimen
                    book. It has survived not only five centuries.
                  </p>
                  <h3 class="member-name text-uppercase">john Doe</h3>
                </div>
              </div>
              <div class="team-slide text-center">
                <div class="team-img position-r">
                  <img src="images/team-1.jpg" alt="team" />
                  <span class="quote-c">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                  </span>
                </div>
                <div class="team-desc">
                  <p class="member-detail">
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was make a type specimen
                    book. It has survived not only five centuries.
                  </p>
                  <h3 class="member-name text-uppercase">john Doe</h3>
                </div>
              </div>
              <div class="team-slide text-center">
                <div class="team-img position-r">
                  <img src="images/team-1.jpg" alt="team" />
                  <span class="quote-c">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                  </span>
                </div>
                <div class="team-desc">
                  <p class="member-detail">
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was make a type specimen
                    book. It has survived not only five centuries.
                  </p>
                  <h3 class="member-name text-uppercase">john Doe</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="brand pt-100">
          <div class="container">
            <div class="brand-salider owl-carousel">
              <div class="brand-box text-center">
                <Link to="#">
                  <img
                    src="images/brand-1.jpg"
                    alt="brand"
                    class="transition"
                  />
                </Link>
              </div>
              <div class="brand-box text-center">
                <Link to="#">
                  <img
                    src="images/brand-2.jpg"
                    alt="brand"
                    class="transition"
                  />
                </Link>
              </div>
              <div class="brand-box text-center">
                <Link to="#">
                  <img
                    src="images/brand-3.jpg"
                    alt="brand"
                    class="transition"
                  />
                </Link>
              </div>
              <div class="brand-box text-center">
                <Link to="#">
                  <img
                    src="images/brand-4.jpg"
                    alt="brand"
                    class="transition"
                  />
                </Link>
              </div>
              <div class="brand-box text-center">
                <Link to="#">
                  <img
                    src="images/brand-5.jpg"
                    alt="brand"
                    class="transition"
                  />
                </Link>
              </div>
              <div class="brand-box text-center">
                <Link to="#">
                  <img
                    src="images/brand-6.jpg"
                    alt="brand"
                    class="transition"
                  />
                </Link>
              </div>
              <div class="brand-box text-center">
                <Link to="#">
                  <img
                    src="images/brand-1.jpg"
                    alt="brand"
                    class="transition"
                  />
                </Link>
              </div>
              <div class="brand-box text-center">
                <Link to="#">
                  <img
                    src="images/brand-2.jpg"
                    alt="brand"
                    class="transition"
                  />
                </Link>
              </div>
              <div class="brand-box text-center">
                <Link to="#">
                  <img
                    src="images/brand-4.jpg"
                    alt="brand"
                    class="transition"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

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

export default About;
