import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  categoryId: Number,
  categoryName: String,
  name: String,
  quantity: Number,
});

const shoppingListSchema = new Schema({
  userName: String,
  userAddress: String,
  userEmail: String,
  shoppingList: [productSchema],
}, { timestamps: true });

export default model('ShoppingList', shoppingListSchema);