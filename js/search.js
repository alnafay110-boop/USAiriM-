// Live search + category filter for the books catalog page
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const books = document.querySelectorAll(".book-card[data-title]");
  const noResults = document.getElementById("noResults");

  if (!searchInput || !categoryFilter || !books.length) return;

  function filterBooks() {
    const search = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;
    let visible = 0;

    books.forEach(function (book) {
      const title = (book.dataset.title || "").toLowerCase();
      const bookCategory = book.dataset.category || "";
      const matchTitle = title.includes(search);
      const matchCategory = category === "all" || bookCategory === category;

      if (matchTitle && matchCategory) {
        book.style.display = "";
        visible++;
      } else {
        book.style.display = "none";
      }
    });

    if (noResults) {
      noResults.style.display = visible === 0 ? "block" : "none";
    }
  }

  searchInput.addEventListener("input", filterBooks);
  categoryFilter.addEventListener("change", filterBooks);
});
