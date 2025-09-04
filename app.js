// List all your pages in order
const pages = [
  "index.html",
  "productListing.html",
  "mobileDetail.html",
  "cart.html",
  "menuSidebar.html"
];


let startX = 0;

document.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", function(e) {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        // Swipe left → move forward
        window.location.href = "productListing.html"; 
    } else if (endX - startX > 50) {
        // Swipe right → move back
        window.location.href = "menuSidebar.html"; 
    }
});


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
// Optional: toggle active class on sidebar
const items = document.querySelectorAll('.sidebar li');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  });
});
document.querySelectorAll('.cta').forEach(button => {
  button.addEventListener('click', () => {
    alert('Redirecting to source...');
  });
});
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('clicked');
    setTimeout(() => {
      item.classList.remove('clicked');
    }, 150); // short duration for click effect
  });
});
  document.querySelector('.send-btn').addEventListener('click', function() {
    alert("Inquiry sent successfully!");
  });
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.style.display = 
    dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Optional: close dropdown if clicked outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    dropdownContent.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const langSelect = document.getElementById("langSelect");
  const selected = langSelect.querySelector(".selected");
  const options = langSelect.querySelector(".options");
  const chevron = selected.querySelector("i");

  selected.addEventListener("click", () => {
    langSelect.classList.toggle("active");
    chevron.classList.toggle("fa-chevron-down");
    chevron.classList.toggle("fa-chevron-up");
  });

  options.querySelectorAll("li").forEach(option => {
    option.addEventListener("click", () => {
      const lang = option.textContent;
      const flag = option.getAttribute("data-flag");

      selected.querySelector("img").src = flag;
      selected.querySelector("span").textContent = lang;

      langSelect.classList.remove("active");
      chevron.classList.add("fa-chevron-down");
      chevron.classList.remove("fa-chevron-up");
    });
  });

  document.addEventListener("click", function (e) {
    if (!langSelect.contains(e.target)) {
      langSelect.classList.remove("active");
      chevron.classList.add("fa-chevron-down");
      chevron.classList.remove("fa-chevron-up");
    }
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    const langSelect = document.getElementById("langSelect");

    langSelect.querySelector(".selected").addEventListener("click", function () {
      langSelect.classList.toggle("active");
    });

    // Optional: close dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (!langSelect.contains(event.target)) {
        langSelect.classList.remove("active");
      }
    });

    // Optional: handle language selection
    const options = langSelect.querySelectorAll(".options li");
    options.forEach(option => {
      option.addEventListener("click", function () {
        const selectedFlag = this.querySelector("img").src;
        const selectedText = this.querySelector("span").innerText;

        langSelect.querySelector(".selected img").src = selectedFlag;
        langSelect.querySelector(".selected span").innerText = selectedText;

        langSelect.classList.remove("active");
      });
    });
  });

