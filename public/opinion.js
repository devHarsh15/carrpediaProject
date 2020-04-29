$(document).ready(function(){
    $.getJSON("/api/suggestions")
    .then(addOpinions)
    .catch(function(err){
        console.log(err);
    })

    $("#addop").click(function(addOp){
        createOp();
    })
});

//=============functions================//
function addOpinions(text){
    text.forEach(function(next){
        addOps(next);
    })
}

function addOps(ops){
    var newOpinion = $("<tr><th>Harsh</th><td id= 'ss'>" + ops.opinion + "</td></tr>");
    $(".suggestbody").append(newOpinion); 
}

function createOp(create){
    var userInput = $("#writeop").val();
    if($("#writeop").val() == '') {
        alert("Enter the content first");
    } else {
        $.post("/api/suggestions", {opinion: userInput})
        .then(function(newOpp){
            addOps(newOpp);
            $("#writeop").val(null);
        })
    }
}




