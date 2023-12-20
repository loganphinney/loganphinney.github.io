$(document).ready(function () {
    //SET INITIAL SECTION VISIBILITY
    const $homeSection = $("#home");
    $homeSection.show();
    const $resumeSection = $("#resume");
    $resumeSection.hide();

    //NAV LINK ONCLICK FUNCTIONS
    $("#homeLink").on("click", () => {
        $homeSection.show();
        $resumeSection.hide();
    });

    $("#resumeLink").on("click", () => {
        $homeSection.hide();
        $resumeSection.show();
    });
});