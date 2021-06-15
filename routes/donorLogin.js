const Donor = require("../model/donor");

module.exports = async (req, res) => {
  try {
    let email = req.headers.email;
    let password = req.headers.password;
    if (!email || !password) {
      return res
        .status(500)
        .json({ message: "both Email & Password are required" });
    }
    let donor = await Donor.findOne({ email: email });
    if(donor===null){
        return res.status(404).json({ message: "No User Found with the given email" });
    }
    let isPasswordValid = await compare(password, donor.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "wrong password" });
    }

    let token = {
      userType: "donor",
      name: student.name,
      email: student.email,
      phone: student.phone,
    };
    return res.status(200).json({ token });
  } catch (err) {
    console.log("error in logging in");
  }
};