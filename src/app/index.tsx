import { Component } from "preact";
import Footer from "./Footer.tsx";
import Navigation from "./Navigation.tsx";
import Patrol from "./Patrol.tsx";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column min-vh-100">
        <header>
          <Navigation />
        </header>
        <h1 className="text-center">Boy Scouts Troop 6134</h1>

        <div className="mx-auto">
          <Card style={{ width: '18rem' }}>
            <Card.Title className="text-center">Senior Patrol Leader</Card.Title>
            <Card.Subtitle className="text-center">Riley Brinkley</Card.Subtitle>
          </Card>
        </div>
        <h2 className="text-center">Patrols</h2>
        <Row>
          <Col className="justify-content-center d-flex text-center">
            <Patrol name="Icy Steppas" description="We are the Icy Steppas. Welcome to our gang." />
          </Col>
          <Col className="justify-content-center d-flex text-center">
            <Patrol name="Super Scout Bros" description="Please don't tell Nintendo" />
          </Col>
<Col className="justify-content-center d-flex text-center">
<Patrol name="Newbies" description="New Scouts" />
</Col>
        </Row>
        <footer className="mt-auto mx-auto">
          <Footer />
        </footer>
      </div>
    );
  }
}