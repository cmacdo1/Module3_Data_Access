const db = require('../config/db.manager');
exports.getCustomer = function (req, res) {
    const salesProduct = db.getCustomer().then(results=>{
        console.log(results);
        res.status(200).json({
            status: 'successfull',
            data: results.recordsets[0]
        }); // send all the data
    });
}
exports.getCustomerID = function( req, res){
    const {id} = req.params; // get id
    res.status(200).json({
        status: 'no implemented'
    });
}
exports.createNewCustomer = function( req, res){ // must select the body to be
    raw=>JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get (attribute)
    res.status(200).json({
        status: 'no implemented'
    });
}
exports.patchCustomerById = function( req, res){ // must select the body to be
    raw=>JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get id (attribute)
    res.status(200).json({
        status: 'no implemented'
    });
}
exports.deleteCustomerByID = function( req, res){ // must select the body to be
    raw=>JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get id
    res.status(200).json({
    status: 'no implemented'
    });
}