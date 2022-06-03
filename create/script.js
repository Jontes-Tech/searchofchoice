function submit() {
navigator.clipboard.writeText('https://searchofchoice.jontes.page/?q=' + encodeURIComponent(document.getElementById('textbox').value));
alert("Copied To Your Clipboard");
}
