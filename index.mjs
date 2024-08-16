import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
//import db from './db/node.mjs';
import jsxViewEngine from 'jsx-view-engine';
import sportRoutes from './routes/sportRoutes.mjs'; 
//import controllers from './controllers/controller.mjs';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'jsx');

app.engine('jsx', jsxViewEngine());

app.use(express.json());
app.use('/sports', sportRoutes);

app.get('/', (req, res) => {
    res.send('This is my sports models');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
