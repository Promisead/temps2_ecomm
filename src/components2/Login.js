import React from "react";
import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { toast } from "react-toastify";
import { getError } from "../utils";

export default function Login() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post("/api/users/signin", {
        email,
        password,
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <>
      <div class="main" id="main">
        <section class="page-banner">
          <div class="container">
            <div class="page-banner-in">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-12">
                  <h1 class="page-banner-title text-uppercase">Login</h1>
                </div>
                <div class="col-xl-6 col-lg-6 col-12">
                  <ul class="right-side">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="login pt-100">
          <div class="container">
            <div class="billing-details">
              <h2 class="checkout-title text-uppercase text-center mb-30">
                <Helmet>
                  <title>CUSTOMER LOGIN</title>
                </Helmet>
              </h2>
              <form class="checkout-form" onSubmit={submitHandler}>
                <div class="form-group">
                  <label class="form-label">Email address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email Address"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter your Password"
                    require
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="login-btn-g">
                  <div class="row">
                    <div class="col-6">
                      <div class="check-box">
                        <span>
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="account"
                            name="Create an Account?"
                          />
                          <label for="account">Remember Me</label>
                        </span>
                      </div>
                    </div>
                    <div class="col-6">
                      <button
                        name="submit"
                        type="submit"
                        class="btn btn-color right-side"
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <a
                    title="Forgot Password"
                    class="link forgot-password mtb-20"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div class="new-account text-center mt-20">
                  <div className="mb-3">
                    Don't have an account?
                    <Link to={`/register?redirect=${redirect} `}>
                      Create your account
                    </Link>
                  </div>
                </div>
              </form>
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

        <div class="top-scrolling">
          <a href="#main" class="scrollTo">
            <i class="fa fa-angle-up" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </>
  );
}
