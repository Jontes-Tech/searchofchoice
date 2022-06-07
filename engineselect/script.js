function setEngine(id) {
    document.cookie = `search_engine=${id}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/`;
    console.log("Search Engine Chosen: "+id)
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has("next")) {
        window.location.replace("../?q="+urlParams.get('next'));
    } else {
        alert("Thank you for choosing the search engine!");
}}

const buttons = document.querySelectorAll(".button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        setEngine(i+1);
    });
}
