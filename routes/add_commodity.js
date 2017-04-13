'use strict';

var express=require('express');
var router=express.Router();

router.post('/', function(req, res, next){
    var Commodity=global.dbs.getModel('commodity');

    Commodity.create({

        name:req.body.name,
        price:req.body.price,
        imgSrc:req.body.imgSrc

    }, function(err, doc){

        if(doc){
            res.send({status:true, msg:"添加商品成功"})
        }else{
            res.send({status:false, msg:"添加失败"})
        }

    })

})

module.exports=router;