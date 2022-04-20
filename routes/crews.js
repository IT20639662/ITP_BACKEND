const express = require('express');
const Crews = require('../models/crew');
// const Crews = require('../models/crews');

const router = express.Router();


//Save Machinery

router.post('/save',(req,res)=>{

    let newCrew = new Crews(req.body);

    newCrew.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Crew Save Successfully"
        });
    });
});


//Get crew details

router.get('/getall',(req,res)=>{

    Crews.find().exec((err, crews)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingcrews: crews
        });
    });
});


//Get a Specific crew 

router.get('/get/:id', (req,res) => {

    let contractID = req.params.id;

    Crews.findById(contractID,(err,crew) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            crew
        });
    });
});


//Update Crew's details

router.put('/update/:id', (req,res)=>{

    Crews.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, crews) => {
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


//Delete Crew in the list

router.delete('/delete/:id', (req,res)=>{

    Crews.findByIdAndRemove(req.params.id).exec((err, deletedCrew)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedCrew
        });
    });
});


module.exports = router;