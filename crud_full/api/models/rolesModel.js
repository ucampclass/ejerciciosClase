const { model, Schema } = require('mongoose');

const roleSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
});

module.exports = model('role', roleSchema);
