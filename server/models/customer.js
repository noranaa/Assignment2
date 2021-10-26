let mongoose =require('mongoose');
let customerModel = mongoose.Schema({
    Name :String,
    Number: Number,
    Email:String
},{
    collection : "customers"
}
);
module.exports = mongoose.model('customer', customerModel);