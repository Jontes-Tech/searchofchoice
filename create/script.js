// We need to implement the short url creation.

function submit() {
    navigator.clipboard.writeText("https://searchofchoice.jontes.page/?q=" + encodeURIComponent(document.getElementById('textbox').value));
}

for (const button of document.querySelectorAll('button')) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        submit();
    });
}