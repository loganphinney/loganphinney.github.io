//ON DOCUMENT LOAD
$(document).ready(function () {
    //SET INITIAL SECTION VISIBILITY
    const $homeSection = $("#home");
    const $resumeSection = $("#resume");
    const $imagesSection = $("#images");
    const $colorsSection = $("#hex-color-generator");

    $('section').hide();
    $homeSection.show();

    //LINK HANDLING
    if (window.location.href.endsWith("#home")) {
        $('section').hide();
        $homeSection.show("fold");
    }

    if (window.location.href.endsWith("#resume")) {
        $('section').hide();
        $resumeSection.show("fold");
    }

    if (window.location.href.endsWith("#images")) {
        $('section').hide();
        $imagesSection.show("fold");
    }

    if (window.location.href.endsWith("#hex-color-generator")) {
        $('section').hide();
        $colorsSection.show("fold");
    }

    //NAV LINK ONCLICK FUNCTIONS
    $("#homeLink").on("click", () => {
        $('section').hide();
        $homeSection.show("fold");
    });

    $("#resumeLink").on("click", () => {
        $('section').hide();
        $resumeSection.show("fold");
    });

    $("#imagesLink").on("click", () => {
        $('section').hide();
        $imagesSection.show("fold");
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
function changeColor(element) {
    let randomColor = generateRandomHexColor().toUpperCase();
    let frameId = "#colorFrame" + element.dataset.index;  // Use data-index to get the number
    let labelId = "#colorLabel" + element.dataset.index;  // Same for the label
    $(frameId).css("background-color", randomColor);
    $(labelId).text(randomColor);
}