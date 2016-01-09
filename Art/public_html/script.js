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
        document.getElementById("pic1").href = pic;
    } else if (rnd < 0.67) {
        pic = "images/cat.jpg";
        document.getElementById("pic1").href = pic;
    } else {
        pic = "images/balloon.jpg";
        document.getElementById("pic1").href = pic;
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
        document.getElementById("pic2").href = pic2;
    } else if (rnd < 0.67) {
        pic2 = "images/fisheyes.jpg";
        document.getElementById("pic2").href = pic2;
    } else {
        pic2 = "images/handstand.jpg";
        document.getElementById("pic2").href = pic2;
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
        document.getElementById("pic3").href = pic3;
    } else if (rnd < 0.67) {
        pic3 = "images/photography1.jpg";
        document.getElementById("pic3").href = pic3;
    } else {
        pic3 = "images/sunset.jpg";
        document.getElementById("pic3").href = pic3;
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
        document.getElementById("pic4").href = pic4;
    } else if (rnd < 0.67) {
        pic4 = "images/tiger.jpg";
        document.getElementById("pic4").href = pic4;
    } else {
        pic4 = "images/train.jpg";
        document.getElementById("pic4").href = pic4;
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
        document.getElementById("pic5").href = pic5;
    } else if (rnd < 0.67) {
        pic5 = "images/tree.jpg";
        document.getElementById("pic5").href = pic5;
    } else {
        pic5 = "images/wine.jpg";
        document.getElementById("pic5").href = pic5;
    }
    document.getElementById("pictures5").src = pic5;
}

var picture6;
function changePicture6() {
    picture6 = window.setInterval(getPicture6, 3000);
}
function getPicture6() {
    var pic6;
    var rnd = Math.random();
    if (rnd < 0.34) {
        pic6 = "images/adele.jpg";
        document.getElementById("pic6").href = pic6;
    } else if (rnd < 0.67) {
        pic6 = "images/americangothic.jpg";
        document.getElementById("pic6").href = pic6;
    } else {
        pic6 = "images/byhitler.jpg";
        document.getElementById("pic6").href = pic6;
    }
    document.getElementById("pictures6").src = pic6;
}

var picture7;
function changePicture7() {
    picture7 = window.setInterval(getPicture7, 3000);
}
function getPicture7() {
    var pic7;
    var rnd = Math.random();
    if (rnd < 0.34) {
        pic7 = "images/feelthemusic.png";
        document.getElementById("pic7").href = pic7;
    } else if (rnd < 0.67) {
        pic7 = "images/angel.png";
        document.getElementById("pic7").href = pic7;
    } else {
        pic7 = "images/directing.png";
        document.getElementById("pic7").href = pic7;
    }
    document.getElementById("pictures7").src = pic7;
}

var picture8;
function changePicture8() {
    picture8 = window.setInterval(getPicture8, 3000);
}
function getPicture8() {
    var pic8;
    var rnd = Math.random();
    if (rnd < 0.34) {
        pic8 = "images/the last supper.jpg";
        document.getElementById("pic8").href = pic8;
    } else if (rnd < 0.67) {
        pic8 = "images/lasmenimas.jpg";
        document.getElementById("pic8").href = pic8;
    } else {
        pic8 = "images/theoldguitarist.jpg";
        document.getElementById("pic8").href = pic8;
    }
    document.getElementById("pictures8").src = pic8;
}

var picture9;
function changePicture9() {
    picture9 = window.setInterval(getPicture9, 3000);
}
function getPicture9() {
    var pic9;
    var rnd = Math.random();
    if (rnd < 0.34) {
        pic9 = "images/the complete works.jpg";
        document.getElementById("pic9").href = pic9;
    } else if (rnd < 0.67) {
        pic9 = "images/drawing.jpg";
        document.getElementById("pic9").href = pic9;
    } else {
        pic9 = "images/realistic3d.jpg";
        document.getElementById("pic9").href = pic9;
    }
    document.getElementById("pictures9").src = pic9;
}

