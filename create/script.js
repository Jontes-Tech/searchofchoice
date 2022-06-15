function Response(text) {
    const change = document.getElementById("info");
    change.innerHTML = text;
}
function submit()   {
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

for (const button of document.querySelectorAll('button')) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        submit();
    });
}