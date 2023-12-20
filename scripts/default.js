//ON DOCUMENT LOAD
$(document).ready(function () {
    //SET INITIAL SECTION VISIBILITY
    const $homeSection = $("#home");
    const $resumeSection = $("#resume");
    const $testSection = $("#test-section");

    $('section').hide();
    $homeSection.show();

    //NAV LINK ONCLICK FUNCTIONS
    $("#homeLink").on("click", () => {
        $('section').hide();
        $homeSection.show("fold", {speed: "fast"});
    });

    $("#resumeLink").on("click", () => {
        $('section').hide();
        $resumeSection.show("fold", {speed: "fast"});
    });

    $("#testLink").on("click", () => {
        $('section').hide();
        $testSection.show("fold", {speed: "fast"});
    });
});