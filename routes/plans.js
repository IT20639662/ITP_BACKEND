const router = require("express").Router();
let plan = require("../models/plan");


router.route("/add").post((req,res)=>{
 
    const contractID = req.body.contractID;
    const employeeID = req.body.employeeID;
    const description = req.body.description;
    const category = req.body.category;
    const modifiedDate = req.body.modifiedDate;
   
    const newPlan = new plan({
        contractID,
        employeeID,
        description,
        category,
        modifiedDate,
       
       });

    newPlan.save().then(()=>{
        res.json("Plan added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    plan.find().then((plan)=>{
        req.json(plans)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) =>{
    let userId = req.params.id;
    const { contractID,
        employeeID,
        description,
        category,
        modifiedDate,} = req.body;

    const updatePlan = {
        contractID,
        employeeID,
        description,
        category,
        modifiedDate,
    }

    const update = await plan.findByIdAndUpdate(userId,updatePlan).
    then(() =>{
        res.status(200).send({status : "User updated", user: update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})

router.route("/delete/:id").delete(async (req,res) =>{
    let userId = req.params.id;

    await plan.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "User deleted"});

    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error: err.message })
    })
})

router.route("/get/:id").get(async (req,res)=>{
    let userId= req.params.id;
    await plan.findById(userId).then(() =>{
        res.status(200).send({status: "User fetched", user: user})
    }).catch(() =>{
        console.log(err.message);
        res.status(500).send({status : "Error with get user",error : err.message});
    })
})


module.exports = router;