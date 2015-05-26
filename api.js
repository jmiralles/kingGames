var express = require('express'),
    Bourne  = require('bourne'),
    bodyParser = require('body-parser'),

    db = new Bourne('games.json'),
    router = express.Router();

router
    .use(function(req, res, next){
        if(!req.user) req.user = { id:1 };
        next();

    })
    .use(bodyParser.json())
    .route('/game')
    .get(function( req, res){
        db.find({ gameShort : gameShort(req.game.short, 10)}, function (err, data) {
            res.json(data);
    });
});


module.exports = router;