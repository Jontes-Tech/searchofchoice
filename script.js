const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
}
if (urlParams.has("q")) {
    var q = urlParams.get("q");
    switch (getCookie("search_engine")) {
        case undefined:
            window.location = "/engineselect/?next=" + q
            break;
        case "1": // SearX using the tiekoetter instance.
            window.location.replace("https://searx.tiekoetter.com/search?q=" + q);
            break;
        case "2": // Google
            window.location.replace("https://google.com/search?q=" + q);
            break;
        case "3": // Duck Duck Go
            window.location.replace("https://duckduckgo.com/?q=" + q);
            break;
        case "4": // Qwant
            window.location.replace("https://qwant.com/?q=" + q);
            break;
        case "5": // Custom
            window.location.replace(getCookie("custom_engine") + "/search?q=" + q);
            break;
        case "6": //Bing
            window.location.replace("https://bing.com/search?q=" + q); //Who uses bing?
            break;
        case "7": //Ask.com
            window.location.replace("https://ask.com/web?q=" + q);
        case "8": //Ecosia
            window.location.replace("https://ecosia.org/search?method=index&q=" + q);
            break;
        case "9": //Aol
            window.location.replace("https://search.aol.com/aol/search?q=" + q);
            break;
        case "10": //Yahoo
            window.location.replace("https://search.yahoo.com/search?q=" + q);
            break;



    }
} else {
    document.getElementById("changable").innerHTML = "Welcome to SearchOfChoice. You may create a SearchOfChoice-Link <a href=\"/create\">here<a>."
}