const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has("next")) {
    window.location.replace("../"+urlParams.get('next'));
} else {
    window.location.replace("..")
}