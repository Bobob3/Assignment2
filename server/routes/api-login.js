var fs = require('fs');

module.exports = function(app) {
    app.post('/api/auth',function(req,res){
    let users = [{'username':'Jimothy', 'id': 1, 'birthdate':'18/09/2000', 'age': 19,'email':'abc@com.au','pwd':'123'},
    {'username':'Timothy', 'id': 2, 'birthdate':'18/09/1986', 'age': 32,'email':'def@com.au','pwd':'456'},
    {'username':'Kimothy', 'id': 3, 'birthdate':'17/08/2012', 'age': 8,'email':'ghi@com.au','pwd':'789'}];
    if (!req.body) {
        return res,sendstatus(400);
    }
    var customer = {};
    customer.email = '';
    customer.username = '';
    customer.birthdate = '';
    customer.age = 0;
    customer.valid = false;
    for(let i = 0;i<users.length; i++){
       // console.log(req.body.password == users[i].pwd);
        if (req.body.email == users[i].email && req.body.password == users[i].pwd){
            customer.valid = true;
            customer.email = users[i].email;
            customer.username = users[i].username;
            customer.birthdate = users[i].birthdate;
            customer.age = users[i].age;
        }
    }
    res.send(customer);
});
}