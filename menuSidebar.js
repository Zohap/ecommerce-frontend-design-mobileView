const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// List all your pages in order
const pages = [
  "index.html",
  "productListing.html",
  "mobileDetail.html",
  "cart.html",
  "menuSidebar.html"
];

// Get the current file name
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const currentIndex = pages.indexOf(currentPage);

// Add keyboard navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" && currentIndex < pages.length - 1) {
    window.location.href = pages[currentIndex + 1];
  } else if (event.key === "ArrowLeft" && currentIndex > 0) {
    window.location.href = pages[currentIndex - 1];
  }
});

let startX = 0;

document.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", function(e) {
    let endX = e.changedTouches[0].clientX;
if (endX - startX > 50) {
        // Swipe right → move back
        window.location.href = "cart.html"; 
    }
});