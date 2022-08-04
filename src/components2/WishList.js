import React from "react";

const WishList = () => {
  return (
    <>
      <div class="main" id="main">
        <section class="page-banner">
          <div class="container">
            <div class="page-banner-in">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-12">
                  <h1 class="page-banner-title text-uppercase">Wishlist</h1>
                </div>
                <div class="col-xl-6 col-lg-6 col-12">
                  <ul class="right-side">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Wishlist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="pt-100">
          <div class="container">
            <div class="wishlist-table">
              <div class="responsive-table">
                <table class="table border text-center">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Stock</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-left">
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
                            <a href="#" class="close-table">
                              x
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>In Stock</td>
                      <td>
                        <span class="price">$478.00</span>
                      </td>
                      <td>
                        <ul>
                          <li>
                            <a href="cart.html">
                              <i
                                class="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-trash-o" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left">
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
                            <a href="#" class="close-table">
                              x
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>In Stock</td>
                      <td>
                        <span class="price">$478.00</span>
                      </td>
                      <td>
                        <ul>
                          <li>
                            <a href="cart.html">
                              <i
                                class="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-trash-o" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="share-wishlist">
                <a href="#" class="btn btn-color">
                  Share Wishlist{" "}
                </a>
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

        <div class="top-scrolling">
          <a href="#main" class="scrollTo">
            <i class="fa fa-angle-up" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default WishList;
