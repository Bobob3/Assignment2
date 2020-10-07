
module.exports = function (db, app) {
    app.post('/login', function (req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        product = req.body;
        const collection = db.collection('users');
        let users = [{'username':'Jimothy', 'id': 1,'email':'abc@com.au','pwd':'123', 'role':'SA'},
    {'username':'Timothy', 'id': 2,'email':'def@com.au','pwd':'456', 'role':'GAD'},
    {'username':'Kimothy', 'id': 3,'email':'ghi@com.au','pwd':'789', 'role':'GA'}];
        var obj = [{id: 1, name:"Product1", desc:"description1", price:"25.50", units: 6}]
        collection.insertOne(users);

        collection.find({ 'id': product.id }).count((err, count) => {
            if (count == 0) {
                collection.insertOne(product, (err, dbres) => {
                    if (err) throw err;
                    let num = dbres.insertedCount;

                    res, send({ 'num': num, err: null });
                })
            } else {
                res.send({ num: 0, err: "duplicate item" });
            }
        })
    });
}