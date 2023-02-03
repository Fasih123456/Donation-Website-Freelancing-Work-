import { Card } from "react-bootstrap";

const Cards = (props) => {
  return (
    <Card style={{ width: "100%", height: "100%", margin: "auto", paddingTop: "15px" }}>
      <Card.Img
        variant="top"
        className="main body"
        style={{ width: "9rem", position: "relative", margin: "auto" }}
        src={props.src}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "16px", fontWeight: "bolder" }}>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
