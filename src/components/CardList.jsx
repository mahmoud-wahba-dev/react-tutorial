import { Card, Col, Container, Row } from "react-bootstrap";

const CardList = ({ title, price, description, category, image }) => {
  return (
    <Col sm={1} md={2} lg={3}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{category}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardList;
