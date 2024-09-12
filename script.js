const shortBtn = document.getElementById("short-btn");
const reloadBtn = document.getElementById("reload-btn");

const shortenUrlTextarea = document.getElementById("shortenUrlTextarea-btn");

shortBtn.addEventListener('click', shortenUrl);

function shortenUrl(){
    var originalUrl = document.getElementById("originalURL").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);

    fetch(apiUrl)
    .then((response) => response.text())
    .then((data) => {
        shortenUrlTextarea.value = data;
    })
    .catch((error) => {
        shortenUrlTextarea.value = 'Error: unable to shorten URL';
    });
}

reloadBtn.addEventListener('click', () => {
    location.reload();
});
