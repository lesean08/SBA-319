import express from 'express';
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.send('This is the sports route');
});

export default router;
