/*let i = 0;
const txt = 'Hi, I\'m Simon Riembault';
const speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("title-page").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (i == txt.length) {
        setTimeout(function () {
            i = 0;
            document.getElementById("title-page").innerHTML = "";
            typeWriter();
        }, 10000);
    }
}



const links = document.querySelectorAll("nav a");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}*/



//addEventListener("resize", windowSize);

/*let info = document.getElementById("info").style;
let footer = document.getElementById("footer").style;
let cv = document.getElementById("cv").style;
let dlCv = document.getElementById("download-cv").style;*/
let nav = document.getElementById("mySidenav").style;
let topLeft = document.getElementById("topLeftContainer").style;
let topRight = document.getElementById("topRightContainer").style;
let serotonin = document.getElementById("serotonin").style;
/*let aboutMeList = document.getElementById("about-me-list").style;
let home = document.getElementById("home").style;

function windowSize() {
    if (window.innerWidth < 1625)
        cv.paddingLeft = "53px";
    else if (window.innerWidth > 1625)
        cv.paddingLeft = "295px";
    if (window.innerWidth < 1424) {
        cv.width = "350px";
        cv.height = "500px";
    } else if (window.innerWidth > 1424) {
        cv.width = "600px";
        cv.height = "800px";
    }
    if (window.innerWidth < 1130) {
        cv.display = "none";
        dlCv.display = "block";
    } else if (window.innerWidth > 1130) {
        cv.display = "block";
        dlCv.display = "none";
    }
    if (window.innerWidth < 750)
        info.margin = "0";
    else
        info.margin = "5px 200px 5px 200px";
    if (window.innerHeight < 450)
        footer.display = "none";
    else
        footer.display = "block";
    if (window.innerWidth < 950) {
        nav.display = "none";
        aboutMeList.padding = "0";
        home.padding = "12px 12px 6px 12px";
        home.margin = "0";
    } else if (window.innerWidth > 950) {
        nav.display = "block";
        nav.left = "-120px";
        slideIn();
        aboutMeList.paddingLeft = "50px";
        home.padding = "24px 24px 12px 24px";
        home.margin = "0 0 0 120px";
    }
}*/

function slideIn() {
    setTimeout(function topLeftSlide(){
        topLeft.left = "0";
    }, 200);
    setTimeout(function navSlide(){
        nav.left = '0';
    },  700);
    setTimeout(function molSlide(){
        serotonin.marginLeft = '337px';
    },  800);
    setTimeout(function topRightSlide(){
        topRight.right = '0';
    },  900);
}

function zoomHome() {
    serotonin.transform = "scale(1)";
    serotonin.marginLeft = "337px";
    serotonin.top = "20%";
}

function zoomAbout() {
    serotonin.transformOrigin = "43px 33px";
    serotonin.transform = "scale(55)";
}

function zoomContact() {
    serotonin.transformOrigin = "800px 311px";
    serotonin.transform = "scale(55)";
}
//windowSize();
slideIn();
//typeWriter();
