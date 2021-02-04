const express = require('express');
const router = express.Router();
const QuestionDB = require('../models/questionDB');


//get back all the documents
router.get('/', async (req, res) => {
    try {
        const questionsDB = await QuestionDB.find();
        
        res.json(questionsDB);
        
    }
    catch (err) {
        res.json({message: err});
    }
    
});



//submits a document
router.post('/', async (req, res) => {
    const questionDB = new QuestionDB({
        ID: req.body.ID,
        A: req.body.A,
        B: req.body.B,
        C: req.body.C,
        D: req.body.D,
        TrueAnswer: req.body.TrueAnswer,
    });

        try {
            const savedQuestionDB = await questionDB.save();
            res.json(savedQuestionDB);
        }
        catch(err){
            res.json({message: err});
        }
});

//specific document
router.get('/:questionDBId', async (req, res) => {
    try{
        const questionDB = await Question.find({ID: req.params.questionDBId});
        res.json(questionDB);
    }
    catch (err){
        res.json({message: err});
    }
});


//delete document
router.delete('/:questionDBId', async (req, res) => {
    try{
        const removedQuestionDB = await QuestionDB.remove({ ID: req.params.questionDBId });
        res.json(removedQuestionDB);
    }
    catch (err){
        res.json({message: err});
    }
});

//update document
router.patch('/:questionDBId', async (req, res) => {
    try{
        const updatedQuestionDB = await QuestionDB.updateOne({ ID: req.params.questionDBId }, req.body);
        res.json(updatedQuestionDB);
    }
    catch (err){
        res.json({message: err});
    }
    });



module.exports = router;