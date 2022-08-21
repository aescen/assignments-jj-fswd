const mongoose = require('mongoose');

const MAX_ADDRESS = 2;

const AddressSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  addressList: [
    {
      type: String,
      required: true,
      validate: {
        validator: function (v, x, z) {
          return !(this.addressList.length > MAX_ADDRESS);
        },
        message: (props) =>
          `${props.value} exceeds maximum array size (${MAX_ADDRESS})`,
      },
    },
  ],
});

const AddressModel = mongoose.model('address', AddressSchema);

module.exports = AddressModel;
