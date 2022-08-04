import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { toast } from "react-toastify";
import { getError } from "../utils";
import axios from "axios";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";

import { useContext, useEffect, useState } from "react";
import { Store } from "../Store";

const Navbar3 = () => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/login";
  };
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <header class="header transition">
        <div class="container position-r">
          <div class="row">
            <div class="col-lg-2 col-md-4 col-6 align-flax">
              <div class="navbar-header">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <img alt="logo" src="images/logo.png" class="transition" />
                </Link>
              </div>
            </div>
            <div class="col-lg-10 col-md-8 col-6 position-i">
              <div
                className={
                  click ? "menu-left transition active" : "menu-left transition"
                }
              >
                <div class="menu ">
                  <ul>
                    <li className="nav-item">
                      <Link
                        to="/"
                        className="nav-links"
                        onClick={closeMobileMenu}
                        style={{ textDecoration: "none" }}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <span
                        class="opener plus"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                      ></span>
                      <Link
                        to="#"
                        onClick={closeMobileMenu}
                        style={{ textDecoration: "none" }}
                      >
                        Pages
                      </Link>
                      {dropdown && <Dropdown />}
                      {/*  <div class="megamenu">
                        <div class="megamenu-inner">
                          <ul>
                            <li>
                              <Link to="/about">About Us</Link>
                            </li>
                      */}
                      {/*  <li>
                              <Link to="/shop">Shop List</Link>
                            </li>
                            <li>
                              <Link to="/product">Product Detail</Link>
                            </li> */}
                      {/*        <li>
                              <Link to="/wishlist">Wishlist</Link>
                            </li>
                            <li>
                              <Link to="/404">404</Link>
                            </li>
                          </ul>
                        </div>
                      </div>*/}
                    </li>
                    <li>
                      <Link
                        to="/shop"
                        onClick={closeMobileMenu}
                        style={{ textDecoration: "none" }}
                      >
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={closeMobileMenu}
                        to={`/community?redirect=${redirect}`}
                      >
                        Community
                      </Link>
                      {/*   <Link to="/community" style={{ textDecoration: "none" }}>
                        
                      </Link> */}
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        onClick={closeMobileMenu}
                        style={{ textDecoration: "none" }}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="search-right">
                {/* Responsive Hamburger */}
                <div class="menu-toggle" onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <div class="search-menu">
                  <SearchBox />
                  {/*   <input
                    type="text"
                    name="search"
                    class="search-input"
                    placeholder="Search text"
                  />
                  <input type="submit" name="submit" class="search-btn" />
                  <div class="search-button-i transition">
                    <img
                      src="images/search.png"
                      class="position-r transition"
                      alt="search"
                    />
                  </div>
               */}{" "}
                </div>
                <ul class="login-cart">
                  <li>
                    <div class="login-head" style={{ fontSize: "20px" }}>
                      <div className="login-head" style={{ fontSize: "auto" }}>
                        {userInfo ? (
                          <NavDropdown
                            title={userInfo.name}
                            id="basic-nav-dropdown"
                          >
                            <LinkContainer to="/profile">
                              <NavDropdown.Item>User</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/orderhistory">
                              <NavDropdown.Item>Order</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <Link
                              className="dropdown-item"
                              to="#signout"
                              onClick={signoutHandler}
                            >
                              SignOut
                            </Link>
                          </NavDropdown>
                        ) : (
                          <Link className="login-head" to="/login">
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                          </Link>
                        )}
                        {userInfo && userInfo.isAdmin && (
                          <NavDropdown title="Admin" id="admin-nav-dropdown">
                            <LinkContainer to="/admin/dashboard">
                              <NavDropdown.Item>Dashboard</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/admin/productlist">
                              <NavDropdown.Item>Products</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/admin/orderlist">
                              <NavDropdown.Item>Orders</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/admin/userlist">
                              <NavDropdown.Item>Users</NavDropdown.Item>
                            </LinkContainer>
                          </NavDropdown>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cart-menu">
                      <div className="cart-icon position-r">
                        <Link
                          to="/cart"
                          class="position-r transition"
                          alt="cart"
                        >
                          <i
                            class="fas fa-shopping-cart"
                            style={{ fontSize: "23px", color: "whitesmoke" }}
                          >
                            {cart.cartItems.length > 0 && (
                              <Badge pill bg="danger">
                                {cart.cartItems.reduce(
                                  (a, c) => a + c.quantity,
                                  0
                                )}
                              </Badge>
                            )}
                          </i>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Navbar3;
