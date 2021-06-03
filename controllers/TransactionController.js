const router = Router()
router.post("/getData",(req,res) => {
    TransactionModel.getData(req.body,res.callback)
})
export default router
