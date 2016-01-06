var coloring;
function changeColor() {
    coloring = window.setInterval(getColor, 3000);
}
function getColor() {
    var color;
    var rnd = Math.random();
    if (rnd < 0.34) {
        color = "blue";
    } else if (rnd < 0.67) {
        color = "red";
    } else if (rnd < 0.99) {
        color = "grey";
    } else {
        color = "black";
        // window.clearInterval(coloring);
    }
    document.getElementById("header").style.color = color;
}


function radioButton() {
    $(".labels").css({
        "background-color": "lightgrey",
        "color": "blue"
    });
}

function radioButtons() {
    $(".labels").css({
        "background-color": "transparent",
        "color": "black"
    });
}

$(function() {
    $(":button").click(function() {
        $("*").css({"font-family": "arial"});
        /*$("#p2").css({
         "color": "white",
         "background-color": "green"
         });
         $(".classp").css("background-color", "yellow");
         //$("p").eq(3).css({
         $("p:eq(3)").css({
         "text-decoration": "underline",
         "font-style": "italic"
         });*/
    });
});

function getName(){
    var name =
            window.prompt("Enter your name");
    document.getElementById("header").innerHTML =
            "Welcome " + name + ", discover the art around you!";
}