const router = require("express").Router();
const Marking = require("../models/MarkingScheme");



router.route("/").post((req,res)=>{
    const sid = req.body.sid;
    const specialization = req.body.specialization;
    const pName = req.body.pName;
    const marks = req.body.marks;
    const criteria = req.body.criteria;



    const newTopic = new Marking({
        sid,
        specialization,
        pName,
        marks,
        criteria
    })
    
    newTopic.save().then(()=>{
        res.json("Marking Added")
    }).catch((err)=>{
        console.log(err);
    })
    

})

//get all topics
router.get("/",(req,res)=>{

    Marking.find().exec((err,Marking)=>{
          if(err){
              return res.status(400).json({
                 error:err
             });
         }
            return res.status(200).json({
              success:true,
              markingRouter:Marking,
          });
    });
})


  //get single topic
  router.get("/:id",(req,res)=>{

    let mid = req.params.id;

    Marking.find({_id:mid}).exec((err,Marking)=>{
          if(err){
              return res.status(400).json({
                 error:err
             });
         }
            return res.status(200).json({
              success:true,
              markingcRouter:Marking,
          });
      });
  })

  //update single record

  router.route("/:id").put(async (req, res)=>{
    let mid = req.params.id;
    const {sid,specialization,pName,marks,criteria} = req.body;

    const updateMarking = {
        sid,
        specialization,
        pName,
        marks,
        criteria
    }

    const update = await Marking.findByIdAndUpdate(mid,updateMarking)
    .then(()=>{
        res.status(200).send({status: "Updated"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error update"})
    })
})    


router.route("/:id").delete(async (req,res)=>{
    let mid = req.params.id;
    await Marking.findByIdAndDelete(mid)
    .then(()=>{
        res.status(200).send({status: "Deleted!"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error delete"})
    })
})



module.exports = router;
