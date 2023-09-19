function showSection(sectionId, clickedLink) {
    // Hide all sections
    document.getElementById('section1').classList.remove('show');
    document.getElementById('section2').classList.remove('show');
    document.getElementById('section3').classList.remove('show');
    document.getElementById('section4').classList.remove('show');
    
    // Show the selected section
    document.getElementById(sectionId).classList.add('show');

    // Remove the "active" class from all links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));

    // Add the "active" class to the clicked link
    clickedLink.classList.add('active');
}