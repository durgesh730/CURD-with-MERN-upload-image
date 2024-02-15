const LoginModel = require('../Models/LoginModel')

const LoginController = async (req, res) => {
    const { email } = req.body
    try {
        const check = await LoginModel.find({ email })
        if (check.length > 0) {
            const updateData = await LoginModel.findOneAndUpdate(
                { email: email },
                {
                    $set: {
                        fname: req.body.fname,
                        lname: req.body.lname,
                        phone: req.body.phone,
                        email: req.body.email,
                        pic: req.body.pic,
                    }
                },
                { new: true }
            )
            res.status(200).send({ msg: "Your Data Updated Successfully", updateData, status: 201 })
        }
        else {
            const data = await LoginModel.create(req.body);
            res.status(200).send({ msg: "Your data Saved Successfully", data, status: 201 })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send("Some internal error")
    }
}

const GetALLData = async (req, res) => { res.send(await LoginModel.find()) }

const DeleteUser = async (req, res) => {
    const id = req.params.id
    try {
        await LoginModel.findByIdAndDelete({ _id: id });
        res.status(200).send({ msg: "delete successfully", status: 200 })
    } catch (error) {
        console.log(error)
        res.status(500).send("some internal error")
    }
}

module.exports = { LoginController, GetALLData, DeleteUser }