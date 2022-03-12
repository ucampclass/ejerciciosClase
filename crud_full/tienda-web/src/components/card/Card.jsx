import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Card = (props) => {
  const { user, setUser } = useContext(UserContext);

  const agregar = () => {
    user.shopping.push(props);
    console.log(user.shopping);

    setUser({ ...user });
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.descripcion}</p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-primary" onClick={agregar}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
