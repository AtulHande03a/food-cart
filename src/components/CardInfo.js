import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardInfo = ({ element, handleClick }) => {
  return (
    <>
      <Card
        style={{ width: "22rem", border: "none" }}
        className="mx-2 mt-4 card_style"
      >
        <Card.Img
          variant="top"
          src={element.imgdata}
          style={{ height: "16rem" }}
          className="mt-3"
        />
        <Card.Body>
          <Card.Title>{element.rname}</Card.Title>
          <Card.Text>Price : ₹ {element.price}</Card.Text>
          <div className="button_div d-flex justify-content-center">
            <Button
              variant="primary"
              className="col-lg-12"
              onClick={() => handleClick(element)}
            >
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardInfo;
