function buttonDisplay(val){
    document.getElementById("Display").value = document.getElementById("Display").value + val;
}
function Clear(){
    document.getElementById("Display").value=""
}

function Result(){
    var output = document.getElementById("Display").value;
    var result = eval(output);
    document.getElementById("Display").value = result  ;
}