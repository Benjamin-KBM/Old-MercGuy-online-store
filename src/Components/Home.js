import React from "react";
import LogIn from "./LogIn";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./home.css";

// Login and Signup modal
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="border-rounded"
    >
      <Modal.Header
        closeButton
        className="shadow-none bg-rounded "
      ></Modal.Header>
      <Modal.Body className="shadow-none bg-light">
        <LogIn />
      </Modal.Body>
    </Modal>
  );
}

// Hero content
const Home = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="background">
      <Container
        fluid="md"
        className=" d-flex align-items-center justify-content-center vh-100"
      >
        <Row>
          <Col className="text-center">
            {" "}
            <img
              src="https://oldmercguy.co.za/wp-content/uploads/2024/07/408174728_673783851506284_7893102833706478671_n.jpg"
              alt="Logo"
              width="250"
              className="rounded-3 shadow-none p-1 mb-4 bg-light rounded"
            />
            <Container className="d-flex align-items-center justify-content-center">
              <p className="text-white w-50">
                Welcome to The Old Merc Guy (Pty) Ltd I specialise in supplying
                guaranteed used spares for most 1975 to 1995 Model
                Mercedes-benzes and courier parts around South Africa daily.
                <br />
                All my products carry a 90 day from delivery guarantee to check
                availability and pricing of what you are looking for please
                contact me, Keyan, on (+27) 78 00 88 781 (sms/Whatsapp/iMessage
                or a call) Please google The Old Merc Guy and read our reviews.
                In addition to being a spares business, The Old Merc Guy is a
                specialist older Mercedes resource that runs online platforms
                that have a combined worldwide following of over half a million
                people. A place where you can seek advice or market your car to
                the widest possible focused audience. Links to our main
                platforms on Facebook, Instagram and Youtube can be found near
                the bottom of this page.
              </p>
            </Container>
            <Button
              size="lg"
              variant="outline-warning"
              onClick={() => setModalShow(true)}
            >
              Login
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
