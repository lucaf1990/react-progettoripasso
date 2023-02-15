import { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";

class SingleCard extends Component {
  portaAlGenitore = (specificaDelProdotto) => {
    console.log(specificaDelProdotto);
    this.props.prendiDalFiglio(specificaDelProdotto.id, specificaDelProdotto);
  };

  render() {
    return (
      <Col>
        <Card
          onClick={() => {
            this.portaAlGenitore(this.props.products);
          }}
        >
          <Card.Img variant="top" src={this.props.products.images[0]} />
          <Card.Body>
            <Card.Title>{this.props.products.title} </Card.Title>
            <Card.Text>{this.props.products.brand} </Card.Text>
            <Button variant="dark">{this.props.products.price} $ </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleCard;
