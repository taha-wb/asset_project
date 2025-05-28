const srchBtn =  document.querySelector(".search-btn");
const closeIcon =  document.querySelector(".close-icon");
const submitSearch = document.querySelector(".search-panel form label i");
const input = document.querySelector(".search-panel form input"); 

const logoutBtn = document.querySelector("header i.fa-sign-out-alt")


logoutBtn.onclick = () => {
      e.preventDefault();

      fetch(`/logout`)
            .then(response => response.text())
            .then(html => {
                // Replace the current body with the new results
                document.body.innerHTML = html;
            })
            .catch(err => {
                console.error("Search failed:", err);
            });
}

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





const submitEmpSearch = document.querySelector(".search-panel form label.emp");
const EmpInput = document.querySelector(".search-panel form.emp_input"); 

submitEmpSearch.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default label behavior

        const query = EmpInputinput.value.trim();
        if (!query) return;

        fetch(`/search_employee?emp=${encodeURIComponent(query)}`)
            .then(response => response.text())
            .then(html => {
                // Replace the current body with the new results
                document.body.innerHTML = html;
            })
            .catch(err => {
                console.error("Search failed:", err);
            });
    });
