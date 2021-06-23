const Student = require("../model/student");

module.exports = async (req, res) => {
    try {
            await Student.find({},(getStudentsErr, studentsList) => {
                if(getStudentsErr) {
                    res.status(500).json({message: 'Some glitch in getting the Students list.'})
                }
                res.status(200).json(studentsList)
            });
      }catch (err) {
        console.log(
          `err `,
          err
        );
      }
};