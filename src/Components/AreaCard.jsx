import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleCard from "./SingleCard";

class AreaCard extends Component {
  state = {
    products: [],
    selected: null,
    product: null,
  };
  componentDidMount = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/");
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({ products: data.products, selected: data.products.id });
      } else {
        console.log("error" + response.status);
      }
    } catch (error) {
      console.log(error + "questo error");
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.selected !== this.state.selected ||
      prevState.product !== this.state.product
    ) {
      this.props.prendiProdotto(this.state.selected);
      this.props.prendiProdotto2(this.state.product);
    }
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.products.map((prod) => {
            return (
              <SingleCard
                key={prod.id}
                products={prod}
                prendiDalFiglio={(prod, data) => {
                  this.setState({ selected: prod, product: data });
                }}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default AreaCard;
