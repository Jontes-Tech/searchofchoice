// Todo: Functionality for "next" url query.
// Function called from the HTML, to select the search engine of choice.
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