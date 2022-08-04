import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logger from "use-reducer-logger";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components2/LoadingBox";
import MessageBox from "../components2/MessageBox";

// import data from '../data' **FrontEnd Data;
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

const Index = () => {
  //Backend Data Call
  //const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/products");
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
      //setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <section class="featured pt-100">
        <div class="container">
          <div class="row mb-25">
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="hading">
                <h2 class="hading-title">
                  FEATURED <span>PRODUCTS</span>
                </h2>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
              <ul
                id="tabs"
                class="product-isotop filters-product text-right text-uppercase nav nav-tabs"
                role="tablist"
              >
                <li role="presentation" class="transition" data-filter="*">
                  <a href="#all" class="active" role="tab" data-toggle="tab">
                    all
                  </a>
                </li>
                <li role="presentation" class="transition" data-filter=".shoes">
                  <a href="#shoes" role="tab" data-toggle="tab">
                    Shoes
                  </a>
                </li>
                <li role="presentation" class="transition" data-filter=".women">
                  <a href="#women" role="tab" data-toggle="tab">
                    Women
                  </a>
                </li>
                <li
                  role="presentation"
                  class="transition"
                  data-filter=".accessories"
                >
                  <a href="#accessories" role="tab" data-toggle="tab">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-content">
            <Helmet>
              <title>Home Page</title>
            </Helmet>
            <div role="tabpanel" class="row tab-pane fade active show" id="all">
              {loading ? (
                <LoadingBox></LoadingBox>
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (
                products.map((product) => (
                  <div
                    className="featured-product mb-25  product-img transition mb-15"
                    key={product.slug}
                  >
                    <Link to={`/product/${product.slug}`}>
                      <img src={product.image} alt={product.name} />
                    </Link>
                    <div className="product-info">
                      <Link to={`/product/${product.slug}`}>
                        <p>{product.name}</p>
                      </Link>
                      <p>
                        <strong>${product.price}</strong>
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div role="tabpanel" class="row tab-pane fade" id="shoes">
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
              <div class="featured-product mb-25">
                <div class="product-img transition mb-15">
                  <a href="product-detail.html">
                    <img
                      src="images/product-6.jpg"
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
                    BLIQUAM LOBORTIS
                  </a>
                  <span class="product-pricce">$478.00</span>
                </div>
              </div>
              <div class="featured-product mb-25">
                <div class="product-img transition mb-15">
                  <a href="product-detail.html">
                    <img
                      src="images/product-7.jpg"
                      alt="product"
                      class="transition"
                    />
                  </a>
                  <div class="new-label">
                    <span class="text-uppercase">New</span>
                  </div>
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
                    BUSCIPIT AT MAGNA
                  </a>
                  <span class="product-pricce">$478.00</span>
                </div>
              </div>
              <div class="featured-product mb-25">
                <div class="product-img transition mb-15">
                  <a href="product-detail.html">
                    <img
                      src="images/product-8.jpg"
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
                    CONDIMENTUM POSUERE
                  </a>
                  <span class="product-pricce">$478.00</span>
                </div>
              </div>
              <div class="featured-product mb-25">
                <div class="product-img transition mb-15">
                  <a href="product-detail.html">
                    <img
                      src="images/product-9.jpg"
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
                    DIGNISSIM VENENATIS
                  </a>
                  <span class="product-pricce">$478.00</span>
                </div>
              </div>
              <div class="featured-product mb-25">
                <div class="product-img transition mb-15">
                  <a href="product-detail.html">
                    <img
                      src="images/product-10.jpg"
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
                    ELEIFEND ARCU
                  </a>
                  <span class="product-pricce">$478.00</span>
                </div>
              </div>
            </div>
            <div role="tabpanel" class="row tab-pane fade" id="women">
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
              <div class="featured-product mb-25">
                <div class="product-img transition mb-15">
                  <a href="product-detail.html">
                    <img
                      src="images/product-6.jpg"
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
                    BLIQUAM LOBORTIS
                  </a>
                  <span class="product-pricce">$478.00</span>
                </div>
              </div>
              <div class="featured-product mb-25">
                <div class="product-img transition mb-15">
                  <a href="product-detail.html">
                    <img
                      src="images/product-7.jpg"
                      alt="product"
                      class="transition"
                    />
                  </a>
                  <div class="new-label">
                    <span class="text-uppercase">New</span>
                  </div>
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
                    BUSCIPIT AT MAGNA
                  </a>
                  <span class="product-pricce">$478.00</span>
                </div>
              </div>
            </div>
            <div role="tabpanel" class="row tab-pane fade" id="accessories">
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
              <div class="featured-product mb-25">
                <div class="product-img transition mb-15">
                  <a href="product-detail.html">
                    <img
                      src="images/product-6.jpg"
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
                    BLIQUAM LOBORTIS
                  </a>
                  <span class="product-pricce">$478.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="best-seller pt-100">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-12 col-md-12">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="hading pb-20">
                    <h2 class="hading-title">
                      best <span>seller</span>
                    </h2>
                  </div>
                  <div class="seller">
                    <div class="seller-box align-flax w-100 pb-20">
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
                    <div class="seller-box align-flax w-100 pb-20">
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
                    <div class="seller-box align-flax w-100 pb-20">
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
                    <div class="seller-box align-flax w-100 pb-20">
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
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="hading pb-20">
                    <h2 class="hading-title">
                      top <span>seller</span>
                    </h2>
                  </div>
                  <div class="seller">
                    <div class="seller-box align-flax w-100 pb-20">
                      <div class="seller-img">
                        <a href="product-detail.html" class="display-b">
                          <img
                            src="images/product-4.jpg"
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
                          ALIQUAM LOBORTIS EST
                        </a>
                        <span class="product-pricce">$478.00</span>
                      </div>
                    </div>
                    <div class="seller-box align-flax w-100 pb-20">
                      <div class="seller-img">
                        <a href="product-detail.html" class="display-b">
                          <img
                            src="images/product-10.jpg"
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
                          ELEIFEND ARCU
                        </a>
                        <span class="product-pricce">$478.00</span>
                      </div>
                    </div>
                    <div class="seller-box align-flax w-100 pb-20">
                      <div class="seller-img">
                        <a href="product-detail.html" class="display-b">
                          <img
                            src="images/product-2.jpg"
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
                          AENEAN EU TRISTIQUE
                        </a>
                        <span class="product-pricce">$478.00</span>
                      </div>
                    </div>
                    <div class="seller-box align-flax w-100 pb-20">
                      <div class="seller-img">
                        <a href="product-detail.html" class="display-b">
                          <img
                            src="images/product-6.jpg"
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
                          BLIQUAM LOBORTIS
                        </a>
                        <span class="product-pricce">$478.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-12">
              <div class="offer-week">
                <div class="row align-flax">
                  <div class="col-xl-5 col-lg-5 col-md-5">
                    <div class="week-img transition">
                      <a href="product-detail.html" class="display-b">
                        <img
                          src="images/week-sale.jpg"
                          class="w-100"
                          alt="shoes"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-xl-7 col-lg-7 col-md-7">
                    <div class="week-contain">
                      <h2 class="week-head text-uppercase pb-15">
                        offer of the week
                      </h2>
                      <p class="week-sub">
                        Welcome to RoxxOptions shoes Store 20% off
                      </p>
                      <div class="star-rating pb-10">
                        <input
                          id="star-5"
                          type="radio"
                          name="rating"
                          value="star-5"
                        />
                        <label for="star-5" title="5 stars" class="transition">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input
                          id="star-4"
                          type="radio"
                          name="rating"
                          value="star-4"
                          checked
                        />
                        <label for="star-4" title="4 stars" class="transition">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input
                          id="star-3"
                          type="radio"
                          name="rating"
                          value="star-3"
                        />
                        <label for="star-3" title="3 stars" class="transition">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input
                          id="star-2"
                          type="radio"
                          name="rating"
                          value="star-2"
                        />
                        <label for="star-2" title="2 stars" class="transition">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input
                          id="star-1"
                          type="radio"
                          name="rating"
                          value="star-1"
                        />
                        <label for="star-1" title="1 star" class="transition">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                      </div>
                      <div class="price-d pb-25">
                        <label class="price-r pr-30">$478.00</label>
                        <label class="price-o">$378.00</label>
                      </div>
                      <ul class="countdown text-uppercase">
                        <li class="text-center">
                          <span
                            id="days"
                            class="counter-timer display-b text-center"
                          >
                            08
                          </span>
                          <label class="day-name">days</label>
                        </li>
                        <li class="text-center">
                          <span
                            id="hours"
                            class="counter-timer display-b text-center"
                          >
                            16
                          </span>
                          <label class="day-name">hour</label>
                        </li>
                        <li class="text-center">
                          <span
                            id="minutes"
                            class="counter-timer display-b text-center"
                          >
                            36
                          </span>
                          <label class="day-name">min</label>
                        </li>
                        <li class="text-center">
                          <span
                            id="seconds"
                            class="counter-timer display-b text-center"
                          >
                            45
                          </span>
                          <label class="day-name">sec</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
      <section class="latest-blog pt-100">
        <div class="container">
          <div class="latest-blog-inner">
            <div class="hading pb-20">
              <h2 class="hading-title">
                latest<span>blog</span>
              </h2>
            </div>
            <div class="latest-blog-salid owl-carousel">
              <div class="row align-flax pr-30">
                <div class="col-xl-5 col-lg-5 col-md-5">
                  <div class="latest-blog-img">
                    <a href="blog-detail.html" class="display-b">
                      <img src="images/blog-1.jpg" alt="blog" />
                    </a>
                  </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-md-7">
                  <div class="lat-blog-desc">
                    <a
                      href="blog-detail.html"
                      class="lat-blog-title text-uppercase"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </a>
                    <p class="lat-blog-date text-uppercase">
                      <span>john doe</span> - APRIL 18, 2015 AT 5.00 PM
                    </p>
                    <p class="lat-blog-detail">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even
                    </p>
                    <a href="blog-detail.html" class="btn-2">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="row align-flax pr-30">
                <div class="col-xl-5 col-lg-5 col-md-5">
                  <div class="latest-blog-img">
                    <a href="blog-detail.html" class="display-b">
                      <img src="images/blog-2.jpg" alt="blog" />
                    </a>
                  </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-md-7">
                  <div class="lat-blog-desc">
                    <a
                      href="blog-detail.html"
                      class="lat-blog-title text-uppercase"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </a>
                    <p class="lat-blog-date text-uppercase">
                      <span>john doe</span> - APRIL 18, 2015 AT 5.00 PM
                    </p>
                    <p class="lat-blog-detail">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even
                    </p>
                    <a href="blog-detail.html" class="btn-2">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="row align-flax pr-30">
                <div class="col-xl-5 col-lg-5 col-md-5">
                  <div class="latest-blog-img">
                    <a href="blog-detail.html" class="display-b">
                      <img src="images/blog-1.jpg" alt="blog" />
                    </a>
                  </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-md-7">
                  <div class="lat-blog-desc">
                    <a
                      href="blog-detail.html"
                      class="lat-blog-title text-uppercase"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </a>
                    <p class="lat-blog-date text-uppercase">
                      <span>john doe</span> - APRIL 18, 2015 AT 5.00 PM
                    </p>
                    <p class="lat-blog-detail">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even
                    </p>
                    <a href="blog-detail.html" class="btn-2">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="brand pt-100">
        <div class="container">
          <div class="brand-salider owl-carousel">
            <div class="brand-box text-center">
              <a href="#">
                <img src="images/brand-1.jpg" alt="brand" class="transition" />
              </a>
            </div>
            <div class="brand-box text-center">
              <a href="#">
                <img src="images/brand-2.jpg" alt="brand" class="transition" />
              </a>
            </div>
            <div class="brand-box text-center">
              <a href="#">
                <img src="images/brand-3.jpg" alt="brand" class="transition" />
              </a>
            </div>
            <div class="brand-box text-center">
              <a href="#">
                <img src="images/brand-4.jpg" alt="brand" class="transition" />
              </a>
            </div>
            <div class="brand-box text-center">
              <a href="#">
                <img src="images/brand-5.jpg" alt="brand" class="transition" />
              </a>
            </div>
            <div class="brand-box text-center">
              <a href="#">
                <img src="images/brand-6.jpg" alt="brand" class="transition" />
              </a>
            </div>
            <div class="brand-box text-center">
              <a href="#">
                <img src="images/brand-1.jpg" alt="brand" class="transition" />
              </a>
            </div>
            <div class="brand-box text-center">
              <a href="#">
                <img src="images/brand-2.jpg" alt="brand" class="transition" />
              </a>
            </div>
            <div class="brand-box text-center">
              <a href="#">
                <img src="images/brand-4.jpg" alt="brand" class="transition" />
              </a>
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
    </>
  );
};

export default Index;
