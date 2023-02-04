import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import Accord from "../components/smallAccordion";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SmallAccord from "../components/smallAccordion";
import Button from "react-bootstrap/Button";

const Homecontent = () => {
  return (
    <div>
      <Header />
      <div class="container px-4 px-lg-5 ">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="post-preview">
              <a href="">
                <Link to="/DonateToday">
                  <h2 class="post-title">
                    <a>Donate A Car Today</a>
                  </h2>
                </Link>
              </a>
              <p class=" post-meta">
                We make it easy for you and the organisation you care about to donate a car. Giving
                old cars, removing cars, recycling cars, or just junking cars is a simple procedure
                for you and the charity that will benefit. Every gift is an honour for us to handle,
                and we're dedicated to giving our best service at every turn.{" "}
              </p>

              <li class="post-meta">Free towing or Pick-up in Every Province</li>
              <li class="post-meta">Simple online form</li>
              <li class="post-meta">Numerous Charities to Pick From</li>
              <li class="post-meta">Every gift is guaraneteed a tax receipt</li>
            </div>

            <hr class="my-4" />

            <div class="post-preview">
              <Link to="/DonateToday">
                <h2 class="post-title">
                  <a>Your Dependable Choice</a>
                </h2>
              </Link>
              <p class="post-meta">
                Your automotive contribution has value in terms of money and sentiment. We promise
                to uphold both as part of our donor support commitment. The donation of your charity
                automobile will be carefully managed for you with honesty and attention to timely
                details so that you may give with ease to the cause that is most important to you.
              </p>
            </div>

            <hr class="my-4" />

            <div class="post-preview">
              <Link to="/DonateToday">
                <h2 class="post-title">
                  <a>Donate Now and Make a Difference</a>
                </h2>
              </Link>
              <p class="post-meta">
                The charity that means the most to you benefits from your used automobile
                contributions. Through Give&Go, you may choose to donate your car to ANY recognised
                Canadian charity, and we'll see to it that they have a simple time accepting it.
                Since there are no costs associated with participating in our gift-receiving
                programme, your charity of choice may use every dollar you donate to support the
                important work they are doing on behalf of Canadians just like you.
              </p>
            </div>

            <div class="post-preview">
              <h2 style={{ paddingBottom: "15px" }}>Why Choose Give & Go?</h2>
              <Container>
                <Row className="row-section" style={{ paddingBottom: "0px" }}>
                  <Col
                    xs={6}
                    className="col-section"
                    style={{ borderRight: "2px maroon solid", borderBottom: "2px maroon solid" }}
                  >
                    <div className="content-section">
                      <div className="text-section">
                        <p className="text-section">
                          <span class="material-symbols-outlined">volunteer_activism</span>
                        </p>
                      </div>
                      <div>
                        <p>Support Thousands through charity all across the globe</p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={6} className="col-section" style={{ borderBottom: "2px maroon solid" }}>
                    <div className="content-section">
                      <div className="text-section">
                        <p className="text-section">
                          <span class="material-symbols-outlined">local_shipping</span>
                        </p>
                      </div>
                      <div>
                        <p>Find a new home for your ride - Enjoy our Stress-Free Pick Up</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="row-section">
                  <Col xs={6} className="col-section" style={{ borderRight: "2px maroon solid" }}>
                    <div className="content-section">
                      <div className="text-section">
                        <p className="text-section">
                          <span class="material-symbols-outlined">monetization_on</span>
                        </p>
                      </div>
                      <div>
                        <p>Get a tax receipt NOW worth $700 or more!</p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={6} className="col-section">
                    <div className="content-section">
                      <div className="text-section">
                        <p className="text-section">
                          <span class="material-symbols-outlined">car_crash</span>
                        </p>
                      </div>
                      <div>
                        <p>We will even take your car if it has not run in years</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <div>
                      <Button href="/WhyDonate">Find Out More</Button>
                    </div>
                  </Col>
                </Row>
              </Container>

              <div class="moving-container" style={{ backgroundColor: "rgb(22,21,56)" }}>
                <button class="donate-button">Donate Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homecontent;
