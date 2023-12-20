//ON DOCUMENT LOAD
$(document).ready(function () {
    //SET INITIAL SECTION VISIBILITY
    const $homeSection = $("#home");
    $homeSection.show();
    const $resumeSection = $("#resume");
    $resumeSection.hide();
    const $testSection = $("#test-section");
    $testSection.hide();

    //NAV LINK ONCLICK FUNCTIONS
    $("#homeLink").on("click", () => {
        $('section').hide();
        $homeSection.show("slide", { easing: "linear", direction: "left"});
    });

    $("#resumeLink").on("click", () => {
        $('section').hide();
        $resumeSection.show("slide", { easing: "linear", direction: "left"});
    });

    $("#testLink").on("click", () => {
        $('section').hide();
        $testSection.show("slide", { easing: "linear", direction: "left"});
    });
});