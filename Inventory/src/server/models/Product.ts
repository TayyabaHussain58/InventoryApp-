import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 0 },
  location: { type: String, required: true },
  lastRestocked: { type: Date, default: Date.now }
});

export const Product = mongoose.model('Product', productSchema);

 