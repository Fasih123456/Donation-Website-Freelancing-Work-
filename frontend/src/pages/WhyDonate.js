import Footer from "./Footer";
import Header from "./Header";

import React from "react";
import Cards from "../components/Cards";

import { Card, Button, Col, Container, Row } from "react-bootstrap";

const WhyDonate = () => {
  return (
    <React.Fragment>
      <Header />
      <main class="mb-4">
        <div class="main body ui container">
          <h2>Give&Go Turns Your Burden In To Something Beautiful</h2>
          <p>
            Finding a suitable home for a car is one of the easiest ways to give one. Selling or
            scrapping an automobile frequently involves unforeseen challenges and inconveniences. We
            take great delight in offering a trustworthy substitute. After giving a car to one of
            our projects, you can unwind. In exchange for your donation to Give&Go, you will get:
          </p>

          <div>
            <Container>
              <Row>
                <Col className="white-col">
                  <Cards
                    src="img/Icons/tool.png"
                    title="Free Towing Running Or Not"
                    text="Enjoy the ease of free towing with your car donation. Don't let transportation be a hindrance to making a difference. We'll come to you and pick up your car at no cost to you. Donate today and experience the convenience of free towing."
                  />
                </Col>
                <Col className="white-col">
                  <Cards
                    src="img/Icons/money-flow.png"
                    title="100% Tax Deductible"
                    text="Donate your car today and receive a tax deduction! Not only will you be helping a worthy cause, but you'll also get the added benefit of reducing your taxable income. Get started now and see the difference you can make!"
                  />
                </Col>
                <Col style={{ align: "left" }} className="white-col">
                  <Card
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: "auto",
                      paddingTop: "15px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      className="main body"
                      style={{
                        width: "9rem",
                        position: "relative",
                        margin: "auto",
                        paddingBottom: "20px",
                      }}
                      src={"img/Icons/tow-truck-vehicle.svg"}
                    />
                    <Card.Body>
                      <Card.Title class="normal-text" style={{ fontWeight: "bold" }}>
                        Contact Less Towing
                      </Card.Title>
                      <Card.Text>
                        <p>
                          Experience the peace of mind with contactless towing. Our donation
                          partners prioritize your health and safety by implementing the following
                          measures:
                        </p>

                        <li>No physical contact with drivers </li>
                        <li>Frequent handwashing and cleaning of tow truck equipment</li>
                        <li>Social/physical distancing</li>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>

          <div>
            <p className="red-heading" style={{ marginBottom: "10px", fontSize: "27px" }}>
              Give Back To Your Community
            </p>
            <p>
              Giving with one of our programmes is a remarkably simple way to support the
              neighbourhood. By selecting one of our programmes, you can support the cause that
              means the most to you, whether it be assisting children or veterans.
            </p>

            <p className="red-heading" style={{ marginBottom: "10px", fontSize: "27px" }}>
              The Overhead Myth: Be An Informed Donor
            </p>
            <p style={{ paddingBottom: "20px" }}>
              The Overhead Solution, developed in 2013 by Guidestar, BBB Wise Giving Alliance, and
              Charity Navigator, is supported by the Car Donation Foundation in its effort to dispel
              the myth that financial ratios are the only measure of a nonprofit's performance. By
              showing our value based on impact, exhibiting ethical behaviour and transparent data
              about our performances, managing towards results, and assisting in educating funders
              on the true expenses of our programmes, Give&Go seeks to transcend the Overhead Myth.
              We encourage you to read the open letter written by the information services and watch
              the Ted Talk by Dan Pollotta on this subject to understand more.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default WhyDonate;
