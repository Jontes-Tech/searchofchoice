function submit()   {
    console.log("Test");
    switch (document.getElementById('domain').value) {
        case 'jontespage':
            longbranded();
            break;
        case 'short':
            shorturl();
            break;
        case 'vercelapp':
            longunbranded();
            break;
        default:
            longbranded();
            break;
    }
}
function longbranded() {
    navigator.clipboard.writeText('https://searchofchoice.jontes.page/?q=' + encodeURIComponent(document.getElementById('textbox').value));
    alert("Copied Long URL to Your Clipboard");
}
function longunbranded() {
    navigator.clipboard.writeText('https://searchofchoice.vercel.app/?q=' + encodeURIComponent(document.getElementById('textbox').value));
    alert("Copied Long URL to Your Clipboard");
}
function shorturl() {
    const Http = new XMLHttpRequest();
    const url='https://api.jontes.page/short-soc?q=' + encodeURIComponent(document.getElementById('textbox').value);
    Http.open("GET", url);
    Http.send();
    
    Http.onreadystatechange = (e) => {
        navigator.clipboard.writeText(Http.responseText);
    }
    alert("Copied Short URL to Your Clipboard");
}

for (const button of document.querySelectorAll('button')) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        submit();
    });
}
