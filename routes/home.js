'use strict';

var express=require('express');
var router=express.Router();

router.get('/', function(req, res){

    if(req.session.user){
        var Commodity=global.dbs.getModel('commodity');
        Commodity.find({}, function(doc, err){
            res.render('home',{Commoditys:docs});
        })
    }else{
        req.session.error = "请先登录"
        res.redirect('/login');
    }

})