import React from "react";
import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { toast } from "react-toastify";
import { getError } from "../utils";

const Register = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const { data } = await Axios.post("/api/users/signup", {
        name,
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
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div class="main" id="main">
        <section class="page-banner">
          <div class="container">
            <div class="page-banner-in">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-12">
                  <h1 class="page-banner-title text-uppercase">REGISTER</h1>
                </div>
                <div class="col-xl-6 col-lg-6 col-12">
                  <ul class="right-side">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Register</li>
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
                CREATE ACCOUNT
              </h2>
              <form onSubmit={submitHandler} class="checkout-form">
                <div class="form-group">
                  <label class="form-label">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/*   <div class="form-group">
                  <label class="form-label">Last Name</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Last Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div> */}
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
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label class="form-label">Re-enter Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Re-enter Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
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
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
                <div class="new-account text-center mt-20">
                  <span>Already have an account with us</span>
                  <Link
                    to={`/login?redirect=${redirect}`}
                    class="link"
                    title="Create New Account"
                  >
                    Login Here
                  </Link>
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
      </div>
    </>
  );
};

export default Register;
