'use strict';

$(function($){
    var register=function(){
        var data=$('form').serialize();

        $.ajax({
            url:'/userLogin',
            cache:false,
            data:data,
            type:'POST',
            success:function(data, status){
                console.log(data);
                if(data.status){
                    window.location.href="home";
                }else{
                    alert(data.msg)
                }
                // if(status === 'success') window.location.href='register';
            },
            error:function(err){
                console.log(err)
                // window.location.href='register';
            }

        })
    };


    $('#loginBtn').on('click', register);

})