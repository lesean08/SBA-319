import express from 'express';
const router = express.Router();
import models from './models/stats.mjs'
import db from './db/node.mjs';
import controllers from './controllers/controller.mjx';
import routes from './routes/sportRoutes.mjs';

router.get('/score', async (req, res) => {
    try {
        await sportRoutes.create([
            {
                team: 'bulls',
                score: "97",
                win: true
            }, 
            {
                team: 'lakers',
                score: '101',
                win: true
            }, 
            {
                team: 'steelers',
                score: '23',
                win: false,
            }   
        ])
        res.status(200).redirect('/sportsRoute')
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/', async (req, res) => {
    try {
        const sportRoutes = await sports.find({});
        res.status(200).render('sportRoutes/Index', { sports: sportRoutes})
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/new', (req, res) => {
    res.render('sports/New');

})

router.delete('/:id', async(req, res) => {
    try {
        const deletedSports = await Sports.findByIdAndDelete(req.params.id);
        console.log(deleteSports);
        res.status(200).redirect('/sports');
    } catch (e) {
        res.status(400).send(e);
    }
})


router.put('/:id', async (req, res) => {
        if (req.body.win === 'on') {
            req.body.win = true;
        } else {
            req.body.win = false;
        }
        console.log(req.body);

    try {
        const updatedSports = await Fruit.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        console.log(updatedSports);
        res.redirect(`/sports/${req.params.id}`);
        
    } catch (e) {
        res.status(400).send(e);
    }
})

router.post('/', async(req, res) => {
    if (req.body.win === 'on') {
        req.body.win = true;
    } else {
        req.body.win = false;
    }
    console.log(req.body);

    try {
        const createdSports = await sports.create(req.body);

        res.status(200).redirect('/sports');
    
    } catch(e) {
        res.status(400).send(e);
    }
})

router.get("/:id/edit", async(req, res) => {
    try {
        const foundSports = await Sports.findById(req.params.id);
        res.status(200).render('sports/Edit', {sports: foundSports});

    } catch(e) {
        res.status(400).send(e);
    }
})
router.get('/:id', async (req, res) => {
    try {
        const foundSports= await Sports.findById(req.params.id);
        res.render('sports/Show', {sports: foundSports});
            
    } catch (e) {
        res.status(400).send(e);
    }
})

export default router;