var picture10;
function changePicture10() {
    picture10 = window.setInterval(getPicture10, 3000);
}
function getPicture10() {
    var pic10;
    var rnd = Math.random();
    if (rnd < 0.34) {
        pic10 = "images/milkmaid.jpg";
        document.getElementById("pic10").href = pic10;
    } else if (rnd < 0.67) {
        pic10 = "images/nightthawks.jpg";
        document.getElementById("pic10").href = pic10;
    } else {
        pic10 = "images/thesonofman.jpg";
        document.getElementById("pic10").href = pic10;
    }
    document.getElementById("pictures10").src = pic10;
}

var picture11;
function changePicture11() {
    picture11 = window.setInterval(getPicture11, 3000);
}
function getPicture11() {
    var pic11;
    var rnd = Math.random();
    if (rnd < 0.34) {
        pic11 = "images/arty.jpg";
        document.getElementById("pic11").href = pic11;
    } else if (rnd < 0.67) {
        pic11 = "images/artsy1.jpg";
        document.getElementById("pic11").href = pic11;
    } else {
        pic11 = "images/artsy2.jpg";
        document.getElementById("pic11").href = pic11;
    }
    document.getElementById("pictures11").src = pic11;
}

var picture12;
function changePicture12() {
    picture12 = window.setInterval(getPicture12, 3000);
}
function getPicture12() {
    var pic12;
    var rnd = Math.random();
    if (rnd < 0.34) {
        pic12 = "images/flamboyant.jpg";
        document.getElementById("pic12").href = pic12;
    } else if (rnd < 0.67) {
        pic12 = "images/flamboyant1.jpg";
        document.getElementById("pic12").href = pic12;
    } else {
        pic12 = "images/flamboyant2.jpg";
        document.getElementById("pic12").href = pic12;
    }
    document.getElementById("pictures12").src = pic12;
}

var picture13;
function changePicture13() {
    picture13 = window.setInterval(getPicture13, 3000);
}
function getPicture13() {
    var pic13;
    var rnd = Math.random();
    if (rnd < 0.34) {
        pic13 = "images/sexy.jpg";
        document.getElementById("pic13").href = pic13;
    } else if (rnd < 0.67) {
        pic13 = "images/sexy1.jpg";
        document.getElementById("pic13").href = pic13;
    } else {
        pic13 = "images/sexy2.jpg";
        document.getElementById("pic13").href = pic13;
    }
    document.getElementById("pictures13").src = pic13;
}

var picture14;
function changePicture14() {
    picture14 = window.setInterval(getPicture14, 3000);
}
function getPicture14() {
    var pic14;
    var rnd = Math.random();
    if (rnd < 0.34) {
        pic14 = "images/sophisticated.jpg";
        document.getElementById("pic14").href = pic14;
    } else if (rnd < 0.67) {
        pic14 = "images/sophisticated1.jpg";
        document.getElementById("pic14").href = pic14;
    } else {
        pic14 = "images/sophisticated2.jpg";
        document.getElementById("pic14").href = pic14;
    }
    document.getElementById("pictures14").src = pic14;
}

var picture15;
function changePicture15() {
    picture15 = window.setInterval(getPicture15, 3000);
}
function getPicture15() {
    var pic15;
    var rnd = Math.random();
    if (rnd < 0.34) {
        pic15 = "images/goth.jpg";
        document.getElementById("pic15").href = pic15;
    } else if (rnd < 0.67) {
        pic15 = "images/goth1.jpg";
        document.getElementById("pic15").href = pic15;
    } else {
        pic15 = "images/goth2.jpg";
        document.getElementById("pic15").href = pic15;
    }
    document.getElementById("pictures15").src = pic15;
}

$(function() {
    $(":button").click(function() {
        $("#content").css({"border": "blue solid 5px",
            "background": "linear-gradient(lightblue, transparent 100%)",
            "font-style": "italic"});
        $(":button").css({"background-color": "lightblue",
            "text-decoration": "underline",
            "color": "blue"});
        $("li:gt(2)").css({"list-style-type": "square"});
        $("li:nth-child(3)").css({"list-style-type": "circle"});
    });
});

function changeDiv() {
    var p = document.getElementById("photographydef");
    var h = document.getElementById("photographyheader");
    if ((p.style.color === "black") && (h.style.color === "black")) {
        p.style.color = "blue";
        h.style.color = "blue";
    } else {
        p.style.color = "black";
        h.style.color = "black";
    }
}