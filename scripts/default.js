//ON DOCUMENT LOAD
$(document).ready(function () {
    //SET INITIAL SECTION VISIBILITY
    const $homeSection = $("#home");
    const $testSection = $("#test-section");
    const $resumeSection = $("#resume");
    const $colorsSection = $("#hex-color-generator");

    $('section').hide();
    $homeSection.show();

    //NAV LINK ONCLICK FUNCTIONS
    $("#homeLink").on("click", () => {
        $('section').hide();
        $homeSection.show("fold");
    });

    $("#testLink").on("click", () => {
        $('section').hide();
        $testSection.show("fold");
    });

    $("#resumeLink").on("click", () => {
        $('section').hide();
        $resumeSection.show("fold");
    });
    
    $("#colorsLink").on("click", () => {
        $('section').hide();
        $colorsSection.show("fold");
    });
});

function generateRandomHexColor() {
    let randomColor = Math.floor(Math.random() * 16777215);
    let hexColor = randomColor.toString(16).padStart(6, '0');
    return '#' + hexColor;
}
function changeColor1() {
    randomColor = generateRandomHexColor().toUpperCase();
    $("#colorFrame1").css("background-color", randomColor);
    $("#colorLabel1").text(randomColor);
}
function changeColor2() {
    randomColor = generateRandomHexColor().toUpperCase();
    $("#colorFrame2").css("background-color", randomColor);
    $("#colorLabel2").text(randomColor);
}
function changeColor3() {
    randomColor = generateRandomHexColor().toUpperCase();
    $("#colorFrame3").css("background-color", randomColor);
    $("#colorLabel3").text(randomColor);
}
function changeColor4() {
    randomColor = generateRandomHexColor().toUpperCase();
    $("#colorFrame4").css("background-color", randomColor);
    $("#colorLabel4").text(randomColor);
}
function changeColor5() {
    randomColor = generateRandomHexColor().toUpperCase();
    $("#colorFrame5").css("background-color", randomColor);
    $("#colorLabel5").text(randomColor);
}
function changeColor6() {
    randomColor = generateRandomHexColor().toUpperCase();
    $("#colorFrame6").css("background-color", randomColor);
    $("#colorLabel6").text(randomColor);
}