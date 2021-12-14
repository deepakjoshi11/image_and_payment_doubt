const Mealtype = require('../Models/Mealtypes');

exports.getAllMealTypes = (req, res) => {
    Mealtype.find().then(result => {
        res.status(200).json({
            message: 'Mealtypes fetched',
            mealtypes: result
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            error: error
        });
    });
}
