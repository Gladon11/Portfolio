$(document).ready(function(){
    $('#btn').click(function(){
        $('#box').fadeToggle(5000);
    });
    $('#box').mouseenter(function(){
        $(this).css({"background-color": "green"});
    });
    $('#box').mouseleave(function(){
        $(this).css({"background-color": "red"});
    });
    $('.name').blur(function(){
        var UserInput = $(this).val();
        if(UserInput.length < 5){
            $('.error').show();
            
        }
    });

});