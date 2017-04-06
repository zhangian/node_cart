'use strict';

var express=require('express');
var router=express.Router();

router.post('/', function(req, res, next){
    var User=global.dbs.getModel('user');
    var uname=req.body.username;
    console.log(req.body.username);
    User.findOne({name:uname}, function(err, doc){
        console.log(doc)
        if(doc){
            req.session.error='user12344';
            res.send("用户名已经存在 " + req.session.cookie.maxAge);
            res.sendStatus(500);
        }
    })
})

module.exports=router;