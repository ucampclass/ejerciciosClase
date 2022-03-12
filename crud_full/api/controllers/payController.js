const { GenericResponse } = require("../utils/genericResponse");
const { CustomMessages } = require("../utils/messages");
const mercadoPago = require("mercadopago");

mercadoPago.configure({ access_token: process.env.TOKEN_MERCADO_PAGO });

const pay = async (req, res) => {
  const response = new GenericResponse();
  try {
    const { items } = req.body;

    const preference = {
      items: [],
      back_urls: {
        success: "http://localhost:3000/feedback",
        failure: "http://localhost:3000/feedback",
        pending: "http://localhost:3000/feedback",
      },
      auto_return: "approved",
    };

    items.forEach((item) => {
      preference.items.push({
        title: item.nombre,
        unit_price: item.precio,
        quantity: item.cantidad,
      });
    });

    const responseMercadoPago = await mercadoPago.preferences.create(
      preference
    );

    response.data = responseMercadoPago.body.id;

    return res.json(response);
  } catch (error) {
    console.log(error);
    response.messages = CustomMessages.error_500;
    response.success = false;

    return res.status(500).json(response);
  }

  return res.json();
};

module.exports = { pay };
