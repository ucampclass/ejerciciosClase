import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Shopping = () => {
  const { userCtx } = useContext(UserContext);

  const pay = async () => {
    const body = {
      items: userCtx.shopping.map((x) => ({
        nombre: x.nombre,
        cantidad: 1,
        precio: 2.5,
      })),
    };

    const result = await (
      await fetch("http://localhost:9000/api/pays", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
    ).json();
    console.log(result.data);
    createScriptPay(result.data);
  };

  const createScriptPay = (preferenceId) => {
    // eslint-disable-next-line no-undef
    const mp = new MercadoPago("TEST-337c4426-2bd5-4acc-a9b4-ae85301e4c3a", {
      locale: "es-MX",
    });

    mp.checkout({
      preference: {
        id: preferenceId,
      },
      render: {
        container: ".order-actions", // Indica el nombre de la clase donde se mostrará el botón de pago
        label: "Pagar***", // Cambia el texto del botón de pago (opcional)
      },
    });

    // const script = document.createElement("script");
    // script.src = "https://sdk.mercadopago.com/js/v2/web-payment-checkout.js";
    // script.type = "text/javascript";
    // script.dataset.preferenceId = preferenceId;
    // script.setAttribute("data-button-label", "Pagar con Mercado Pago");
    // document.getElementById("order-actions").innerHTML = "";
    // document.querySelector("#order-actions").appendChild(script);
  };

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
        <button className="btn btn-success" onClick={pay}>
          Comprar
        </button>

        <div id="order-actions" className="order-actions">
          <p>volver</p>
          <p>confirmar </p>
        </div>
      </footer>
    </>
  );
};

export default Shopping;
