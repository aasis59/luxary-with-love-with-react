import React from "react";
import "./Home.scss";
import Carousel from "react-elastic-carousel";

function Home() {
  const breakpoint = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 2, pagination: false },
    { width: 850, itemsToShow: 3, pagination: false },
    { width: 1150, itemsToShow: 4, pagination: false },
  ];

  return (
    <div>
      <section className="top-section">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-3 col-sm-3 col-4 text-end top-image">
              <img src="./image/layer_1.png" alt="loading...." />
            </div>
            <div className="col-lg-3 col-sm-6 col-5 ">
              <div className="top-input">
                <input
                  type="search"
                  placeholder="Search"
                  className="top-input-search"
                />
                <span className="top-span">
                  <i class="bi bi-search"></i>
                </span>
              </div>
            </div>
            <div className="col-lg-1  col-sm-2 col-3 ">
              <img src="./image/Flag.png" alt="Loading" />
            </div>
            <div className="col-lg-3 col-sm-6 col-12 top-icon">
              <div>
                <span>Items</span>
                <i class="bi bi-cart-check-fill"></i>
                <span className="top-span">Account</span>
                <i class="bi bi-person-circle"></i>
                <span className="top-span">Wishlist</span>
                <i class="bi bi-heart"></i>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-12  top-social-icon">
              <i class="bi bi-twitter"></i>
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-youtube"></i>
            </div>
          </div>
        </div>
      </section>
      <section className="nav-section">
        <nav class="navbar navbar-expand-lg  ">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-center" id="navbarNav">
              <ul class="navbar-nav gap-4 ">
                <li class="nav-item">Home</li>
                <li class="nav-item">All Products</li>
                <li class="nav-item">Towel Warmers</li>
                <li class="nav-item">Bathroom Accessories</li>
                <li class="nav-item">Shower Essentials</li>
                <li class="nav-item">Thermostatic</li>
                <li class="nav-item">Bathtub</li>
                <li class="nav-item">Contact</li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section className="first-section">
        <div className="container-fluid">
          <div className="row  align-items-center first-section-text">
            <div className="col-sm-4 col-12 text-end">
              <i class="bi bi-truck"></i>
              <span>Free Canada-wide shipping on orders over $300</span>
            </div>
            <div className="col-sm-4 col-12 text-center">
              <i class="bi bi-trophy"></i>
              <span>Price matching all Canadian retailers</span>
            </div>
            <div className="col-sm-4 col-12 text-start">
              <i class="bi bi-stars"></i>
              <span>4.8 stars on GBP - 79 Google reviews</span>
            </div>
          </div>
        </div>
      </section>
      <section className="second-section ">
        <div className="second-section-text">
          <h1>Limited Live Sale</h1>
          <h2>XX%</h2>
          <h3>discount on curated items</h3>
          <button>Sign Up Now!</button>
        </div>
      </section>
      <section className="third-section">
        <div className="container">What folks can’t get enough of</div>
      </section>
      <section className="fourth-section">
        <div className="container">
          <div className="row text-center">
            <div className="col fourth-section-img ">
              <img
                src="./image/Frame 4.png"
                alt="loading...."
                className="img-fluid "
              />
              <span>Rings</span>
            </div>
            <div className="col fourth-section-img">
              <img
                src="./image/Frame 5.png"
                alt="loading...."
                className="img-fluid"
              />
              <span>bracelets</span>
            </div>
            <div className="col fourth-section-img">
              <img
                src="./image/Frame 6.png"
                alt="loading...."
                className="img-fluid"
              />
              <span>Necklaces</span>
            </div>
            <div className="col fourth-section-img">
              <img
                src="./image/Frame 7.png"
                alt="loading...."
                className="img-fluid"
              />
              <span>Ear Rings</span>
            </div>
            <div className="col fourth-section-img">
              <img
                src="./image/Frame 8.png"
                alt="loading...."
                className="img-fluid"
              />
              <span>Jewelry Sets</span>
            </div>
          </div>
        </div>
      </section>
      <section className="slide-section">
        <div className="container slide-section-row">
          <div className="row ">
            <div className="col-lg-2 slide-section-text">
              The best of
              <br /> the best
            </div>
            <div className="col-lg-10 ">
              <Carousel breakPoints={breakpoint}>
                <div className="card slide-section-image h-100 ">
                  <img src="./image/image 8.png" alt="..." />
                  <div className="card-body">
                    <p>
                      Handshower Set With 36 Inch Slide Bar And 4-Function
                      Handshower - Chrome | Model Number: 1010C
                    </p>
                    <h5>Luxury with Love</h5>
                    <h6>$21.00 USD</h6>
                    <button>
                      <i class="bi bi-cart-check"></i>Add to cart
                    </button>
                  </div>
                </div>
                <div className="card slide-section-image h-100">
                  <img src="./image/image 8 (1).png" alt="..." />
                  <div className="card-body">
                    <p>
                      Handshower Set With 36 Inch Slide Bar And 4-Function
                      Handshower - Chrome | Model Number: 1010C
                    </p>
                    <h5>Luxury with Love</h5>
                    <h6>$21.00 USD</h6>
                    <button>
                      <i class="bi bi-cart-check"></i>Add to cart
                    </button>
                  </div>
                </div>
                <div className="card slide-section-image h-100">
                  <img src="./image/image 8 (2).png" alt="..." />
                  <div className="card-body">
                    <p>
                      Handshower Set With 36 Inch Slide Bar And 4-Function
                      Handshower - Chrome | Model Number: 1010C
                    </p>
                    <h5>Luxury with Love</h5>
                    <h6>$21.00 USD</h6>
                    <button>
                      <i class="bi bi-cart-check"></i>Add to cart
                    </button>
                  </div>
                </div>
                <div className="card slide-section-image h-100">
                  <img src="./image/image 8.png" alt="..." />
                  <div className="card-body">
                    <p>
                      Handshower Set With 36 Inch Slide Bar And 4-Function
                      Handshower - Chrome | Model Number: 1010C
                    </p>
                    <h5>Luxury with Love</h5>
                    <h6>$21.00 USD</h6>
                    <button>
                      <i class="bi bi-cart-check"></i>Add to cart
                    </button>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
