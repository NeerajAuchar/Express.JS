const express =  require("express");
const router = express.Router();

router.route("/").get((req, res)=>{
    res.status(200).send("Pando doggiee");
});


module.exports = router;
