import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBalance } from "../store/features/cartSlice";
import { addToCart } from "../store/features/cartSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./products.css";

// Products handle displays the product items from state
const Products = () => {
  const cardInfo = useSelector((state) => state.cartSlice.cardInfo);

  const dispatch = useDispatch();

  let ref = useRef(0);
  let arr = [];
  function addToCartState(e) {
    const checkOutSelection = cardInfo.find(({ id }) => id === e.target.value);

    ref.current = ref.current + checkOutSelection.price;

    dispatch(updateBalance(ref.current));

    arr = [...arr, checkOutSelection];

    dispatch(addToCart(arr));
  }
  const renderCard = (card) => {
    return (
      <Col sm={12} md={6} lg={4} className="p-2">
        <Card className="mb-4">
          <Image src={card.image}></Image>
          <div className="bg-light p-4 d-flex justify-content-between align-items-center shadow bg-light">
            <div class="d-flex justify-content-between align-items-center">
              <Card.Text className="h5 fw-bold">R{card.price}</Card.Text>
            </div>
            <Button
              size="sm"
              variant="success"
              value={card.id}
              onClick={addToCartState}
            >
              Add to Cart
            </Button>
          </div>
          <Card.Body className="shadow bg-light">
            <Card.Text className="fw-bold">{card.title}</Card.Text>
            <Card.Text className="fst-italic">{card.text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };
  //  --------------------------------------------------------------------------------------------------------------------------------
  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default Products;
