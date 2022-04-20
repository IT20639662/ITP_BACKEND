const express = require('express');
const Feedbacks = require('../models/feedbacks');

const router = express.Router();


//Save feedbacks
router.post('/feedback/save',(req,res)=>{
    
    const feedbackID = req.body.feedbackID;
    const name = req.body.name;
    const email = req.body.email;
    const yourfeedback = req.body.yourfeedback;
    const rating = req.body.rating;
   
    const newFeedback = new Feedbacks({
        feedbackID,
        name,
        email,
        yourfeedback,
        rating
    });

    newFeedback.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"new Feedback Save Successfully"
        });
    });
});


//Get feedback's details

router.get('/feedbacks',(req,res)=>{

    Feedbacks.find().exec((err, feedbacks)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingFeedbacks: feedbacks
        });
    });
});


//Get a Specific feedback of customer

router.get('/feedback/:id', (req,res) => {

    let FeedbackId = req.params.id;

    Feedbacks.findById(FeedbackId,(err,feedback) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            feedback
        });
    });
});


//Update feedback's details

router.put('/feedback/update/:id', (req,res)=>{

    Feedback.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, feedbacks) => {
            if(err) {
                return res.status(400).json({
                    error: err
                });
            }
            return res.status(200).json({
                success: "Updated Successfully."
            });
        }
    );
});


//Delete feedback in the list

router.delete('feedbacks/delete/:id', (req,res)=>{

    Feedbacks.findByIdAndRemove(req.params.id).exec((err, deletedFeedback)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedFeedback
        });
    });
});


module.exports = router;