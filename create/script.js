function Response(text) {
    const change = document.getElementById("info");
    change.innerHTML = text;
}
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
        case 'tiny':
            tinyurl()
        default:
            tinyurl();
            break;
    }
}
function longbranded() {
    navigator.clipboard.writeText('https://searchofchoice.jontes.page/?q=' + encodeURIComponent(document.getElementById('textbox').value));
    Response("Copied Long URL to Your Clipboard");
}
function longunbranded() {
    navigator.clipboard.writeText('https://searchofchoice.vercel.app/?q=' + encodeURIComponent(document.getElementById('textbox').value));
    Response("Copied Long URL to Your Clipboard");
}
function shorturl() {
    const Http = new XMLHttpRequest();
    const url='https://api.jontes.page/short-soc?q=' + encodeURIComponent(document.getElementById('textbox').value);
    Http.open("GET", url);
    Http.send();
    
    Http.onreadystatechange = (e) => {
        navigator.clipboard.writeText(Http.responseText);
    }
    Response("Copied Short URL to Your Clipboard");
}

function tinyurl() {
    RegisterURL()
}

for (const button of document.querySelectorAll('button')) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        submit();
    });
}


function RegisterURL() {
    axios.post('https://soc.jontes.page/add', {
        term: encodeURIComponent(document.getElementById('textbox').value)
    })
    .then(function (response) {
        navigator.clipboard.writeText("https://soc.jontes.tech/q/" + response);
        Response("https://soc.jontes.tech/q/" + response)
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
}