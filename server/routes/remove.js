exports.remove = function(client, colName, collection, callback ){
    client.connect(function(err){
        const db = client.db(colName);
        var delQuery = { name: "Product3"};
        db.collection(colName).deleteOne(delQuery, function(err, result){
            if (err) throw err;
            console.log("Removed doc");
            console.log(result.result);
            client.close();
        })
    });
}