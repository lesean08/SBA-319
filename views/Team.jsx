import mongoose from 'mongoose';

const sportsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    },
    newTeam: Boolean
});

const Sports = mongoose.model('Sports', sportsSchema);

export default Sports;