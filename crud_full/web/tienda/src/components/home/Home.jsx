import React, { useEffect, useState } from "react";
import Card from "../card/Card";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("http://localhost:9000/api/products")
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
      });
  };

  return (
    <div className="mt-5">
      <h2 className="mt-5">Productos</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data.map((x) => {
          return <Card key={x._id} {...x} />;
        })}
      </div>
    </div>
  );
};

export default Home;
