document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");
  
    function showSection(id) {
      sections.forEach(section => {
        section.style.display = section.id === id ? "block" : "none";
      });
    }
  
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        showSection(targetId);
      });
    });
  
    // Initially display the home section
    showSection("home");
  });
  