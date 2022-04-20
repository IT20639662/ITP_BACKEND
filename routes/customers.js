const express = require('express');
const Customers = require('../models/customers');

const router = express.Router();


//Save Customers

router.post('/customer/save',(req,res)=>{
    
    const customerID = req.body.customerID;
    const customerName = req.body.customerName;
    const customerEmail = req.body.customerEmail;
    const customerPhone = req.body.customerPhone;
    const customerUsername = req.body.customerUsername;
    const customerPassword = req.body.customerPassword;
    const customerConfirmPassword = req.body.customerConfirmPassword;

    const newCustomer = new Customers({
        customerID,
        customerName,
        customerEmail,
        customerPhone,
        customerUsername,
        customerPassword,
        customerConfirmPassword
    });

    newCustomer.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"new Customer Save Successfully"
        });
    });
});


//Get Customer's details

router.get('/customers',(req,res)=>{

    Customers.find().exec((err, customers)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingCustomers: customers
        });
    });
});


//Get a Specific Customer

router.get('/customer/:id', (req,res) => {

    let CustomerId = req.params.id;

    Customers.findById(CustomerId,(err,customer) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            customer
        });
    });
});


//Update Customer's details

router.put('/customer/update/:id', (req,res)=>{

    Customers.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, customers) => {
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


//Delete Customer in the list

router.delete('/customers/delete/:id', (req,res)=>{

    Customers.findByIdAndRemove(req.params.id).exec((err, deletedCustomer)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedCustomer
        });
    });
});


module.exports = router;