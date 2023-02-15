import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import "./App.css";
import MyNavbar from "./Components/MyNavbar";
import { Container, Row, Col } from "react-bootstrap";
import AreaCard from "./Components/AreaCard";
import DetailesArea from "./Components/DetailesArea";
class App extends Component {
  state = {
    id: null,
    selected: null,
    product: null,
  };

  render() {
    return (
      <div>
        <MyNavbar />
        <Container className="mt-5">
          <Row xs={9}>
            <Col>
              <AreaCard
                prendiProdotto={(data) => {
                  this.setState({ id: data, selected: data });
                  console.log(this.state);
                }}
                prendiProdotto2={(product) => {
                  this.setState({ product: product });
                  console.log(this.state);
                }}
              />
            </Col>
            <Col xs={3}>
              <DetailesArea
                mainCard={(data) => {
                  this.setState({ product: data });
                }}
                dettagli={this.state.product}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
