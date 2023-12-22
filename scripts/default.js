//ON DOCUMENT LOAD
$(document).ready(function () {
    //SET INITIAL SECTION VISIBILITY
    const $homeSection = $("#home");
    const $testSection = $("#test-section");
    const $resumeSection = $("#resume");

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
});