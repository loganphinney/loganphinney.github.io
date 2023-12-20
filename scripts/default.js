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
        $homeSection.show("fold", {duration: 800});
    });

    $("#resumeLink").on("click", () => {
        $('section').hide();
        $resumeSection.show("fold", {duration: 800});
    });

    $("#testLink").on("click", () => {
        $('section').hide();
        $testSection.show("fold", {duration: 800});
    });
});