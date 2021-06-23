const Student = require('../model/student');

module.exports = async (req, res) => {
    let payload = req.body;
    let findUserWithSimilarEmail = await Student.findOne({email: req.body.email})
    if(findUserWithSimilarEmail){
       return res.status(400).send({message: 'User with similar email already exists'})
    }

    const studentEntry = {
        id: payload._id,
        'name': payload.name,
        'age': payload.age,
        'gender': payload.gender,
        'address': payload.address,
        'city': payload.city,
        'pin': payload.pin,
        'phone': payload.phone,
        'guardianName': payload.guardianName,
        'guardianAge': payload.guardianAge,
        'guardianGender': payload.guardianGender,
        'guardianPhone': payload.guardianPhone,
        'guardianRelation': payload.guardianRelation,
        'grade': payload.grade,
        'intro': payload.intro,
        'body': payload.body,
        'aim': payload.aim,
        'requirements': payload.requirements,
        'email': payload.email,
        'password': payload.password
    }
    
    let StudentRegistry = new Student(studentEntry);
    
    StudentRegistry.save(async (registerErr, result) => {
        if(registerErr) {
            return res.status(500).send({message: 'Some glitch in adding the student. Please try after sometime'})
        }else{
            let token = {
                userType: "student",
                grade: payload.grade,
                name: payload.name,
                city: payload.city,
                email: payload.email,
                phone: payload.phone,
              };
              return res.status(200).send({
                id:result._id,
                message: 'Student added successfully',
                token: token
            })
        }
    });
}
