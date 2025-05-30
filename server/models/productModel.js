import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    variants: [String],
    inventory: Number,
    imageUrl:String
})

export default model('Product', productSchema);