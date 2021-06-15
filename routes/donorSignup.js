const Donor = require('../model/donor');

module.exports = async (req, res) => {
    let payload = req.body;
    let findUserWithSimilarEmail = await Donor.findOne({email: req.body.email})
    if(findUserWithSimilarEmail){
       return res.status(400).send({message: 'User with similar email already exists'})
    }

    const donorEntry = {
        id: payload._id,
        'name': payload.name,
        'age': payload.age,
        'gender': payload.gender,
        'address': payload.address,
        'city': payload.city,
        'pin': payload.pin,
        'phone': payload.phone,
        'organisation': payload.organisation,
        'email': payload.email,
        'password': payload.password,
        'adoptionCount': 0
    }
    
    let DonorRegistry = new Donor(donorEntry);
    
    DonorRegistry.save(async (registerErr, result) => {
        if(registerErr) {
            return res.status(500).send({message: 'Some glitch in adding the donor. Please try after sometime'})
        }else{
            let token = {
                userType: "donor",
                name: payload.name,
                city: payload.city,
                email: payload.email,
                phone: payload.phone,
              };
              return res.status(200).send({
                id: result._id,
                message: 'donor added successfully',
                token: token
            })
        }
    });
}