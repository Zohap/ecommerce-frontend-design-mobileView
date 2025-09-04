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

    if (startX - endX > 50) {
        // Swipe left → move forward
        window.location.href = "mobileDetail.html"; 
    } else if (endX - startX > 50) {
        // Swipe right → move back
        window.location.href = "index.html"; 
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
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".product-card-mid");
  const checkboxes = document.querySelectorAll(".sidebar-mid input[type='checkbox']");
  const clearFilterLink = document.querySelector(".filter-tags a");

  // Mock data attributes for filtering (normally you would embed this in HTML)
  productCards.forEach((card, index) => {
    // Example mock data assignment
    const mockBrands = ["Samsung", "Apple", "Huawei", "Poco", "Lenovo"];
    const mockFeatures = ["Metallic", "Plastic cover", "8GB Ram", "Super power"];
    const brand = mockBrands[index % mockBrands.length];
    const feature = mockFeatures[index % mockFeatures.length];
    const price = 50 + index * 10;

    card.dataset.brand = brand;
    card.dataset.feature = feature;
    card.dataset.price = price;
  });

  // Apply filters when checkbox changes
  checkboxes.forEach((cb) => {
    cb.addEventListener("change", applyFilters);
  });

  // Clear filters
  clearFilterLink.addEventListener("click", (e) => {
    e.preventDefault();
    checkboxes.forEach((cb) => (cb.checked = false));
    applyFilters();
  });

  function applyFilters() {
    const activeBrands = getCheckedValues("Brands");
    const activeFeatures = getCheckedValues("Features");

    productCards.forEach((card) => {
      const matchesBrand =
        activeBrands.length === 0 || activeBrands.includes(card.dataset.brand);
      const matchesFeature =
        activeFeatures.length === 0 || activeFeatures.includes(card.dataset.feature);

      if (matchesBrand && matchesFeature) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function getCheckedValues(groupTitle) {
    const group = Array.from(document.querySelectorAll(".filter-group"))
      .find((el) => el.querySelector("h4")?.textContent === groupTitle);
    if (!group) return [];

    return Array.from(group.querySelectorAll("input[type='checkbox']:checked")).map(
      (cb) => cb.parentElement.textContent.trim()
    );
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".dropdown-toggle");

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      const content = toggle.nextElementSibling;
      const isVisible = content.style.display === "block";
      content.style.display = isVisible ? "none" : "block";
    });
  });
});
