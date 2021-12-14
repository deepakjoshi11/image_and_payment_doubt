const Order = require('../Models/Orders');

exports.saveOrderDetails = (req, res) => {
    const {
        items,
        amount,
        email,
        mobile,
        address
    } = req.body;

    const orderObj=new Order({
        items:items,
        amount:amount,
        email:email,
        mobile:mobile,
        address:address

    });

    orderObj.save().then(result => {
        res.status(200).json({
            message: 'Order Details saved Successfully!!',
            user: result
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            error: error
        });
    });
}

exports.getOrderDetailsByUsers=(req,res)=>{

    const userEmail=req.params.userEmail;
    Order.find({
        email: userEmail
    }).then(result => {
        res.status(200).json({
            message: ` Order Details fetched for user : ${userEmail}`,
            orderDetails: result
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            error: error
        });
    });
}



