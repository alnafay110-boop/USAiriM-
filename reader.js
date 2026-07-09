// Reading progress bar — fills as the visitor scrolls the article
document.addEventListener("DOMContentLoaded", function () {
  var bar = document.getElementById("readingProgress");
  var article = document.querySelector("article, .product-page, .content-block");
  if (!bar || !article) return;

  function update() {
    var rect = article.getBoundingClientRect();
    var total = rect.height - window.innerHeight;
    var scrolled = Math.min(Math.max(-rect.top, 0), total);
    var pct = total > 0 ? (scrolled / total) * 100 : 0;
    bar.style.width = pct + "%";
  }
  document.addEventListener("scroll", update, { passive: true });
  update();
});

// Copy Quote — select text inside the article to reveal a "Copy Quote" button
document.addEventListener("DOMContentLoaded", function () {
  var article = document.querySelector("article, .content-block");
  var btn = document.getElementById("copyQuoteBtn");
  if (!article || !btn) return;

  document.addEventListener("mouseup", function () {
    var sel = window.getSelection();
    var text = sel ? sel.toString().trim() : "";
    if (text.length > 10 && article.contains(sel.anchorNode)) {
      var range = sel.getRangeAt(0).getBoundingClientRect();
      btn.style.top = (window.scrollY + range.top - 42) + "px";
      btn.style.left = (window.scrollX + range.left) + "px";
      btn.style.display = "block";
      btn.dataset.quote = text;
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", function () {
    var quote = btn.dataset.quote || "";
    var text = quote + "\n\n— USAiriM Publishing (" + window.location.href + ")";
    navigator.clipboard && navigator.clipboard.writeText(text);
    btn.textContent = "Copied!";
    setTimeout(function () { btn.textContent = "Copy Quote"; btn.style.display = "none"; }, 1200);
  });
});

// Like / Bookmark — stored per-device in localStorage only.
// This is a personal reading-list feature, not a shared public like-counter,
// since a static site has no shared backend to count likes across visitors.
document.addEventListener("DOMContentLoaded", function () {
  var likeBtn = document.getElementById("likeBtn");
  var bookmarkBtn = document.getElementById("bookmarkBtn");
  var pageKey = "usairim:" + window.location.pathname;

  function setup(btn, storageKey, activeLabel, inactiveLabel) {
    if (!btn) return;
    var isActive = localStorage.getItem(storageKey + pageKey) === "1";
    btn.classList.toggle("active", isActive);
    btn.textContent = isActive ? activeLabel : inactiveLabel;
    btn.addEventListener("click", function () {
      isActive = !isActive;
      localStorage.setItem(storageKey + pageKey, isActive ? "1" : "0");
      btn.classList.toggle("active", isActive);
      btn.textContent = isActive ? activeLabel : inactiveLabel;
    });
  }
  setup(likeBtn, "like:", "❤️ Liked", "🤍 Like");
  setup(bookmarkBtn, "bookmark:", "🔖 Saved", "🔖 Save for Later");
});
