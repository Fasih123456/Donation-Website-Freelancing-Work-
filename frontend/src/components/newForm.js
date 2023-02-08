import React, { useState } from "react";
import { Form, Button, Col, Row, Container, ProgressBar } from "react-bootstrap";
import FormText from "./FormText";

const NewForm = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [showhide, setShowhide] = useState("");
  const [showextraquestion, setShowextraquestion] = useState("");
  const [validated, setValidated] = useState(false);
  const [sameinformation, setSameinformation] = useState("no");
  const [firsttransition, setFirsttransition] = useState("no");
  const [secondtransition, setSecondTransition] = useState("no");
  const [thirdtransition, setThirdTansition] = useState("no");

  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setShowhide(getuser);
  };

  const handleshowextraquestion = (event) => {
    const getvalue = event.target.value;
    setShowextraquestion(getvalue);
  };

  const handlesameinformation = (event) => {
    let getvalue = event.target.value;

    if (sameinformation === "yes" && getvalue === "yes") {
      setSameinformation("no");
    } else {
      setSameinformation(getvalue);
    }
  };

  const handleFirstTransition = (event) => {
    setFirsttransition("yes");
  };

  const handleSecondTransition = (event) => {
    setSecondTransition("yes");
  };

  const handleThirdTransition = (event) => {
    setThirdTansition("yes");
  };

  const sections = [
    {
      id: 1,
      title: "Section 1",
      content: (
        <Form>
          {" "}
          <div className="group">
            <h3 className="form-heading">Jump Start</h3>
            <Form.Group as={Row} className="mb-3" controlId="intialform">
              <Form.Label column sm={4} style={{ paddingLeft: "10px" }}>
                Are you a registered Vehicle Owner
              </Form.Label>
              <Col sm={8} onChange={(e) => handleshowextraquestion(e)}>
                <Form.Check
                  required
                  type="radio"
                  label="Yes"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  value="yes"
                />
                <Form.Check
                  required
                  type="radio"
                  label="No"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  value="no"
                />
              </Col>

              <FormText title="Where is your Vehicle Located" name="location" />

              <Form.Label column sm={4}>
                Is your vehicle mechanically drivable at this time? Would it be possible to drive
                around the block right now? -- This question only pertains to the mechanical
                condition. -Expired insurance or registration should not affect your answer.
              </Form.Label>
              <Col sm={8}>
                <Form.Check
                  required
                  type="radio"
                  label="Yes"
                  name="formHorizontalRados"
                  id="formHorizontalRadios1"
                  value="yes"
                />
                <Form.Check
                  required
                  type="radio"
                  label="No"
                  name="formHorizontalRados"
                  id="formHorizontalRadios2"
                  value="no"
                />
              </Col>

              <FormText
                title="Do you have a charity to which you would like to donate your vehicle(please specify any or NA if not)"
                name="location1"
              />

              <Form.Label column sm={4}>
                Would you like to remain anonymous
              </Form.Label>
              <Col sm={8}>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="formHoRados"
                  id="foalRadios1"
                  value="yes"
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="formHoRados"
                  id="foalRadios2"
                  value="no"
                />
              </Col>
            </Form.Group>
          </div>
        </Form>
      ),
    },
    {
      id: 2,
      title: "Section 2",
      content: (
        <Form>
          <h3 className="form-heading">Doners information</h3>

          {showextraquestion === "no" && (
            <div className="group">
              <FormText
                title="You have noted that you are not the registered owner of the vehicle. Please explain the circumstances surrounding this vehicle (for example, abdoned vehicle, on behalf of a family member, power of attorney)."
                placeholder="yo"
                name="question4"
              />
            </div>
          )}
          <FormText title="First Name (or Business Name)" name="userfirstname" />
          <FormText title="Last Name" name="userlastname" />
          <FormText title="Street Address" name="userstreetaddress" />
          <FormText title="City or Town" name="usercity" />
          <FormText title="Province" name="userprovince" />
          <FormText title="Postal Code" name="userpostalcode" />
          <FormText title="Phone" name="userphone" />
          <FormText title="Phone Other" name="userotherphonenumber" />
          <FormText title="Email Address" name="useremail" />
          <FormText title="Confirm Email Address" name="useremailconfirm" />
        </Form>
      ),
    },
    {
      Id: 3,
      title: "Section 3",
      content: (
        <Form>
          <h3 className="form-heading">Vehicle Information</h3>

          <Form.Group as={Row} className="mb-3" controlId="intialform">
            <FormText title="Year" name="caryear" />
            <FormText title="Make" name="carmake" />
            <FormText title="Model" name="carmodel" />
            <FormText title="Color" name="carcolor" />
            <FormText title="Serial Number(17 characters)" name="carserialnumber" />
            <FormText title="Odometer" name="carodometer" />
            <p>Please select all information that applies</p>
            <Form.Label column sm={4}>
              Vehicle Condition
            </Form.Label>
            <Col sm={8}>
              <Form.Check
                type="checkbox"
                label="Runs Fine(No mechnical concerns)"
                value="runs fine"
                name="runsfine"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="checkbox"
                label="Wont start"
                value="wont state"
                name="wontstart"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="checkbox"
                value="dead battery"
                label="Dead Battery"
                name="deadbattery"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="checkbox"
                value="engine problems"
                label="Engine Problems"
                name="engineproblem"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="checkbox"
                value="transmission problems"
                label="Transmission problems"
                name="transmissionproblem"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="checkbox"
                label="Brakes Sized"
                value="brakes sized"
                name="brakessized"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="checkbox"
                label="Flat tier"
                value="flat tier"
                name="flattier"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="checkbox"
                label="Disel"
                value="disel"
                name="disel"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="checkbox"
                label="4x4"
                value="4x4"
                name="4x4"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="checkbox"
                value="frame damage"
                label="frame damage"
                name="framedamage"
                id="formHorizontalRadios2"
              />

              <Form.Check
                type="checkbox"
                label="flood damage"
                value="flood damage"
                name="flooddamage"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="checkbox"
                value="minor cosmetic damage"
                label="minor cosmetic damage"
                name="minordamage"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="checkbox"
                value="major cosmetic damage"
                label="major cosmetic damage"
                name="majordamage"
                id="formHorizontalRadios2"
              />
            </Col>

            <Form.Label column sm={12}>
              What would you like to do with your car:
            </Form.Label>

            <Form.Select onChange={(e) => handleshowhide(e)} style={{ marginBottom: "15px" }}>
              <option value="">----Select Option----</option>
              <option name="recycle" value="1" required>
                Recycle my car
              </option>
              <option name="auction" value="2" required>
                Auction my car
              </option>
              <option name="self-decide" value="3" required>
                Please decide for me
              </option>
            </Form.Select>

            {showhide === "1" && (
              <div className="hidden-div" id="recycle">
                <h3>This option would be good for vehicles:</h3>
                <ul>- Of any age</ul>
                <ul>- Of any mechanical condition</ul>
                <ul>
                  - With this choice, your car would be delivered to a local agency who, at their
                  discretion, would either recycle or repurpose it.
                </ul>
              </div>
            )}
            {showhide === "2" && (
              <div className="hidden-div" id="auction">
                <h3>This option would be good for vehicles that:</h3>
                <ul>- are less than 10 years of age</ul>
                <ul>- have less than 200,000 kms</ul>
                <ul>- don't have any major mechanical problems</ul>
                <ul>- are currently drivable</ul>
              </div>
            )}
            {showhide === "3" && (
              <div className="hidden-div" id="unsure">
                <h3>This option would be suitable for Donors that:</h3>
                <ul>- do not have a preference of what happens to their vehicle</ul>
                <ul>
                  - would like inTow to determine if it is suitable for auction/resale or recycle
                </ul>
              </div>
            )}
          </Form.Group>
        </Form>
      ),
    },
    {
      id: 4,
      title: "Section 4",
      content: (
        <Form>
          <div className="group">
            <Form.Group as={Row} className="mb-3" controlId="intialform">
              <h3 className="form-heading"> Towing Information</h3>
              <Form.Label column sm={4}>
                Can you drive this vehicle?
              </Form.Label>
              <Col sm={8}>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="drivevehicle"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="drivevehicle"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Same as doner address
              </Form.Label>
              <Col sm={8}>
                <Form.Check
                  type="checkbox"
                  label="Yes"
                  name="same address"
                  id="sameaddress"
                  value="yes"
                  onChange={(e) => handlesameinformation(e)}
                />
              </Col>

              {sameinformation === "no" && (
                <div>
                  <FormText title="Street Address" name="street" />
                  <FormText title="City or Town" name="location1" />
                  <FormText title="Province" name="location1" />
                  <FormText title="Postal Code" name="location1" />
                  <FormText title="Contact Name" name="location1" />
                  <FormText title="Phone Number" name="location1" />
                  <FormText title="Phone Other" name="location1" />
                </div>
              )}
            </Form.Group>
          </div>
          <div className="group">
            <Form.Group as={Row} className="mb-3" controlId="intialform">
              <h3 className="form-heading">Charity</h3>

              <FormText
                title="Would you like to add any additional information?"
                name="location1"
              />

              <Col style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                <Button type="submit" variant="secondary">
                  Submit
                </Button>{" "}
              </Col>
            </Form.Group>
          </div>
        </Form>
      ),
    },
  ];

  const sectionNames = [
    "Jump Start",
    "Doners information",
    "Vehicle Information",
    "Towing Information",
    "Charity",
  ];

  return (
    <div>
      <Container style={{ paddingBottom: "30px" }}>
        <ProgressBar
          variant="success"
          now={(currentSection * 100) / 4}
          label={`Step ${currentSection}`}
          style={{
            height: "45px",
            paddingBottom: "0px",
            borderRadius: "25px",
            backgroundColor: "maroon",
          }}
        />
      </Container>
      <Container>
        {sections[currentSection - 1].content}
        <Button
          onClick={() => setCurrentSection(currentSection - 1)}
          disabled={currentSection === 1}
        >
          Previous Section
        </Button>
        <Button
          onClick={() => setCurrentSection(currentSection + 1)}
          disabled={currentSection === sections.length}
        >
          Next Section
        </Button>
      </Container>
    </div>
  );
};

export default NewForm;

/*

import ListGroup from 'react-bootstrap/ListGroup';

function HorizontalExample() {
  return (
    <ListGroup horizontal>
      <ListGroup.Item>This</ListGroup.Item>
      <ListGroup.Item>ListGroup</ListGroup.Item>
      <ListGroup.Item>renders</ListGroup.Item>
      <ListGroup.Item>horizontally!</ListGroup.Item>
    </ListGroup>
  );
}

export default HorizontalExample;
*/
