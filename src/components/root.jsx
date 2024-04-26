import { Col, Container, Row } from "react-bootstrap";
import NavigationBar from "./navigation-bar";

export default function Root() {
  return (
    <>
      <NavigationBar />
      <Container fluid>
        <Row>
          <Col xs={4}>
            
          </Col>
        </Row>

      </Container>
    </>
  );
}