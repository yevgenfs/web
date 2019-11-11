console.log(1);
window.addEventListener("online", function (event) {
    const allNews = readNewsFromLocalStorage();
    sendNewsToServer(allNews);
    showAllNews(allNews);
    localStorage.removeItem("news");
});

const allNews = readNewsFromLocalStorage();
if (isOnline()) {
    sendNewsToServer(allNews);
    showAllNews(allNews);
    localStorage.removeItem("news");
}


function addNews(imgSrc, title, body) {
    
    const card = document.createElement("figure");
    card.className = "sign";
    card.innerHTML = "<img src=\""+imgSrc+"\" alt=\"News Image\" class=\"photos\">"+title+
         "<figcaption align=\"left\">"
        + body + "</figcaption>";
    // newsBlock.appendChild(card);

    document.getElementById("news").appendChild(card);
}

function showAllNews(allNews) {
    allNews.forEach(function (news) {
        addNews(news.imgSrc, news.title, news.body)
    });
}

function sendNewsToServer(allNews) {
    if (allNews.length) {
        alert("Successfully sent to server!")
    }
}

function readNewsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("news")) != null
        ? JSON.parse(localStorage.getItem("news")) : [];
}

function isOnline() {
    return window.navigator.onLine;
}