import { useState } from "react";

import Cardsdata from "./CardsData";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import CardInfo from "./CardInfo";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(ADD(e));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Project</h2>

      <div className="row">
        {data.map((element) => {
          const { id } = element;
          return (
            <CardInfo key={id} element={element} handleClick={handleClick} />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
