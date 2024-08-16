import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import db from './db/node.mjs';
//import models from './models/stats.mjs';
//import controllers from './controllers/controller.mjs';
//import routes from './routes/sportRoutes.mjs';
//import views from './views/Scores.jsx';
//import views from './views/Teams.jsx';

dotenv.config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error('MONGO_URI is not defined in the environment variables');
}

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));
