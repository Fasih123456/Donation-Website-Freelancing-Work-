import Navigation from "../components/Navigation";

import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <div>
        <nav
          style={{
            overflow: "hidden",
          }}
          class="navbar navbar-expand-lg navbar-light"
          id="mainNav"
        >
          <div class="container px-4 px-lg-5">
            <a class="navbar-brand" style={{ color: "white" }} href="/">
              <img src="img/logo.png" style={{ height: "75px" }} />
            </a>
            <button
              class="navbar-toggler"
              style={{ color: "white" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <p style={{ display: "none" }}>Menu</p>
              <i class="fas fa-bars" style={{ height: "25px" }}></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <Navigation />
            </div>
          </div>
        </nav>
      </div>
      <header class="masthead" style={{ backgroundImage: "url('img/main-picture/2.jpg')" }}>
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="site-heading">
                <h1 width="100%">Donate By Your Choice </h1>
                <span class="subheading">Accepting Dontation is Every Province</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
