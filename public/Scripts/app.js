/*IIFE*/

const { Button } = require("bootstrap");
const { event } = require("jquery");

(function(){
    function Start (){
        console.log("App started....");
            let deleteButton = document.querySelectorAll('.btn-danger');
            for ( Button of deleteButton){
               Button.addEventListener('click', (event)=>{
                   if (!confirm ("Are you sure?")){
                       event.preventDefault();
                       window.location.assign('/customer_list');
                   }
               });
            }


    }
    window.addEventListener("load", Start);
})();