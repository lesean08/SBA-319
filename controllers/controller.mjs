const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User'); 
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

router.get('/db', (req, res) => { 
    console.log("Fetching users from the database");
    User.find((err, docs) => { 
        if (!err) { 
            res.render("db", { users: docs });
        } else { 
            console.log('Error in getting users: ' + err);
            res.status(500).send('Error in getting users');
        }
    }); 
});

app.use(router); 

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

module.exports = router;

