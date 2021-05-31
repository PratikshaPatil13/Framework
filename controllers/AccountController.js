//import Account from "../mongooseModel/Account";
// import Accounts from "../mongooseModel/Account"
// import router from "./MemberController"
const _ = require("lodash")
const router = Router()
router.post("/amount", (req, res, next) => {
    let currencyType = req.body.currencyType
    let al = req.body.al
    let fromDate = new Date(req.body.fromDate)
    let toDate = new Date(req.body.toDate)
    let winAmt = req.body.winAmt
    let response
    //var setQueryObject = { currencyType: { $match: "POINT@1" } }

    // if (fromDate) {
    //     setQueryObject.createdAt = {
    //         $gte: fromDate,
    //         $lte: toDate
    //     }
    // }
    let queryObj = { createdAt: { $gte: fromDate, $lte: toDate } }
    // console.log(_.camelCase(al))
    Account.find(queryObj)
        .limit(2)
        .lean()
        .exec(function (err, List) {
            if (err) {
                res.callback(err)
                // res.status(500).json(err)
            } else if (_.isEmpty(List)) {
                res.callback(null, [])
            } else {
                List.forEach((list) => {
                    if (list.currencyType == "POINT@1") {
                        // list.toObject()
                        list.winAmt =
                            list["winAmt"] * list[`${_.camelCase(al)}ShareRate`]
                        // console.log(`${_.camelCase(al)}ShareRate`)
                    }
                })
                res.callback(null, List)
            }
        })

    // .then((List) => {
    //     List.forEach((list) => {
    //         if (list.currencyType == "POINT@1") {
    //             // list.toObject()
    //             list.winAmt =
    //                 list["winAmt"] * list[`${_.camelCase(al)}ShareRate`]
    //             // console.log(`${_.camelCase(al)}ShareRate`)
    //         }
    //     })
    //     res.callback(null, List)
    // })
    // .catch((err) => res.status(500).json({ error: err }))

    // Accounts.find(_.find(setQueryObject, function (o) {
    //     return (o.currencyType = "POINT@1")
    // }))
})

export default router
