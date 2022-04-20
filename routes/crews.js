const express = require('express');
const Crews = require('../models/crew');
// const Crews = require('../models/crews');

const router = express.Router();


//Save Machinery

router.post('/machinery/save',(req,res)=>{

    let newMachinery = new Crews(req.body);

    newMachinery.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Machinery Save Successfully"
        });
    });
});


//Get Machinery's details

router.get('/machineries',(req,res)=>{

    Crews.find().exec((err, machineries)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingMechineries: machineries
        });
    });
});


//Get a Specific Machinery

router.get('/machinery/:id', (req,res) => {

    let machineryId = req.params.id;

    Machineries.findById(machineryId,(err,machinery) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            machinery
        });
    });
});


//Update Machinery's details

router.put('/machinery/update/:id', (req,res)=>{

    Machineries.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, machineries) => {
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


//Delete Machinery in the list

router.delete('/machinery/delete/:id', (req,res)=>{

    Machineries.findByIdAndRemove(req.params.id).exec((err, deletedMachinery)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedMachinery
        });
    });
});


module.exports = router;