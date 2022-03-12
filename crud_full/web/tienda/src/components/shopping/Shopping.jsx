import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Shopping = () => {
  const { userCtx } = useContext(UserContext);

  return (
    <>
      <h3>Carrito de compra</h3>
      <div className="mt-5">
        <ul className="list-group">
          {userCtx.shopping.map((x, i) => {
            return (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {x.nombre}
                <span className="badge bg-primary rounded-pill">1</span>
              </li>
            );
          })}
        </ul>
      </div>
      <footer className="mt-3">
        <button className="btn btn-success">Comprar</button>
      </footer>
    </>
  );
};

export default Shopping;
