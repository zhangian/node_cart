'use strict';

$(function($){
    var addCommodity=function(){
        var data=$('form').serialize()+"imgSrc="+"xmsz_"+Math.floor(Math.random()*10+1)+".jpg";

        $.ajax({
            url:'/addCommodity',
            cache:false,
            data:data,
            type:'POST',
            success:function(data, status){
                console.log(data);
                // if(status === 'success') window.location.href='register';
            },
            error:function(err){
                console.log(err)
                // window.location.href='register';
            }

        })
    };


    $('#addCommodityBtn').on('click', addCommodity);

})