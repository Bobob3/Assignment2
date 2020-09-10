var fs = require('fs');

module.exports = function(app) {
    app.post('/api/auth',function(req,res){
    let users = [{'username':'Jimothy', 'id': 1,'email':'abc@com.au','pwd':'123', 'role':'SA'},
    {'username':'Timothy', 'id': 2,'email':'def@com.au','pwd':'456', 'role':'GAD'},
    {'username':'Kimothy', 'id': 3,'email':'ghi@com.au','pwd':'789', 'role':'GA'}];
    if (!req.body) {
        return res,sendstatus(400);
    }
    var customer = {};
    customer.email = '';
    customer.username = '';
    customer.role = '';
    customer.id = 0;
    customer.valid = false;
    for(let i = 0;i<users.length; i++){
        if (req.body.email == users[i].email && req.body.password == users[i].pwd){
            customer.valid = true;
            customer.email = users[i].email;
            customer.username = users[i].username;
            customer.role = users[i].role;
            customer.id = users[i].id;
        }
    }
    res.send(customer);
});
}