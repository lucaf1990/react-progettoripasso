import { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";

class DetailsArea extends Component {
  render() {
    const dettagli = this.props.dettagli;
    if (!dettagli) {
      return <p>PICK A PRODUCT</p>;
    }
    return (
      <Container>
        <Card>
          <Card.Img variant="top" src={dettagli.images[0]} />
          <Card.Body>
            <Card.Title>{dettagli.title} </Card.Title>
            <Card.Text>{dettagli.description} </Card.Text>
            <Button variant="dark">{dettagli.price} $</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
export default DetailsArea;
