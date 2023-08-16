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
              
                <div className="card h-100 slide-section-image  ">
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
      <section className="middle-section">
        <div className="container">
          <div className="middle-section-p">WHY LUXYRYWITHLOVE UP?</div>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 middle-section-text">
                <h2>WE’RE PICKY ABOUT QUALITY</h2>
                <p>
                  There’s nothing more annoying than having to return your new
                  gun because it wasn’t the real deal. That’s why we run a 25
                  point quality test on all airsoft weapons so you only get the
                  most legit.
                </p>
              </div>
              <div className="col-md-3 col-sm-6 middle-section-text">
                <h2>
                  <h2>WE’RE PICKY ABOUT QUALITY</h2>
                </h2>
                <p>
                  Let’s be honest. Scrolling through endless websites to find
                  the perfect fit takes forever. So we decided to gather all
                  those awesome airsoft brands you can’t stop talking about in
                  our collections..
                </p>
              </div>
              <div className="col-md-3 col-sm-6 middle-section-text">
                <h2>FLASH DELIVERY</h2>
                <p>
                  Trust us, we know how daunting waiting for your new airsoft
                  weapon to arrive is. Lucky for you, Flash is a full-time
                  employee so your goodies arrive ASAP.
                </p>
              </div>
              <div className="col-md-3 col-sm-6 middle-section-text">
                <h2>WE STAND ON GUARD FOR THEE</h2>
                <p>
                  That’s right b’y. Beforehand, we’re airsoft lovers and
                  enthusiasts. And as members of the airsoft community, we do
                  the impossible to help you find what you need at the best
                  pricing and fix any issues with a big smile on our face.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="large-section">
        <div className="container-fulid">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="card large-section-card">
                <img src="./image/Rectangle 3.png" alt="...." />
                <div className="card-body">
                  <h5>SOME THINGS NEVER CHANGE</h5>
                  <h6>E&L will always be essential.</h6>
                  <button>
                    I want some<i class="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="card large-section-card">
                <img src="./image/Rectangle 3 (1).png" alt="...." />
                <div className="card-body">
                  <h5>OH, SHOOT!</h5>
                  <h6>Didn't we mention we have a huge GBB restock?</h6>
                  <button>
                    No way, show me<i class="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="card large-section-card">
                <img src="./image/Rectangle 3 (2).png" alt="...." />
                <div className="card-body">
                  <h5>UNDERPERFORMING?</h5>
                  <h6>You're probably missing a Raven Elite Gen 2.</h6>
                  <button>
                    Totally, let me see it<i class="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slide-section m-0">
        <div className="container slide-section-row">
          <div className="row ">
            <div className="col-lg-2 slide-section-text">
              What’s
              <br /> New?
            </div>
            <div className="col-lg-10 ">
              <Carousel breakPoints={breakpoint}>
                <div className="card h-50 slide-section-image  ">
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
                
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="slide-section m-0">
        <div className="container slide-section-row">
          <div className="row ">
            <div className="col-lg-2 slide-section-text">
              Recent
              <br /> Restock
            </div>
            <div className="col-lg-10 ">
              <Carousel breakPoints={breakpoint}>
                <div className="card h-50 slide-section-image  ">
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
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          <div className="text-center blog-section-text">
            THE LUXYRYWITHLOVE BLOG
          </div>
          <div className="row">
            <div className=" col-sm-6 col-12">
              <div className="card blog-section-card">
                <img src="./image/blog.png" alt="..." />
                <div className="card-body">
                  <p className="text-center"> Blog Post</p>
                  <h5 className="text-center">
                    Give your customers a summary of your blog post
                  </h5>
                </div>
              </div>
            </div>
            <div className=" col-sm-6 col-12">
              <div className="card blog-section-card">
                <img src="./image/blog.png" alt="..." />
                <div className="card-body">
                  <p className="text-center"> Blog Post</p>
                  <h5 className="text-center">
                    Give your customers a summary of your blog post
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="input-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 input-section-first">
              <p>you’ve come so far.</p>
              <h6>
                So why not join our crew of airsoft nutheads for monthly
                promotions, updates and tips? Nothing can go wrong
              </h6>
            </div>
            <div className="col-md-3 input-section-second">
              <p>YOUR NAME</p>
              <div className="pad"></div>
            </div>
            <div className="col-md-3 input-section-second">
              <p>YOUR EMAIL</p>
              <div className="pad"></div>
            </div>

            <div className="col-md-1 input-section-second">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img
                className="img-fulid"
                src="./image/Layer_1.png"
                alt="..."
              ></img>
              <div className="d-block mt-3">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram ms-4"></i>
                <i class="bi bi-twitter ms-4"></i>
                <i class="bi bi-youtube ms-4"></i>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <p>contact us</p>
            </div>
            <div className=" col-md-auto mt-3">
              <p>Terms & Policies</p>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-section text-center">
        © 2023, luxurywithluv Powered by Shopify
      </section>
    </div>
  );
}

export default Home;
