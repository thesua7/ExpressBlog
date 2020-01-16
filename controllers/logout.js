
module.exports = (req,res) => {
    console.log("lOUT")

    req.session.destroy(() => {
        res.redirect('/')
    })

}