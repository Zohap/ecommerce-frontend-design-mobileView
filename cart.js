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
document.addEventListener("DOMContentLoaded", () => {
  // Back button
  document.querySelector(".back-btn").addEventListener("click", () => {
    alert("Back to shop...");
    window.history.back();
  });

  // Checkout button
  document.querySelector(".checkout-btn").addEventListener("click", () => {
    alert("Proceeding to checkout...");
  });

  // Move to cart buttons
  document.querySelectorAll(".move-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.textContent = "✔ Added";
      btn.style.background = "#00c853";
      btn.style.color = "white";
      btn.disabled = true;
    });
  });
});


let startX = 0;

document.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", function(e) {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        // Swipe left → move forward
        window.location.href = "menuSidebar.html"; 
    } else if (endX - startX > 50) {
        // Swipe right → move back
        window.location.href = "mobileDetail.html"; 
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



