const mercadopago = require("mercadopago");
const { GenericResponse } = require("../utils/genericResponse");
const { CustomMessages } = require("../utils/messages");

mercadopago.configure({
  access_token: process.env.TOKEN_MP,
});

const pago = async (req, res) => {
  const response = new GenericResponse();
  const { articulos } = req.body;
  // title: "Producto a",
  // unit_price: 20,
  // quantity: 1,

  try {
    let preference = {
      items: [],
    };
    // Sacar de articulos cada producto y pasarlo a como lo requiere MP

    articulos.forEach((prod) => {
      const add = {
        tittle: prod.nombre,
        unit_price: prod.precio,
        quantity: prod.cantidad,
      };

      preference.items.push(add);
    });

    // respose.body.id
    const result = await mercadopago.preferences.create(preference);
    response.data = result.body.id;

    return res.json(response);
  } catch (error) {
    console.log(error);
    response.messages = CustomMessages.error_500;
    response.success = false;

    return res.status(500).json(response);
  }
};

module.exports = { pago };
