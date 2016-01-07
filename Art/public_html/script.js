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

function getName() {
    var name =
            window.prompt("Enter your name");
    document.getElementById("header").innerHTML =
            "Welcome " + name + ", discover the art around you!";
}


$(function() {
    $(":submit").css("background-color", "lightblue");
});

function onFocus(x) {
    x.style.borderColor = 'grey';
}

function onBlur(y) {
    y.style.borderColor = '';
}

function changeBGcolor(me) {
    if (me.value === "") {
        me.style.backgroundColor = "";
    } else {
        me.style.backgroundColor = "lightblue";
    }
}

function alertName() {
    var frm =
            document.getElementById("message");
    alert("Thank you " + frm.elements[0].value + " " + frm.elements[1].value + " for sending us your feedback");
}

function reset() {
    document.getElementById("message").reset();
}

var picture;
function changePicture() {
    picture = window.setInterval(getPicture, 3000);
}
function getPicture() {
    var pic;
    var rnd = Math.random();
    if (rnd < 0.34) {
        pic = "images/car.jpg";
    } else if (rnd < 0.67) {
        pic = "images/cat.jpg";
    } else {
        pic = "images/balloon.jpg";
    }
    document.getElementById("pictures1").src = pic;
}

var picture2;
function changePicture2() {
    picture2 = window.setInterval(getPicture2, 3000);
}
function getPicture2() {
    var pic2;
    var rnd = Math.random();
    if (rnd < 0.34) {
        pic2 = "images/eiffel tower.jpg";
    } else if (rnd < 0.67) {
        pic2 = "images/fisheyes.jpg";
    } else {
        pic2 = "images/handstand.jpg";
    }
    document.getElementById("pictures2").src = pic2;
}

var picture3;
function changePicture3() {
    picture3 = window.setInterval(getPicture3, 3000);
}
function getPicture3() {
    var pic3;
    var rnd = Math.random();
    if (rnd < 0.34) {
        pic3 = "images/lastdrop.jpg";
    } else if (rnd < 0.67) {
        pic3 = "images/photography1.jpg";
    } else {
        pic3 = "images/sunset.jpg";
    }
    document.getElementById("pictures3").src = pic3;
}

var picture4;
function changePicture4() {
    picture4 = window.setInterval(getPicture4, 3000);
}
function getPicture4() {
    var pic4;
    var rnd = Math.random();
    if (rnd < 0.34) {
        pic4 = "images/upsidedown.jpg";
    } else if (rnd < 0.67) {
        pic4 = "images/tiger.jpg";
    } else {
        pic4 = "images/train.jpg";
    }
    document.getElementById("pictures4").src = pic4;
}

var picture5;
function changePicture5() {
    picture5 = window.setInterval(getPicture5, 3000);
}
function getPicture5() {
    var pic5;
    var rnd = Math.random();
    if (rnd < 0.34) {
        pic5 = "images/wave.jpg";
    } else if (rnd < 0.67) {
        pic5 = "images/tree.jpg";
    } else {
        pic5 = "images/wine.jpg";
    }
    document.getElementById("pictures5").src = pic5;
}

(function onChange() {
    $('a').attr('href', 'images/car.jpg');
    $('a').attr('href', 'images/cat.jpg');
    $('a').attr('href', 'images/balloon.jpg');
});