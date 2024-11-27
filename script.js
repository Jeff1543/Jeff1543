document.getElementById("Lanjutkan").addEventListener("click", function() {
  const nextSection = document.getElementById("Features");
    nextSection.scrollIntoView({ behavior: "smooth" });
  });

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.mainNav-Nav a');
    
    // Ketika salah satu link diklik, scroll ke targetnya
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); 
       
        // Ambil target dari href link 
        const targetID = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetID);
       
        // Scroll ke section dengan ID tersebut
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  });
