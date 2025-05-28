const srchBtn =  document.querySelector(".search-btn");
const closeIcon =  document.querySelector(".close-icon");
const submitSearch = document.querySelector(".search-btn form label");
 srchBtn.onclick = () => {
     document.querySelector(".search-panel").classList.add("active");
 }

 closeIcon.onclick = () => {
    document.querySelector(".search-panel").classList.remove("active");
 }



 submitSearch.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default label behavior

        const query = input.value.trim();
        if (!query) return;

        fetch(`/search?sn=${encodeURIComponent(query)}`)
            .then(response => response.text())
            .then(html => {
                // Replace the current body with the new results
                document.body.innerHTML = html;
            })
            .catch(err => {
                console.error("Search failed:", err);
            });
    });