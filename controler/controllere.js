const 	subtractingNumber=(req,res) => {
    const{Number1,Number3}=req.body
    let data=Number1-Number3
    try {
        res.json({
            result:data,
            message:"Dont worry"
        })
    } catch (error) {
        message:error.message
    }
}
module.exports={subtractingNumber}