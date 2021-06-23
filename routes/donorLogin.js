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
    if(donor){
      if(password===donor.password){
        let token = {
          name: donor.name,
          email: donor.email,
          phone: donor.phone,
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
      `err creating token for donor `,
      err
    );
  }
};