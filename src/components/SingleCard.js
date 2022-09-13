import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { ADD, DELETE, REMOVE } from "../redux/actions/action";
import { useDispatch } from "react-redux";

const SingleCard = ({ ele }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(ADD(e));
  };

  const removeItem = (id) => {
    dispatch(REMOVE(id));

    navigate("/");
  };

  const deleteItem = (item) => {
    dispatch(DELETE(item));
  };

  return (
    <>
      <div className="items_img">
        <img src={ele.imgdata} alt="img" />
      </div>

      <div className="details">
        <Table>
          <tr>
            <td>
              <p>
                <strong>Restaurant</strong> : {ele.rname}
              </p>
              <p>
                <strong>Price</strong> : ₹{ele.price}
              </p>
              <p>
                <strong>Dishes</strong> : {ele.address}
              </p>
              <p>
                <strong>Total</strong> :₹ {ele.price * ele.qnty}
              </p>
              <div
                className="mt-5 d-flex justify-content-between align-items-center"
                style={{
                  width: 100,
                  cursor: "pointer",
                  background: "#ddd",
                  color: "#111",
                }}
              >
                <span
                  style={{ fontSize: 24 }}
                  onClick={
                    ele.qnty <= 1
                      ? () => removeItem(ele.id)
                      : () => deleteItem(ele)
                  }
                >
                  -
                </span>
                <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                <span style={{ fontSize: 24 }} onClick={() => handleClick(ele)}>
                  +
                </span>
              </div>
            </td>
            <td>
              <p>
                <strong>Rating :</strong>
                <span
                  style={{
                    background: "green",
                    color: "#fff",
                    padding: "2px 5px",
                    borderRadius: "5px",
                  }}
                >
                  {ele.rating} ★
                </span>
              </p>
              <p>
                <strong>Order Review :</strong>
                <span>{ele.somedata} </span>
              </p>
              <p>
                <strong>Remove :</strong>
                <span>
                  <i
                    className="fas fa-trash"
                    style={{
                      color: "red",
                      fontSize: 20,
                      cursor: "pointer",
                    }}
                    onClick={() => removeItem(ele.id)}
                  ></i>
                </span>
              </p>
            </td>
          </tr>
        </Table>
      </div>
    </>
  );
};

export default SingleCard;
