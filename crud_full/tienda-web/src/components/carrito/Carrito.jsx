import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Carrito = () => {
  const { user } = useContext(UserContext);

  const pagar = async () => {
    const data = { articulos: [] };
    user.shopping.forEach((p) => {
      const add = { nombre: p.nombre, precio: 2, cantidad: 1 };
      data.articulos.push(add);
    });

    fetch("http://localhost:9000/api/pagos", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((response) => {
        if (response.success) {
          mostrarMP(response.data);
        }
      });
  };

  const mostrarMP = (token) => {
    // eslint-disable-next-line no-undef
    const mp = new MercadoPago("TEST-872c5b17-32d5-4b45-a58a-743fcb0dea49", {
      locale: "es-MX",
    });

    // Inicializa el checkout
    mp.checkout({
      preference: {
        id: token,
      },
      render: {
        container: ".cho-container", // Indica el nombre de la clase donde se mostrará el botón de pago
        label: "Pagar", // Cambia el texto del botón de pago (opcional)
      },
    });
  };

  //user.shopping

  return (
    <div>
      <h3>Carrito</h3>
      <ul className="list-group">
        {user.shopping.map((x) => {
          return (
            <li
              key={x._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {x.nombre}
              <span className="badge bg-primary rounded-pill">1</span>
            </li>
          );
        })}
      </ul>

      <button type="button" className="btn btn-success" onClick={pagar}>
        Proceder
      </button>
      <div className="cho-container"></div>
    </div>
  );
};

export default Carrito;
