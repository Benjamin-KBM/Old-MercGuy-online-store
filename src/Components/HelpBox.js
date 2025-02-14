import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// Shipping policy model
function HelpBox(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Shipping Policy</h4>

        <h3>Domestic Shipping Policy </h3>
        <p>
          All Orders are processed within 2-3 business days. Orders are not
          shipped or delivered on weekends or holidays. If We are experiencing a
          high volume of orders, shipments may be delayed by a few days.
          additional days in transit for delivery. If there will be a
          significant delay in shipment of Your Order, We will contact You via
          email or telephone.
        </p>
        <h3>Shipping rates & delivery estimates</h3>
        <p>
          Shipping charges for Your Orders will be calculated and displayed at
          checkout
        </p>

        <p>
          ● Shipping method: FedEx Standard Shipment cost: Free Estimated
          delivery time: 3-5 business days
        </p>

        <p>
          ● Shipping method: FedEx Two Days Shipment cost: $12.95 USD Estimated
          delivery time: 2 business days
        </p>

        <p>
          ● Shipping method: FedEx Standard Shipment cost: $19.95 USD Estimated
          delivery time: 1-2 business days
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HelpBox;
