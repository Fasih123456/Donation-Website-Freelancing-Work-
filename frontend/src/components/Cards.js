import { Card } from "react-bootstrap";

const Cards = (props) => {
  return (
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
        style={{ width: "9rem", position: "relative", margin: "auto", paddingBottom: "20px" }}
        src={props.src}
      />
      <Card.Body>
        <Card.Title class="normal-text" style={{ fontWeight: "bold" }}>
          {props.title}
        </Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
