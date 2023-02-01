import { Accordion, Nav } from "react-bootstrap";

const SmallAccord = (props) => {
  return (
    <Accordion style={{ width: "100%" }}>
      <Accordion.Item eventKey={props.id}>
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>{props.content}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SmallAccord;
