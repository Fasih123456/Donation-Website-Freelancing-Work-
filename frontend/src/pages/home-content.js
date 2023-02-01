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
      <div class="container px-4 px-lg-5">
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
              <p class="post-meta">
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
                contributions. Through InTow, you may choose to donate your car to ANY recognised
                Canadian charity, and we'll see to it that they have a simple time accepting it.
                Since there are no costs associated with participating in our gift-receiving
                programme, your charity of choice may use every dollar you donate to support the
                important work they are doing on behalf of Canadians just like you.
              </p>
            </div>

            <div class="post-preview">
              <h2 style={{ paddingBottom: "15px" }}>FAQ</h2>
              <Container>
                <Row>
                  <Col style={{ borderRightStyle: "solid" }}>
                    <Accord
                      id="1"
                      title="What can I donate?"
                      content={`We accept the majority of vehicles, including but not limited to cars, trucks, vans, SUVs, trailers, RVs, and boats. To be eligible, your vehicle must meet a few criteria. The registered owner, for example, or their legal representative, must donate the vehicle. A car must be registered in Canada. The vehicle must be "complete," with no significant component flaws. Vehicles with minor body damage are welcome. RVs, trailers, and boats will face additional restrictions. We are unable to accept vehicles with pending insurance claims. Vehicles that have liens or other encumbrances are not accepted. Although RVs must usually be dropped off, each case is handled differently.`}
                    />
                    <Accord
                      id="1"
                      title="How do I Donate My Car?"
                      content={`To donate your vehicle, please follow the steps outlined below. From the home page, select the "Donate Now" button. To qualify your vehicle, you will need to answer a few simple questions here. On the donation form, include information about your vehicle, your contact information, and the organisation to which you want to donate. Examine the information you've provided, agree to the terms and conditions, and then submit your car donation request. Additional instructions for towing or dropping off will be provided. Check your inbox for our email confirmation. If you do not receive the confirmation message right away, please check your junk mail folder. For more information on this subject, please see the link more info.`}
                    />
                    <Accord
                      id="1"
                      title="What will the amount of my tax receipt be?"
                      content="This total is determined by a number of factors. Please click on this link, more info, for more specific information."
                    />
                  </Col>
                  <Col>
                    <Accord
                      id="1"
                      title="Can I still donate my car even though it hasn't run in a year?"
                      content="Yes, we can take non-running automobiles."
                    />
                    <Accord
                      id="1"
                      title="What if my car isn't registered"
                      content={`There must be proof of ownership on file. A bill of sale, a letter from your local registry requesting "evidence of last car registration," or a current or expired registration are all acceptable forms of identification.`}
                    />
                    <Accord
                      id="1"
                      title="What If I don't have insurance?"
                      content="Your car no longer requires insurance after it has been picked up by our towing provider and recycled. If your car is up for auction, we recommend that you keep coverage on it until it is sold. We'll notify you via email once your vehicle has been sold."
                    />
                  </Col>
                </Row>
                <Row style={{ paddingTop: "20px" }}>
                  <Col>
                    <Button variant="dark" style={{ width: "40%" }} href="/contact">
                      Missing Questions?
                    </Button>
                  </Col>
                  <Col>
                    <Link style={{ color: "white " }} to="/DonateToday" id="page1">
                      <a class="btn btn-primary text-uppercase">Donate Now →</a>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homecontent;
