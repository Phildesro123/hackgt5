const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const dbcontroller = require('./dbcontroller');


<<<<<<< HEAD
dbcontroller.enqueueOrder(1, 'Smith', '34B', function (results) {
    const list = results;
    console.log(list);
});
=======
// dbcontroller.enqueueOrder(1, 'Smith', '34B', function (results) {
//     const list = results;
//     console.log(list);
// })
>>>>>>> 9a6b4b0fef6f93e5b0df9cbfe1325ac9c7ec6ca9

/* GET home page. */

    router.get('/', function(req, res, next) {
        // dbcontroller.addItem('Pepsi', 0.50, 'Beverage', function(results){
        //     const list = results;
        //     console.log(list);
        // });

        dbcontroller.getOrders(function(results){
            const list = results;
            console.log(list);
        });

        res.render('index.hbs', { title: 'Express' });
    });
    const urlParse = bodyParser.urlencoded({extended:false})
router.post('/',urlParse,(req,res)=>{
    console.log("Seat",req.body.seat);
    res.render('login')
});
/* GET login page. */
router.get('/login', (req,res)=>
{
  res.render('login',{});
});

module.exports = router;
