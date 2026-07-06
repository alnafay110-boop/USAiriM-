<script src="js/search.js"></script>
const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const books = document.querySelectorAll(".book-card");

const noResults = document.getElementById("noResults");

function filterBooks() {

const search = searchInput.value.toLowerCase();

const category = categoryFilter.value;

let visible = 0;

books.forEach(book=>{

const title = book.dataset.title;

const bookCategory = book.dataset.category;

const matchTitle = title.includes(search);

const matchCategory =

category==="all"

||

bookCategory===category;

if(matchTitle && matchCategory){

book.style.display="block";

visible++;

}

else{

book.style.display="none";

}

});

noResults.style.display=

visible===0

?

"block"

:

"none";

}

searchInput.addEventListener(

"input",

filterBooks

);

categoryFilter.addEventListener(

"change",

filterBooks

);
