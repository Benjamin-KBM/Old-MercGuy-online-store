import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import HelpBox from "./HelpBox";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/features/cartSlice";
import { billingForm } from "../store/features/billingSlice";

// Checkout handles the logic and displays the billing form as well as the cart selections.
const CheckOut = () => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const cartInfo = useSelector((state) => state.cartSlice.cart);
  // RenderCart displays the card for each selection made by the user.
  const renderCart = (card) => {
    return (
      <Card className="w-100 shadow bg-light mb-2 me-4 ">
        <Row>
          <Col>
            <Card.Img
              variant="top"
              src={card.image}
              className="img-thumbnail"
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>R{card.price}</Card.Text>
              <Button
                variant="danger"
                onClick={() => dispatch(removeFromCart(card))}
              >
                Remove
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      address: "",
      address_2: "",
      province: "",
      zip: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      userName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      address: Yup.string().required("Required"),
      address_2: Yup.string(),
      province: Yup.string().required("Required"),
      zip: Yup.string().required("Required"),
    }),
    // Form validation is done with Formik and kept in state
    onSubmit: (values) => {
      alert("Saved!");
      dispatch(
        billingForm({
          firstName: values.firstName,
          lastName: values.lastName,
          userName: values.userName,
          email: values.email,
          address: values.address,
          address_2: values.address_2,
          province: values.province,
          zip: values.zip,
        })
      );
      formik.resetForm();
    },
  });

  return (
    <Row className="vh-75 d-flex align-items-center">
      <Col className="m-4 p-4   justify-content-center ">
        <Form
          className="p-4 shadow-lg bg-light text-center"
          onSubmit={formik.handleSubmit}
        >
          <h3 className="text-muted">Billing Address.</h3>
          <Row className="mb-3">
            <Col>
              <Form.Control
                id="firstName"
                placeholder="First name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-danger">{formik.errors.firstName}</div>
              ) : null}
            </Col>
            <Col>
              <Form.Control
                id="lastName"
                placeholder="Last name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-danger">{formik.errors.firstName}</div>
              ) : null}
            </Col>
          </Row>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control
                id="email"
                className="mb-3"
                type="email"
                placeholder="Enter email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
              <Form.Control
                id="userName"
                className="mb-3"
                type="text"
                placeholder="Username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
              />
              {formik.touched.userName && formik.errors.userName ? (
                <div className="text-danger">{formik.errors.userName}</div>
              ) : null}
              <Form.Control
                id="address"
                className="mb-3"
                type="text"
                placeholder="Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-danger">{formik.errors.address}</div>
              ) : null}
              <Form.Control
                id="address_2"
                type="text"
                placeholder="Address 2 (Optional)"
              />
            </Form.Group>
          </Form>
          <Row className="mb-3">
            <Col>
              <Form.Control
                id="province"
                placeholder="Province"
                onChange={formik.handleChange}
                value={formik.values.province}
              />
              {formik.touched.province && formik.errors.province ? (
                <div className="text-danger">{formik.errors.province}</div>
              ) : null}
            </Col>
            <Col>
              <Form.Control id="zip" placeholder="Zip" />
              {formik.touched.zip && formik.errors.zip ? (
                <div className="text-danger">{formik.errors.zip}</div>
              ) : null}
            </Col>
          </Row>
          <hr></hr>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <div className="d-flex">
              <Form.Check
                type="checkbox"
                label="Shipping address is the same as my billing address"
              />
              {formik.touched.province && formik.errors.province ? (
                <div className="ps-1 text-danger">{formik.errors.province}</div>
              ) : null}
              <i
                className="bi bi-info-circle-fill ps-2"
                onClick={() => setModalShow(true)}
              ></i>
              <HelpBox show={modalShow} onHide={() => setModalShow(false)} />
            </div>
            <div className="d-flex">
              <Form.Check
                type="checkbox"
                label="Save this Information for the next time"
              />
            </div>
          </Form.Group>
          <Button
            className="d-flex justify-content-center w-100"
            variant="success"
            type="submit"
          >
            Continue to check out
          </Button>
        </Form>
      </Col>
      <Col
        xs={6}
        md={4}
        className="m-4 p-4 align-items-center justify-content-center overflow-hidden"
      >
        <div className="max-h-100  shadow-lg bg-light rounded me-4">
          {cartInfo.map(renderCart)}
        </div>
      </Col>
    </Row>
  );
};

export default CheckOut;
