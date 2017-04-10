'use strict';

var express=require('express');
var router=express.Router();

router.post('/', function(req, res, next){
    var User=global.dbs.getModel('user');
    var uname=req.body.username;
    console.log(req.body.password);
    User.findOne({name:uname}, function(err, doc){
        console.log(doc.name)
        if(!doc){
            res.send("该用户不存在");
            // res.sendStatus(500);
        }else{

            if(req.body.password===doc.password){
                res.send({status:true, msg:"登录成功"});
                return false;
            }

            if(req.body.password!==doc.password){
                res.send({status:false, msg:"密码错误"});
                return false;
            }

        }
    })
})

module.exports=router;