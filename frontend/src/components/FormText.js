import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const FormText = (props) => {
    return (
        <Form.Group as={Row} className="mb-3" controlId="intialform">
          <Form.Label column sm={4}>
            {props.title}
          </Form.Label>
          <Col sm={6} style={{paddingBottom: "8px", paddingTop: "16px"}}>
            <Form.Control name={props.name} required/>
          </Col>
        </Form.Group>
    );
}

export default FormText;