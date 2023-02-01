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
          <h2>InTow Turns Your Burden In To Something Beautiful</h2>
          <p>
            Finding a suitable home for a car is one of the easiest ways to give one. Selling or
            scrapping an automobile frequently involves unforeseen challenges and inconveniences. We
            take great delight in offering a trustworthy substitute. After giving a car to one of
            our projects, you can unwind. In exchange for your donation to InTow, you will get:{" "}
          </p>

          <div>
            <Container>
              <Row>
                <Col>
                  <Cards
                    src="img/Icons/tool.png"
                    title="Free Towing running or not"
                    text="Regardless of where you are, you can get free towing"
                  />
                </Col>
                <Col>
                  <Cards
                    src="img/Icons/money-flow.png"
                    title="100% Tax Deductible"
                    text="Greatest tax deduction available."
                  />
                </Col>
                <Col style={{ align: "left" }}>
                  <Cards
                    src="img/Icons/group-users.png"
                    title="Help Your Community"
                    text="The assurance that your gift supports organizations supporting your communitys residents"
                  />
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
              on the true expenses of our programmes, InTpw seeks to transcend the Overhead Myth. We
              encourage you to read the open letter written by the information services and watch
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
