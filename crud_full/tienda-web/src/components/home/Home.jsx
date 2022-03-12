import React, { useEffect, useState } from "react";
import Card from "../card/Card";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = () => {
    fetch("http://localhost:9000/api/products")
      .then((resp) => resp.json())
      .then((value) => {
        if (value.success) {
          setProducts(value.data);
          console.log(value);
        }
      });
  };

  return (
    <div>
      <h2>Productos</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((x) => {
          return <Card key={x._id} {...x} />;
        })}
      </div>
    </div>
  );
};

export default Home;
