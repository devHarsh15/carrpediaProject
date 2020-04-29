$(document).ready(function(){
    $.getJSON("/api/images")
    .then(addImages)
    .catch(function(err){
        console.log(err);
    })

    $("#submit").click(function(event){
        createImage();
    })
});

//===========functions==========//
function addImages(images){
    images.forEach(function(imagee){
        addImg(imagee);
    });
}

function addImg(img){
    var newImage = $("<div class='col-md-4'><div class='thumbnail'><img src='"+img.image+"'></div></div>");
    $(".row").append(newImage);
}

function createImage(create){
    var userInput = $("#imgurl").val();
    if($("#imgurl").val() == '') {
        alert("Enter the image url first");
    } else {
        $.post("/api/images", {image: userInput})
        .then(function(newImg){
            addImg(newImg);
            $("#imgurl").val(null);
        })
    }
}

