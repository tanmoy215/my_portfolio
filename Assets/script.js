document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const closeBtn = document.querySelector(".close-menu"); 
    const links = document.querySelectorAll(".nav-links li a");

    // Sticky Navbar Effect
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // Mobile Menu Toggle (☰ opens, ❌ closes)
    menuToggle.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent immediate closing
        navLinks.classList.add("active");
    });

    // Close Menu When Clicking the Close Button (❌)
    closeBtn.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

    // Close Menu When Clicking Outside
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });

    // Smooth Scroll Effect
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: "smooth"
                });
            }
            navLinks.classList.remove("active"); // Close menu after clicking a link
        });
    });
});








// Home Section


document.addEventListener("DOMContentLoaded", function () {
    const heroImage = document.querySelector(".hero-img");
  
    heroImage.addEventListener("mouseover", () => {
      heroImage.style.boxShadow = "0 15px 30px rgba(255, 204, 0, 0.5)";
    });
  
    heroImage.addEventListener("mouseleave", () => {
      heroImage.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
    });
  
    // Floating Animation Effect
    const floatingShapes = document.querySelectorAll(".shape");
    floatingShapes.forEach((shape) => {
      setInterval(() => {
        shape.style.transform = `translate(${Math.random() * 20 - 10}px, ${
          Math.random() * 20 - 10
        }px) rotate(${Math.random() * 20 - 10}deg)`;
      }, 2000);
    });
  });
  