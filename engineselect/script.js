// Function for counting the number of slashes in a string
// I know it's not the best way to do it, but it works
// If you feel like fixing it, Github is your friend :D
String.prototype.count=function(c) { 
    var result = 0, i = 0;
    for(i;i<this.length;i++)if(this[i]==c)result++;
    return result;
};
function setEngine(id) {
    if (id == "5") {
        customenginestring = window.prompt("Enter https/http, domainname and optionally port", "https://example-searx.com:8080");
        if (customenginestring.count("/") > 2) {
            customenginestring = customenginestring = customenginestring.substring(0, customenginestring.lastIndexOf('/'));
        }  
        if (customenginestring == "https://example-searx.com:8080") {
            alert("You must not use the default value!");
            setEngine(id);
        } else {
        if (customenginestring) {
            const customenginearray = customenginestring.split(":");
            if (customenginearray[0] != "https" && customenginearray[0] != "http") {
                alert("Invalid protocol");
                setEngine(id);
            }
        }
        if (customenginestring == null || customenginestring == "") {
            customenginestring = "";
            alert("Please enter a valid URL");
            exit();
        }
        else {
        console.log("Custom search engine chosen: " + customenginestring);
        document.cookie = `custom_engine=${customenginestring}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/`;
        alert("Thank you for choosing a custom search engine!");
        document.cookie = `search_engine=5; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/`;
    }}} else {
    document.cookie = `search_engine=${id}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/`;
    console.log("Search Engine Chosen: "+id)
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has("next")) {
        window.location.replace("../?q="+urlParams.get('next'));
    } else {
        alert("Thank you for choosing the search engine!");
}}}

const buttons = document.querySelectorAll(".button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        setEngine(i+1);
    });
}
