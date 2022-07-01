import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FormText from "./FormText";


import React, {useState} from 'react';


function HorizontalExample() {
  const [showhide, setShowhide]=useState('');
  const [showextraquestion,setShowextraquestion]=useState('');
  const [validated, setValidated] = useState(false);
  const [sameinformation, setSameinformation] = useState('no');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(event.target.location.value);
   

    if(form.checkValidity() === false){
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleshowhide=(event)=>{
    const getuser = event.target.value;
    setShowhide(getuser);
  }

  const handleshowextraquestion=(event)=>{
    const getvalue = event.target.value;
    setShowextraquestion(getvalue);
  }

  const handlesameinformation=(event)=>{
    let getvalue = event.target.value;

    console.log(getvalue);
    console.log(sameinformation);

    if(sameinformation === 'yes' && getvalue === 'yes'){
      setSameinformation('no');
    }else{
      setSameinformation(getvalue);
    }
  }

  return (
    <div className='main body ui container'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} style={{width: "100%", background: "white"}}>
        <div className='group'>
        <h3 className='form-heading'>Charity</h3>
        <Form.Group  as={Row} className="mb-3" controlId="intialform">
          <Form.Label column sm={6} style={{paddingLeft: "10px"}}>
            1. Are you a registered Vehicle Owner
          </Form.Label>
          <Col sm={6} onChange={(e)=>handleshowextraquestion(e)}>
            <Form.Check
            required
              type="radio"
              label="Yes"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              value='yes'
            />
            <Form.Check
                        required
              type="radio"
              label="No"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
              value='no'
            />
          </Col>
        </Form.Group>

        <FormText title="2. Where is your Vehicle Located" name='location'/>

        <Form.Group as={Row} className="mb-3" controlId="intialform">
          <Form.Label column sm={8}>
            3. Is your vehicle mechanically drivable at this time? Would it be possible to drive around the block right now? -- This question only pertains to the mechanical condition. -Expired insurance or registration should not affect your answer.
          </Form.Label>
          <Col sm={4} >
            <Form.Check 

            required
              type="radio"
              label="Yes"
              name="formHorizontalRados"
              id="formHorizontalRadios1"
              value='yes'
            />
            <Form.Check
             required
              type="radio"
              label="No"
              name="formHorizontalRados"
              id="formHorizontalRadios2"
              value='no'
            />
 
          </Col>
        </Form.Group>

        </div>

        {
          showextraquestion === 'no' && (
            <div className='group'>
            <FormText
              title="4. You have noted that you are not the registered owner of the vehicle. Please explain the circumstances surrounding this vehicle (for example, abdoned vehicle, on behalf of a family member, power of attorney)."
              placeholder="yo"
              name='question4'
            />
          </div>
          )
        }

      <div className='group'>
      <h3 className='form-heading'>Doners information</h3>


        <FormText title="5. First Name (or Business Name)"  name='userfirstname'/>
        <FormText title="6. Last Name"  name='userlastname'/>
        <FormText title="7. Street Address"  name='userstreetaddress'/>
        <FormText title="8. City or Town"  name='usercity'/>
        <FormText title="9. Province"  name='userprovince'/>
        <FormText title="10. Postal Code"  name='userpostalcode'/>
        <FormText title="11. Phone"  name='userphone'/>
        <FormText title="12. Phone Other"  name='userotherphonenumber'/>
        <FormText title="13. Email Address"  name='useremail'/>
        <FormText title="14. Confirm Email Address"  name='useremailconfirm'/>
            </div>
            <div className='group'>
      <h3 className='form-heading'>Vehicle Information</h3>

        <Form.Group as={Row} className="mb-3" controlId="intialform">
          <FormText title="15. Year"  name='caryear'/>
          <FormText title="16. Make"  name='carmake'/>
          <FormText title="17. Model"  name='carmodel'/>
          <FormText title="18. Color"  name='carcolor'/>
          <FormText title="19. Seril Number(17 characters)"  name='carserialnumber'/>
            <p>Please select all information that applies</p>
          <Form.Label column sm={4}>
            20. Vehicle Condition
          </Form.Label>
          <Col sm={8}>
            <Form.Check
              type="checkbox"
              label="Runs Fine(No mechnical concerns)"
              value='runs fine'
              name="runsfine"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="checkbox"
              label="Wont start"
              value='wont state'
              name="wontstart"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              value='dead battery'
              label="Dead Battery"
              name="deadbattery"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              value='engine problems'
              label="Engine Problems"
              name="engineproblem"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              value='transmission problems'
              label="Transmission problems"
              name="transmissionproblem"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              label="Brakes Sized"
              value='brakes sized'
              name="brakessized"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              label="Flat tier"
              value='flat tier'
              name="flattier"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              label="Disel"
              value='disel'
              name="disel"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              label="4x4"
              value='4x4'
              name="4x4"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              value='frame damage'
              label="frame damage"
              name="framedamage"
              id="formHorizontalRadios2"
            />
                
            <Form.Check
              type="checkbox"
              label="flood damage"
              value='flood damage'
              name="flooddamage"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              value='minor cosmetic damage'
              label="minor cosmetic damage"
              name="minordamage"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              value='major cosmetic damage'
              label="major cosmetic damage"
              name="majordamage"
              id="formHorizontalRadios2"
            />
          </Col>
          

          <Form.Label column sm={12}>
              Please select one:
          </Form.Label>

          <Form.Select onChange={(e)=>(handleshowhide(e))}>
              <option value="">----Select Option----</option>
              <option name='recycle' value='1' required>Recycle my car</option>
              <option name='auction' value='2' required>Auction my car</option>
              <option name='self-decide' value='3' required>Please decide for me</option>
          </Form.Select>

            
            {
              showhide === '1' && (
                <div className='hidden-div' id='recycle'>
                <h3>This option would be good for vehicles:</h3>
                <ul>- Of any age</ul>
                <ul>- Of any mechanical condition</ul>
                <ul>- With this choice, your car would be delivered to a local agency who, at their discretion, would either recycle or repurpose it.</ul>
              </div>
              )
              }
              {
              showhide === '2' && (
                <div className='hidden-div' id='auction'>
                <h3>This option would be good for vehicles that:</h3>
                <ul>- are less than 10 years of age</ul>
                <ul>- have less than 200,000 kms</ul>
                <ul>- don't have any major mechanical problems</ul>
                <ul>- are currently drivable</ul>
              </div>
              )
            }
            {
              showhide === '3' && (
                <div className='hidden-div' id='unsure'>
                  <h3>This option would be suitable for Donors that:</h3>
                  <ul>- do not have a preference of what happens to their vehicle</ul>
                  <ul>- would like inTow to determine if it is suitable for auction/resale or recycle</ul>
                </div>
              )
            }


 
        </Form.Group>
        </div>
        <div className='group'>
        <Form.Group as={Row} className="mb-3" controlId="intialform">
        <h3 className='form-heading'> Towing Information</h3>
          <Form.Label column sm={4}>
            21. Can you drive this vehicle?
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
            22. Same as doner address
          </Form.Label>
          <Col sm={8}>
            <Form.Check
              type="checkbox"
              label="Yes"
              name="same address"
              id="sameaddress"
              value='yes'
              onChange={(e)=>handlesameinformation(e)}
            />
          </Col>

          {
            sameinformation === 'no' && (
              <div>
              <FormText title='23. Street Address' name='street'/>
              <FormText title='24. City or Town'  name='location1'/>
              <FormText title='25. Province'  name='location1'/>
              <FormText title='26. Postal Code'  name='location1'/>
              <FormText title='27. Contact Name'  name='location1'/>
              <FormText title='28. Phone Number'  name='location1'/>
              <FormText title='29. Phone Other'  name='location1'/>
              </div>
            )
          }



        </Form.Group>
        </div>
        <div className="group">
        <Form.Group as={Row} className="mb-3" controlId="intialform">
        <h3 className='form-heading'>Charity</h3>
        <FormText title='30. Do you have a charity to which you would like to donate your vehicle(please specify any or NA if not)'  name='location1'/>
        <FormText title='31. Would you like to add any additional information?' name='location1' />
        

        <Form.Label column sm={4} style={{paddingLeft: "22px"}}>
            32. Would you like to remain anonymous
          </Form.Label>
          <Col sm={8}>
            <Form.Check
              type="radio"
              label="Yes"
              name="formHoRados"
              id="foalRadios1"
            />
            <Form.Check
              type="radio"
              label="No"
              name="formHoRados"
              id="foalRadios2"
            />
          </Col>


          <Col style={{paddingLeft: "10px", paddingTop: "10px"}} >
          <Button  type='submit' variant="secondary">Submit</Button>{' '}
          </Col>
        </Form.Group>
        </div>
      </Form>
    </div>
  );
}

export default HorizontalExample;
