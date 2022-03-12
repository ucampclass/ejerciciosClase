import React, { useContext } from "react";
import "./card.css";
import { UserContext } from "../../context/UserContext";

const Card = (props) => {
  const { userCtx, setUserCtx } = useContext(UserContext);
  const add = () => {
    userCtx.shopping.push(props);
    setUserCtx({ ...userCtx });
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.imgUrl} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.descripcion}</p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-primary"
            disabled={props.cantidad === 0}
            onClick={add}
          >
            {props.cantidad === 0 ? "Agotado" : "Agregar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
