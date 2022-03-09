let nav = document.getElementById("mySidenav").style;
let topLeft = document.getElementById("topLeftContainer").style;
let topRight = document.getElementById("topRightContainer").style;
let me = document.getElementById("me").style;
let cardAbout = document.getElementById("cardAboutMe").style;
let cardContact = document.getElementById("cardContact").style;

function slideIn() {
    setTimeout(function topLeftSlide(){
        topLeft.left = "0";
    }, 200);
    setTimeout(function navSlide(){
        nav.left = '0';
    },  700);
    setTimeout(function meSlide(){
        me.marginLeft = '300px';
    },  800);
    setTimeout(function topRightSlide(){
        topRight.right = '0';
    },  900);
}

function zoomHome() {
    cardAbout.opacity = "0";
    cardAbout.transform = "scale(1)";
    cardContact.opacity = "0";
    cardContact.transform = "scale(1)";
    setTimeout(function() {
        me.transform = "scale(1)";
        me.marginLeft = "300px";
        me.top = "200px";
    }, 1);
}

function zoomAbout() {
    cardContact.opacity = "0";
    cardContact.transform = "scale(1)";
    me.transformOrigin = "389px 218px";
    me.transform = "scale(500)";
    setTimeout(function() {
        cardAbout.opacity = "1";
        cardAbout.transform = "scale(2)";
    }, 1);
}

function zoomContact() {
    cardAbout.opacity = "0";
    cardAbout.transform = "scale(1)";
    me.transformOrigin = "502px 223px";
    me.transform = "scale(500)";
    setTimeout(function() {
        cardContact.opacity = "1";
        cardContact.transform = "scale(2)";
    }, 2);
}

function cursorType() {
    new kursor({
        type: 1,
    })
}

cursorType();
slideIn();
