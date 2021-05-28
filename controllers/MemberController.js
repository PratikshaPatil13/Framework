import Members from "../mongooseModel/Member";

const router = Router()
// router.post("/find" , (req , res) => {
//     var username = req.body.username;
//     //Members.find({username:{$regex:username}})
//     Members.aggregate([{$match:{username:{$regex:username}}},{
//         $project:{
//             username:1, hierarchy:1
//         }
//     }])          
//           .exec()
//           .then(memberList => res.status(200).json(memberList))
//           .catch(err => res.status(500).json({ error: err }));
// });


router.post("/find" , (req , res) => {
    var username = req.body.username;
    Members.find({username:{$regex:username}}) 
    
    .populate('hierarchy',{_id:0, username:1})
    .exec((err, hierarchy) =>{
        res.json(hierarchy)

    })
    
});


router.get('/:page', (req, res, next) => {
    var skip = req.params.page
    console.log(req.params)
    console.log(2, skip)
    skip = parseInt(skip)
    Members.find().skip(skip).limit(2)
          .exec()
          .then(memberList => res.status(200).json(memberList))
          .catch(err => res.status(500).json({ error: err }));
});

router.post('/page', (req, res, next) =>{
    var skip = req.body.page
    var page = req.body.page
    page = parseInt(page)
    skip = parseInt(skip)
    var response
    if(page < 0 || page == 0){
        response = {"error": true,"message": "Invalid page Number"};
        res.json(response)
        return(0)
    }
    const limit = 10
    skip = (page-1)*limit
    Members.find(query).skip(skip).limit(10)
        .exec()
        .then(memberList => res.status(200).json(memberList))
        .catch(err => res.status(500).json({ error: err}));
});










export default router;
