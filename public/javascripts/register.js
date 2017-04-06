'use strict';

$(function($){
    var register=function(){
        var data=$('form').serialize();

        $.ajax({
            url:'/userRegister',
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


    $('#registerBtn').on('click', register);

})