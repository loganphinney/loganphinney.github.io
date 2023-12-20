$(document).ready(function () {
    const $homeSection = $("#home");
    $homeSection.show();

    const $resumeSection = $("#restaurant-resume");
    $resumeSection.hide();

    // Section Nav Link Event Listeners
    $("#homeLink").on("click", function () {
        $homeSection.show();
        $resumeSection.hide();
    });

    $("#resumeLink").on("click", function () {
        $homeSection.hide();
        $resumeSection.show();
    });
});