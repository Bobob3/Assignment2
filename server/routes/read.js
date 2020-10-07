module.exports = function (db, app) {
    app.get('/chat', function(req,res){
        const usercollection = db.collection('users');
        console.log(usercollection);
        usercollection.find({}).toArray((err, data)=>{
            if(err) throw err;
            res.send(data);
            console.log(data);
        });

    });
}


