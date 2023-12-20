//get all sections and set initial display to home section
/*const homeSection = document.getElementById('home');
homeSection.style.display = 'block';
const resumeSection = document.getElementById('restuarant-resume');
resumeSection.style.display = 'none';

//SECTION NAV LINK EVENT LISTENERS
document.getElementById("homeLink").addEventListener("click", () => {
    homeSection.style.display = 'block';
    resumeSection.style.display = 'none';
});
document.getElementById("resumeLink").addEventListener("click", () => {
    homeSection.style.display = 'none';
    resumeSection.style.display = 'block';
});*/

$(document).ready(function () {
    const $homeSection = $('home');
    $homeSection.show();

    const $resumeSection = $('restaurant-resume');
    $resumeSection.hide();

    // Section Nav Link Event Listeners
    $("homeLink").on("click", function () {
        $homeSection.show();
        $resumeSection.hide();
    });

    $("resumeLink").on("click", function () {
        $homeSection.hide();
        $resumeSection.show();
    });
});