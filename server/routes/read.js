module.exports = function (db, app) {
    app.get('/products/getList', function(req,res){
        const collection = db.collection('products');
        console.log(collection);
        collection.find({}).toArray((err, data)=>{
            if(err) throw err;
            res.send(data);
            console.log(data);
        });

    });
}


