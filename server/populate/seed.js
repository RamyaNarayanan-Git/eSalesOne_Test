import { connect, disconnect } from 'mongoose';
import Product from '../models/productModel.js';

await connect('mongodb://localhost:27017/mern-ecommerce');

const products = [
  {
    title: 'Classic Hoodie',
    description: 'A warm and comfortable hoodie perfect for everyday wear.',
    price: 49.99,
    variants: ['Black - M', 'Gray - L', 'Blue - XL'],
    inventory: 100,
    imageUrl: 'https://via.placeholder.com/300x300.png?text=Hoodie',
  },
  {
    title: 'Casual T-Shirt',
    description: 'Breathable and stylish t-shirt for summer.',
    price: 19.99,
    variants: ['White - S', 'Black - M', 'Yellow - L'],
    inventory: 150,
    imageUrl: 'https://via.placeholder.com/300x300.png?text=T-Shirt',
  },
  {
    title: 'Running Shoes',
    description: 'Lightweight shoes designed for performance running.',
    price: 89.99,
    variants: ['Red - 9', 'Black - 10', 'White - 11'],
    inventory: 75,
    imageUrl: 'https://via.placeholder.com/300x300.png?text=Shoes',
  },
  {
    title: 'Slim Fit Jeans',
    description: 'Modern slim fit jeans with great stretch and comfort.',
    price: 59.99,
    variants: ['Dark Blue - 30', 'Black - 32', 'Light Blue - 34'],
    inventory: 60,
    imageUrl: 'https://via.placeholder.com/300x300.png?text=Jeans',
  },
  {
    title: 'Smartwatch Pro',
    description: 'Track your fitness, messages, and more with style.',
    price: 199.99,
    variants: ['Silver', 'Black', 'Rose Gold'],
    inventory: 40,
    imageUrl: 'https://via.placeholder.com/300x300.png?text=Smartwatch',
  },
];

const seedProducts = async () => {
  try {
    await Product.deleteMany(); // Optional: clear old data
    await Product.insertMany(products);
    console.log('Seeded multiple products successfully.');
  } catch (err) {
    console.error('Error seeding products:', err);
  } finally {
    disconnect();
  }
};

seedProducts();
