const Location = require('../Models/Locations');

exports.getAllLocations = (req, res) => {
    Location.find().then(result => {
        res.status(200).json({
            message: 'Locations fetched',
            locations: result
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            locations: error
        });
    });
}