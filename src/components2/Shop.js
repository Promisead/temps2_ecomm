import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import Product from "../components2/Product";

import axios from "axios";
//import data from "../data";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Shop = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Shop </title>
      </Helmet>
      <section class="page-banner">
        <div class="container">
          <div class="page-banner-in">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-12">
                <h1 class="page-banner-title text-uppercase">Shop</h1>
              </div>
              <div class="col-xl-6 col-lg-6 col-12">
                <ul class="right-side">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Shop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="product-list">
        <div class="container">
          <div class="row pt-100">
            <div class="col-xl-3 col-lg-4 col-12">
              <div class="sidebar">
                <div class="sidebar-default mb-30">
                  <div class="category-content">
                    <h2 class="cat-title text-uppercase">women</h2>
                    <ul class="category category-drop-down">
                      <li>
                        <span class="opener plus"></span>
                        <a href="javascript:void(0)">Top</a>
                        <ul class="category-sub">
                          <li>
                            <a href="#">Mid Waterproof</a>
                          </li>
                          <li>
                            <a href="#">Brogue shoe</a>
                          </li>
                          <li>
                            <a href="#">Firecamp</a>
                          </li>
                          <li>
                            <a href="#">Forclaz</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span class="opener plus"></span>
                        <a href="javascript:void(0)">Dresses</a>
                        <ul class="category-sub">
                          <li>
                            <a href="#">Mid Waterproof</a>
                          </li>
                          <li>
                            <a href="#">Brogue shoe</a>
                          </li>
                          <li>
                            <a href="#">Firecamp</a>
                          </li>
                          <li>
                            <a href="#">Forclaz</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span class="opener plus"></span>
                        <a href="javascript:void(0)">Celebrities dress</a>
                        <ul class="category-sub">
                          <li>
                            <a href="#">Mid Waterproof</a>
                          </li>
                          <li>
                            <a href="#">Brogue shoe</a>
                          </li>
                          <li>
                            <a href="#">Firecamp</a>
                          </li>
                          <li>
                            <a href="#">Forclaz</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="sidebar-default mb-30">
                  <div class="category-content">
                    <h2 class="cat-title text-uppercase">Filter By</h2>
                    <a class="btn small btn-filter" href="#">
                      <i class="fa fa-close"></i>
                      <span>Clear all</span>
                    </a>
                  </div>
                  <div class="category-content filter-by">
                    <h2 class="cat-title text-uppercase">Categories</h2>
                    <ul class="category">
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="Tops"
                            name="Tops"
                          />
                          <label for="Tops">Tops (08)</label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="Dresses"
                            name="Dresses"
                          />
                          <label for="Dresses">Dresses (10)</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="category-content filter-by">
                    <h2 class="cat-title text-uppercase">Size</h2>
                    <ul class="category">
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="s1"
                            name="s"
                          />
                          <label for="s1">S</label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="m"
                            name="m"
                          />
                          <label for="m">M</label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="l"
                            name="l"
                          />
                          <label for="l">L</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="category-content filter-by">
                    <h2 class="cat-title text-uppercase">Color</h2>
                    <ul class="category">
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="Beige"
                            name="Beige"
                          />
                          <label for="Beige" class="beige">
                            Beige (1)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="White"
                            name="White"
                          />
                          <label for="White" class="white">
                            White (2)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="Black"
                            name="Black"
                          />
                          <label for="Black" class="black">
                            Black (2)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="Orange"
                            name="Orange"
                          />
                          <label for="Orange" class="orange">
                            Orange (3)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="Blue"
                            name="Blue"
                          />
                          <label for="Blue" class="blue">
                            Blue (2)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="Green"
                            name="Green"
                          />
                          <label for="Green" class="green">
                            Green (1)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="Yellow"
                            name="Yellow"
                          />
                          <label for="Yellow" class="yellow">
                            Yellow (3)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="Pink"
                            name="Pink"
                          />
                          <label for="Pink" class="pink">
                            Pink (1)
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="category-content filter-by">
                    <h2 class="cat-title text-uppercase">Styles</h2>
                    <ul class="category">
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="Casual"
                            name="Casual"
                          />
                          <label for="Casual">Casual (9)</label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="Dressy"
                            name="Dressy"
                          />
                          <label for="Dressy">Dressy (1)</label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="Girly"
                            name="Girly"
                          />
                          <label for="Girly">Girly (3)</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="category-content filter-by">
                    <h2 class="cat-title text-uppercase">Compositions</h2>
                    <ul class="category">
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="Cotton"
                            name="Cotton"
                          />
                          <label for="Cotton">Cotton (8)</label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="Viscose"
                            name="Viscose"
                          />
                          <label for="Viscose">Viscose (1)</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="category-content filter-by">
                    <h2 class="cat-title text-uppercase">Price</h2>
                    <ul class="category">
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="price_1"
                            name="Cotton"
                          />
                          <label for="price_1">$68.00 - $72.00 (2)</label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="price_2"
                            name="Cotton"
                          />
                          <label for="price_2">$86.00 - $89.00 (1)</label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="price_3"
                            name="Cotton"
                          />
                          <label for="price_3">$99.00 - $103.00 (3)</label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="price_4"
                            name="Cotton"
                          />
                          <label for="price_4">$104.00 - $108.00 (2)</label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="price_5"
                            name="Cotton"
                          />
                          <label for="price_5">$109.00 - $113.00 (1)</label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="price_6"
                            name="Cotton"
                          />
                          <label for="price_6">$126.00 - $135.00 (2)</label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="price_7"
                            name="Cotton"
                          />
                          <label for="price_7">$209.00 - $217.00 (3)</label>
                        </div>
                      </li>
                      <li>
                        <div class="check-box">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="price_8"
                            name="Cotton"
                          />
                          <label for="price_8">$309.00 - $321.00 (1)</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="sidebar-default">
                  <div class="category-content">
                    <h2 class="cat-title latest-prod text-uppercase">
                      Latest products
                    </h2>
                    <div class="seller">
                      <div class="seller-box align-flax w-100 pb-10">
                        <div class="seller-img">
                          <a href="product-detail.html" class="display-b">
                            <img
                              src="images/product-1.jpg"
                              alt="shoes"
                              class="transition"
                            />
                          </a>
                        </div>
                        <div class="seller-contain pl-15">
                          <a
                            href="product-detail.html"
                            class="product-name text-uppercase"
                          >
                            men's harpoon 2 eye boot
                          </a>
                          <span class="product-pricce">$478.00</span>
                        </div>
                      </div>
                      <div class="seller-box align-flax w-100 pb-10">
                        <div class="seller-img">
                          <a href="product-detail.html" class="display-b">
                            <img
                              src="images/product-7.jpg"
                              alt="shoes"
                              class="transition"
                            />
                          </a>
                        </div>
                        <div class="seller-contain pl-15">
                          <a
                            href="product-detail.html"
                            class="product-name text-uppercase"
                          >
                            BUSCIPIT AT MAGNA
                          </a>
                          <span class="product-pricce">$478.00</span>
                        </div>
                      </div>
                      <div class="seller-box align-flax w-100 pb-10">
                        <div class="seller-img">
                          <a href="product-detail.html" class="display-b">
                            <img
                              src="images/product-3.jpg"
                              alt="shoes"
                              class="transition"
                            />
                          </a>
                        </div>
                        <div class="seller-contain pl-15">
                          <a
                            href="product-detail.html"
                            class="product-name text-uppercase"
                          >
                            AENEAN SAGITTIS
                          </a>
                          <span class="product-pricce">$478.00</span>
                        </div>
                      </div>
                      <div class="seller-box align-flax w-100">
                        <div class="seller-img">
                          <a href="product-detail.html" class="display-b">
                            <img
                              src="images/product-1.jpg"
                              alt="shoes"
                              class="transition"
                            />
                          </a>
                        </div>
                        <div class="seller-contain pl-15">
                          <a
                            href="product-detail.html"
                            class="product-name text-uppercase"
                          >
                            men's harpoon 2 eye boot
                          </a>
                          <span class="product-pricce">$478.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-8 col-12">
              <div class="shorting mb-30">
                <div class="row align-flax">
                  <div class="col-xl-6 col-lg-5 col-md-6 mb-r-15">
                    <div class="view">
                      <div class="list-types grid active">
                        <a href="shop.html">
                          <div class="grid-icon list-types-icon">
                            <i
                              class="fa fa-th-large transition"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </a>
                      </div>
                      <div class="list-types list">
                        <a href="shop-list.html">
                          <div class="list-icon list-types-icon">
                            <i
                              class="fa fa-bars transition"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="short-by">
                      <span>Product Compare (0)</span>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-7 col-md-6 text-right text-left-md">
                    <div class="show-item">
                      <span class="ml-0">Sort By:</span>
                      <div class="select-item">
                        <select class="m-w-130">
                          <option value="" selected="selected">
                            Default sorting
                          </option>
                          <option value="">Sort by popularity</option>
                          <option value="">Sort by average rating</option>
                        </select>
                      </div>
                    </div>
                    <div class="show-item float-right-md">
                      <span>Show</span>
                      <div class="select-item">
                        <select>
                          <option value="" selected="selected">
                            15
                          </option>
                          <option value="">12</option>
                          <option value="">6</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="featured">
                <div class="row">
                  {loading ? (
                    <div>Loading...</div>
                  ) : error ? (
                    <div>{error}</div>
                  ) : (
                    products.map((product) => (
                      <div
                        className="featured-product mb-25  product-img transition mb-15"
                        key={product.slug}
                      >
                        <Product product={product}></Product>
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div class="shorting pagination-1 mt-20">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="pagination-bar">
                      <ul>
                        <li class="active">
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-angle-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="show-item right-side float-none-md">
                      <span class="float-none-md d-block">
                        Showing 1 to 15 of 15 (1 Pages)
                      </span>
                    </div>
                  </div>
                </div>
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
    </>
  );
};

export default Shop;
