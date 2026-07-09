// Mobile navigation toggle — shared across all pages
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});

// Light content-protection deterrent for book cover images.
// NOTE: this only discourages casual right-click-saving of cover art —
// it cannot and does not protect the actual PDF/EPUB files, which are
// never hosted on this site and are only ever delivered after payment
// through Payhip's own checkout.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img, .book-cover, .hero-photo-cover").forEach(function (el) {
    el.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    el.addEventListener("dragstart", function (e) { e.preventDefault(); });
  });
});
