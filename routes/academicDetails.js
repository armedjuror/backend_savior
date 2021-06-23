const Student = require("../model/student");
const Mark =require("../model/marks");

module.exports = async (req, res) => {
    try {
        let email = req.headers.email;
        if (!email) {
          return res
            .status(500)
            .json({ message: "Email is required" });
        }
        let student = await Student.findOne({ email: email });
        if(student){
            await Mark.find({studentid: student._id},(getMarksErr, marksList) => {
                if(getMarksErr) {
                    res.status(500).json({message: 'Some glitch in getting the marks.'})
                }
                res.status(200).json(marksList)
            });
        }
        else{
          return res.status(404).json({ message: "No User Found with the given email" });
        }
      }catch (err) {
        console.log(
          `err `,
          err
        );
      }
};