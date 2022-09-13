import React from "react";
import { NavLink } from "react-router-dom";

const CartDetail = ({ e, handleClose, removeItem }) => {
  return (
    <>
      <tr>
        <td>
          <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
            <img
              src={e.imgdata}
              style={{ width: "5rem", height: "5rem" }}
              alt=""
            />
          </NavLink>
        </td>
        <td>
          <p>{e.rname}</p>
          <p>Price : ₹{e.price}</p>
          <p>Quantity : {e.qnty}</p>
          <p
            style={{
              color: "red",
              fontSize: 20,
              cursor: "pointer",
            }}
            onClick={() => removeItem(e.id)}
          >
            <i className="fas fa-trash smalltrash"></i>
          </p>
        </td>

        <td
          className="mt-5"
          style={{
            color: "red",
            fontSize: 20,
            cursor: "pointer",
          }}
          onClick={() => removeItem(e.id)}
        >
          <i className="fas fa-trash largetrash"></i>
        </td>
      </tr>
    </>
  );
};

export default CartDetail;
