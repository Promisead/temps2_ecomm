import React from "react";
/* import "../css/font-awesome.min.css";
import "../css/bootstrap.min.css";
import "../css/magnific-popup.css";
//import "../css/glass-case.css"
import "../css/shoes.css";
import "../css/responsive.css";
import "../css/responsive.css"; */

const ProductE = () => {
  return (
    <>
      <div class="main" id="main">
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
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>Shop Detail</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="product-detail-main pt-100">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-md-6 col-12">
                <div class="align-center mb-md-30">
                  <ul id="glasscase" class="gc-start">
                    <li>
                      <img src="images/12.jpg" alt="product" />
                    </li>
                    <li>
                      <img src="images/13.jpg" alt="product" />
                    </li>
                    <li>
                      <img src="images/14.jpg" alt="product" />
                    </li>
                    <li>
                      <img src="images/15.jpg" alt="product" />
                    </li>
                    <li>
                      <img src="images/16.jpg" alt="product" />
                    </li>
                    <li>
                      <img src="images/17.jpg" alt="product" />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-7 col-md-6 col-12">
                <div class="product-detail-in">
                  <h2 class="product-item-name text-uppercase">
                    men's harpoon 2 eye boot
                  </h2>
                  <div class="price-box">
                    <span class="price">$80.00</span>
                    <del class="price old-price">$120.00</del>
                    <div class="rating-summary-block">
                      <div class="star-rating">
                        <input
                          id="star-5"
                          type="radio"
                          name="rating"
                          value="star-5"
                        />
                        <label for="star-5" title="5 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input
                          id="star-4"
                          type="radio"
                          name="rating"
                          value="star-4"
                        />
                        <label for="star-4" title="4 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input
                          id="star-3"
                          type="radio"
                          name="rating"
                          value="star-3"
                        />
                        <label for="star-3" title="3 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input
                          id="star-2"
                          type="radio"
                          name="rating"
                          value="star-2"
                        />
                        <label for="star-2" title="2 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input
                          id="star-1"
                          type="radio"
                          name="rating"
                          value="star-1"
                        />
                        <label for="star-1" title="1 star">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                      </div>
                      <a href="#product-review" class="scrollTo">
                        <span>1 Review (s)</span>
                      </a>
                    </div>
                    <div class="product-des">
                      <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco aboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in oluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div>
                    <ul>
                      <li>
                        <i class="fa fa-check"></i> Satisfaction 100% Guaranteed
                      </li>
                      <li>
                        <i class="fa fa-check"></i> Free shipping on orders over
                        $99
                      </li>
                      <li>
                        <i class="fa fa-check"></i> 14 day easy Return
                      </li>
                    </ul>
                    <div class="row mt-20">
                      <div class="col-12">
                        <div class="table-listing qty">
                          <label>Qty:</label>
                          <div class="fill-input">
                            <button type="button" id="sub" class="sub cou-sub">
                              <i class="fa fa-minus" aria-hidden="true"></i>
                            </button>
                            <input
                              type="number"
                              id="1"
                              class="input-text qty"
                              value="1"
                              min="1"
                              max="3"
                            />
                            <button type="button" id="add" class="add cou-sub">
                              <i class="fa fa-plus" aria-hidden="true"></i>
                            </button>
                          </div>
                        </div>
                        <div class="table-listing qty">
                          <label>Size:</label>
                          <div class="fill-input">
                            <select class="selectpicker full">
                              <option selected="selected" value="#">
                                8
                              </option>
                              <option value="#">7</option>
                              <option value="#">6</option>
                            </select>
                          </div>
                        </div>
                        <div class="table-listing qty">
                          <label>Color:</label>
                          <div class="fill-input">
                            <select class="selectpicker full">
                              <option selected="selected" value="#">
                                Blue
                              </option>
                              <option value="#">Green</option>
                              <option value="#">Orange</option>
                              <option value="#">White</option>
                            </select>
                          </div>
                        </div>
                        <div class="product-action">
                          <ul>
                            <li>
                              <a href="cart.html" class="btn btn-color">
                                <img src="images/shop-bag.png" alt="bag" />
                                <span>add to cart</span>
                              </a>
                            </li>
                            <li>
                              <a href="wishlist.html" class="btn">
                                <i class="fa fa-heart" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="product-detail-tab pt-100" id="product-review">
          <div class="container">
            <div class="product-review">
              <ul id="tabs" class="review-tab nav nav-tabs" role="tablist">
                <li role="presentation" class="tab-link">
                  <a
                    href="#description"
                    role="tab"
                    class="active"
                    data-toggle="tab"
                  >
                    Description
                  </a>
                </li>
                <li role="presentation" class="tab-link">
                  <a href="#review" role="tab" data-toggle="tab">
                    Review
                  </a>
                </li>
              </ul>
              <div class="product-review-des tab-content">
                <div
                  role="tabpanel"
                  class="product-review-in product-review-des tab-pane fade active show"
                  id="description"
                >
                  <h2>Nunc lobortis bibendum elementum.</h2>
                  <p>
                    Mauris felis neque, hendrerit id velit a, sollicitudin
                    gravida nunc in velit lectus, varius quis pretium fermentum,
                    faucibus vel ante etiam justo nulla, condimentum sit amet
                    urna eget, rutrum auctor massa suspendisse sit amet odio et
                    dui lobortis iaculis phasellus sagittis interdum neque,
                    fermentum gravida ante maximus sed nunc lobortis bibendum
                    elementum integer rhoncus et libero ut suscipit aliquam non
                    ligula id dui consequat viverra a ut sem pellentesque et
                    sapien eget lorem viverra dignissim. Mauris felis neque,
                    hendrerit id velit a, sollicitudin gravida nunc in velit
                    lectus, varius quis pretium fermentum, faucibus vel ante
                    etiam justo nulla, condimentum sit amet urna eget, rutrum
                    auctor massa suspendisse sit amet odio et dui lobortis
                    iaculis phasellus sagittis interdum neque, fermentum gravida
                    ante maximus sed nunc lobortis bibendum elementum integer
                    rhoncus et libero ut suscipit aliquam non ligula id dui
                    consequat viverra a ut sem pellentesque et sapien eget lorem
                    viverra dignissim.
                  </p>
                  <ul>
                    <li>
                      <i class="fa fa-angle-right" aria-hidden="true"></i>{" "}
                      Sweetheart neckline
                    </li>
                    <li>
                      <i class="fa fa-angle-right" aria-hidden="true"></i>{" "}
                      Unlined
                    </li>
                    <li>
                      <i class="fa fa-angle-right" aria-hidden="true"></i>{" "}
                      Shell: 96% polyester, 4% spandex
                    </li>
                  </ul>
                </div>
                <div
                  role="tabpanel"
                  class="product-review-in product-review-com tab-pane fade"
                  id="review"
                >
                  <div class="comment-part">
                    <h3>03 COMMENTS</h3>
                    <ul>
                      <li>
                        <div class="comment-user">
                          <img
                            src="images/comment-img1.jpg"
                            alt="comment-img"
                          />
                        </div>
                        <div class="comment-detail">
                          <span class="commenter">
                            <span>John Doe</span> (05 Jan 2020)
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet adipiscing elit labore
                            dolore that sed do eiusmod tempor labore dolore that
                            magna aliqua. Ut enim ad minim veniam, exercitation.
                          </p>
                          <a href="#" class="reply-btn btn btn-color small">
                            Reply
                          </a>
                        </div>
                        <div class="clearfix"></div>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <div class="comment-user">
                              <img
                                src="images/comment-img2.jpg"
                                alt="comment-img"
                              />
                            </div>
                            <div class="comment-detail">
                              <span class="commenter">
                                <span>John Doe</span> (12 Jan 2020)
                              </span>
                              <p>
                                Lorem ipsum dolor sit amet adipiscing elit
                                labore dolore that sed do eiusmod tempor labore
                                dolore that magna aliqua. Ut enim ad minim
                                veniam, exercitation.
                              </p>
                              <a href="#" class="reply-btn btn btn-color small">
                                Reply
                              </a>
                            </div>
                            <div class="clearfix"></div>
                          </li>
                          <li>
                            <div class="comment-user">
                              <img
                                src="images/comment-img3.jpg"
                                alt="comment-img"
                              />
                            </div>
                            <div class="comment-detail">
                              <span class="commenter">
                                <span>John Doe</span> (15 Jan 2020)
                              </span>
                              <p>
                                Lorem ipsum dolor sit amet adipiscing elit
                                labore dolore that sed do eiusmod tempor labore
                                dolore that magna aliqua. Ut enim ad minim
                                veniam, exercitation.
                              </p>
                              <a href="#" class="reply-btn btn btn-color small">
                                Reply
                              </a>
                            </div>
                            <div class="clearfix"></div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div class="leave-comment-part pt-100">
                    <h3 class="reviews-head mb-30">Leave A Comment</h3>
                    <form class="main-form">
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Name"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Subject"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Email"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              placeholder="Message"
                              rows="8"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-12">
                          <button type="submit" class="btn post-comm">
                            Post Comment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="featured pt-100">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h2 class="related-title">Related ProductE</h2>
              </div>
              <div class="featured-product mb-25">
                <div class="product-img transition mb-15">
                  <a href="product-detail.html">
                    <img
                      src="images/product-1.jpg"
                      alt="product"
                      class="transition"
                    />
                  </a>
                  <div class="new-label">
                    <span class="text-uppercase">New</span>
                  </div>
                  <div class="product-details-btn text-uppercase text-center transition">
                    <a href="product-quick-view.html" class="quick-popup">
                      Quick View
                    </a>
                  </div>
                </div>
                <div class="product-desc">
                  <a
                    href="product-detail.html"
                    class="product-name text-uppercase"
                  >
                    men's harpoon 2 eye boo
                  </a>
                  <span class="product-pricce">$478.00</span>
                </div>
              </div>
              <div class="featured-product mb-25">
                <div class="product-img transition mb-15">
                  <a href="product-detail.html">
                    <img
                      src="images/product-2.jpg"
                      alt="product"
                      class="transition"
                    />
                  </a>
                  <div class="product-details-btn text-uppercase text-center transition">
                    <a href="product-quick-view.html" class="quick-popup">
                      Quick View
                    </a>
                  </div>
                </div>
                <div class="product-desc">
                  <a
                    href="product-detail.html"
                    class="product-name text-uppercase"
                  >
                    AENEAN EU TRISTIQUE
                  </a>
                  <span class="product-pricce">$478.00</span>
                </div>
              </div>
              <div class="featured-product mb-25">
                <div class="product-img transition mb-15">
                  <a href="product-detail.html">
                    <img
                      src="images/product-3.jpg"
                      alt="product"
                      class="transition"
                    />
                  </a>
                  <div class="sale-label">
                    <span class="text-uppercase">sale</span>
                  </div>
                  <div class="product-details-btn text-uppercase text-center transition">
                    <a href="product-quick-view.html" class="quick-popup">
                      Quick View
                    </a>
                  </div>
                </div>
                <div class="product-desc">
                  <a
                    href="product-detail.html"
                    class="product-name text-uppercase"
                  >
                    AENEAN SAGITTIS
                  </a>
                  <span class="product-pricce">$478.00</span>
                </div>
              </div>
              <div class="featured-product mb-25">
                <div class="product-img transition mb-15">
                  <a href="product-detail.html">
                    <img
                      src="images/product-4.jpg"
                      alt="product"
                      class="transition"
                    />
                  </a>
                  <div class="product-details-btn text-uppercase text-center transition">
                    <a href="product-quick-view.html" class="quick-popup">
                      Quick View
                    </a>
                  </div>
                </div>
                <div class="product-desc" data-category="accessories">
                  <a
                    href="product-detail.html"
                    class="product-name text-uppercase"
                  >
                    ALIQUAM LOBORTIS EST
                  </a>
                  <span class="product-pricce">$478.00</span>
                </div>
              </div>
              <div class="featured-product mb-25">
                <div class="product-img transition mb-15">
                  <a href="product-detail.html">
                    <img
                      src="images/product-5.jpg"
                      alt="product"
                      class="transition"
                    />
                  </a>
                  <div class="product-details-btn text-uppercase text-center transition">
                    <a href="product-quick-view.html" class="quick-popup">
                      Quick View
                    </a>
                  </div>
                </div>
                <div class="product-desc">
                  <a
                    href="product-detail.html"
                    class="product-name text-uppercase"
                  >
                    AUCTOR GRAVIDA ENIM
                  </a>
                  <span class="product-pricce">$478.00</span>
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
export default ProductE;
