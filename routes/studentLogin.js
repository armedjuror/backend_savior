const Student = require("../model/student");

module.exports = async (req, res) => {
  try {
    let email = req.headers.email;
    let password = req.headers.password;
    if (!email || !password) {
      return res
        .status(500)
        .json({ message: "both Email & Password are required" });
    }
    let student = await Student.findOne({ email: email });
    if(student){
      if(password===student.password){
        let token = {
          name: student.name,
          email: student.email,
          phone: student.phone,
        };
        return res.status(200).json({ token });
      }
      else{
        return res.status(401).json({ message: "wrong password" });
      }
    }
    else{
      return res.status(404).json({ message: "No User Found with the given email" });
    }
  }catch (err) {
    console.log(
      `err creating token for student `,
      err
    );
  }
};
