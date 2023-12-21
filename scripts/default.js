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
        $homeSection.show("fold");
    });

    $("#resumeLink").on("click", () => {
        $('section').hide();
        $resumeSection.show("fold");
    });

    $("#testLink").on("click", () => {
        $('section').hide();
        $testSection.show("fold");
    });
});