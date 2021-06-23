const News = require("../model/news");

module.exports = async (req, res) => {
    try {
            await News.find({},(getMarksErr, newsList) => {
                if(getMarksErr) {
                    res.status(500).json({message: 'Some glitch in getting the news.'})
                }
                res.status(200).json(newsList)
            });
      }catch (err) {
        console.log(
          `err `,
          err
        );
      }
};