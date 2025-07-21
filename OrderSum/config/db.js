import { connect } from 'mongoose';
import { config } from './config.js';

export const connectDB = async () => {
  try {
    await connect(config.mongoBaseUrlDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('DB connection error:', err);
    process.exit(1);
  }
};