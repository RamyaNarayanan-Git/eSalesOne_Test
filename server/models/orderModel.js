import { Schema, Types, model } from 'mongoose';

const OrderSchema = new Schema({
  fullName: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  cardNumber: String,
  expiryDate: String,
  cvv: String,
  productId: Types.ObjectId,
  variant: String,
  quantity: Number,
  subtotal: Number,
  total: Number,
  orderNumber: String,
  status: String,
});

export default model('Order', OrderSchema);