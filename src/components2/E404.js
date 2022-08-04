import React from "react";
import { Link } from "react-router-dom";

const E404 = () => {
  return (
    <>
      <div class="main" id="main">
        <section class="page-banner">
          <div class="container">
            <div class="page-banner-in">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-12">
                  <h1 class="page-banner-title text-uppercase">
                    404 - PAGE NOT FOUND
                  </h1>
                </div>
                <div class="col-xl-6 col-lg-6 col-12">
                  <ul class="right-side">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>404</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="pt-100 text-center">
          <div class="container">
            <div class="error-part">
              <div class="main-text">404</div>
              <h2 class="mb-30">Ooops! 404 - Page Not Found</h2>
              <Link to="/" class="btn btn-color">
                Back To Home
              </Link>
            </div>
          </div>
        </section>

        <div class="top-scrolling">
          <a href="#main" class="scrollTo">
            <i class="fa fa-angle-up" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default E404;
