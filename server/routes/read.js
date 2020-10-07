module.exports = function (db, app) {
    app.get('/profile', function(req,res){
        const usercollection = db.collection('users');
        usercollection.find({}).toArray((err, data)=>{
            if(err) throw err;
            res.send(data);
            console.log(data);
        });

    });
}


