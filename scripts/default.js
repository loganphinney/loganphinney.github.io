 //get all sections and set initial display
 const homeSection = document.getElementById('home');
 homeSection.style.display = 'block';
 const resumeSection = document.getElementById('restuarant-resume');
 resumeSection.style.display = 'none';

 //SECTION NAV EVENT LISTENERS
 document.getElementById("homeLink").addEventListener("click", () => {
         homeSection.style.display = 'block';
         resumeSection.style.display = 'none';
 });
 document.getElementById("resumeLink").addEventListener("click", () => {
     homeSection.style.display = 'none';
     resumeSection.style.display = 'block';
 });
 