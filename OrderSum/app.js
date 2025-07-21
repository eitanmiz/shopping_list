import cors from 'cors';
import express, { json } from 'express';
import { config } from './config/config.js';
import { connectDB } from './config/db.js';
import { saveShoppingList } from './controllers/shoppingController.js';

const app = express();

// Middleware
app.use(json());

// cors origin
app.use(cors({
  origin: config.clientHostUrl,
  methods: ['GET', 'POST'],
  credentials: true
}));

// Routes
app.use('/api', saveShoppingList );

// Start
connectDB();
const PORT = config.appPort;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));