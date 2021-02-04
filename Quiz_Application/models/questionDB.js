const mongoose = require('mongoose');

const QuestionsSchema = mongoose.Schema(
    {
        ID: Number,
        A: String,
        B: String,
        C: String,
        D: String,
        TrueAnswer: String,
        
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('questions', QuestionsSchema);

