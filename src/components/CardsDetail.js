import { useCallback, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SingleCard from "./SingleCard";

const CardsDetail = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const getData = useSelector((state) => state.cartReducer.cart);

  const filterData = useCallback(() => {
    let filteredData = getData.filter((item) => {
      return parseInt(item.id) === parseInt(id);
    });
    setData(filteredData);
  }, [id, getData]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((ele) => {
              return <SingleCard key={ele.id} ele={ele} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetail;
