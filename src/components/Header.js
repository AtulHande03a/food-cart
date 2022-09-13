import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";

import { NavLink } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../components/styles.css";
import Table from "react-bootstrap/Table";
import CartDetail from "./CartDetail";
import { REMOVE } from "../redux/actions/action";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [price, setPrice] = useState(0);

  const getData = useSelector((state) => state.cartReducer.cart);

  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeItem = (id) => {
    dispatch(REMOVE(id));
  };

  const totalAmount = useCallback(() => {
    let price = 0;

    getData.reduce((acc, val) => {
      acc = val.price * val.qnty + price;
      price = acc;

      return acc;
    }, 0);
    setPrice(price);
  }, [getData]);

  useEffect(() => {
    totalAmount();
  }, [totalAmount]);

  return (
    <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
      <Container>
        <NavLink to="/" className="text-decoration-none text-light mx-3">
          Food Cart
        </NavLink>
        <Nav className="me-auto">
          <NavLink to="/" className="text-decoration-none text-light">
            Home
          </NavLink>
        </Nav>

        <Badge
          badgeContent={getData.length}
          color="primary"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <i
            className="fa-solid fa-cart-shopping text-light"
            style={{ fontSize: 25, cursor: "pointer" }}
          ></i>
        </Badge>
      </Container>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {getData.length ? (
          <div className="card_details" style={{ width: "24rem", padding: 10 }}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {getData.map((e) => {
                  return (
                    <CartDetail
                      key={e.id}
                      e={e}
                      handleClose={handleClose}
                      removeItem={removeItem}
                    />
                  );
                })}

                <p className="text-center">Total :₹ {price}</p>
              </tbody>
            </Table>
          </div>
        ) : (
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "24rem", padding: 10, position: "relative" }}
          >
            <i
              className="fas fa-close smallclose"
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 23,
                cursor: "pointer",
              }}
            ></i>
            <p style={{ fontSize: 22 }}>Your carts is empty</p>
            <img
              src="./cart.gif"
              alt=""
              className="emptycart_img"
              style={{ width: "5rem", padding: 10 }}
            />
          </div>
        )}
      </Menu>
    </Navbar>
  );
};

export default Header;
