$(document).ready(function(){
    $('.mainform').validate({
        rules:{
            fname:{
                required: true,
                minlength: 5,

            },
            sname:{
                required: true,
                minlength: 4,
            },
            pnumber:{
                required: true,
                minlength: 10,
                maxlength: 12,
            },
            pass:{
                required: true,
                minlength: 8,
            },
            day:{
                required: true,
            },
            month:{
                required: true,
            },
            year:{
                required: true,
            },
            Gender:{
                required:true,
            },
        },
        messages:{
            fname:{
                required: "Enter name",
                minlength: "Enter min letters",
            },
        }
    })
       
    

});