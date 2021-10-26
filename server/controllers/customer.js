let express = require ('express');
let router = express.Router();
let mongoose= require('mongoose');

let customer = require ('../models/customer');
module.exports.displayCustomerList = (req,res,next)=>{
    customer.find((err, customerlist)=>{
        if(err){
            return console.error();
        }else{
           // console.log(customerlist);
           res.render('customer/list.ejs', {title: 'Customers', customerlist:customerlist, displayName: req.user ? req.user.displayName : '' })
        }
    }).sort({Name: 1});
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('customer/add.ejs', {title: 'Add a customer', displayName: req.user ? req.user.displayName : '' }) }

    module.exports.processAddPage = (req,res,next)=>{
        let newCustomer = customer({
               "Name":req.body.Name,
               "Number": req.body.Number,
               "Email": req.body.Email
        });
         customer.create(newCustomer,(err,customer)=>{
             if (err){
                 console.log(err);
                 res.end(err);
             }
             else{
                 res.redirect('/customer_list');
             }
         })}


         module.exports.dispalyEditPage = (req,res,next)=>{
            let id = req.params.id;
            customer.findById(id, (err, customerToEdit)=>{
                if (err){
                    console.log(err);
                    res.end(err);
                }else{
                    res.render('customer/edit',{title: 'Customers', customer:customerToEdit, displayName: req.user ? req.user.displayName : '' })
                }
            });
        }

        module.exports.processEditPage= (req,res,next)=>{
            let id = req.params.id;
            let updatedcustomer = customer({
                "_id":id,
               "Name":req.body.Name,
               "Number": req.body.Number,
               "Email": req.body.Email
        });
        customer.updateOne({_id:id}, updatedcustomer, (err)=>{
            if (err){
                console.log(err);
                res.end(err);
            }else{
                res.redirect('/customer_list');
            }
           
           
           });
       
        }
        module.exports.performDelete =(req,res,next)=>{
            let id =req.params.id;
        
            customer.remove({_id:id},(err)=>{
                if (err){
                    console.log(err);
                    res.end(err);
        
                }else{
                    res.redirect('/customer_list');
                }
            })}
       