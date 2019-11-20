console.log(1);

document.addEventListener("DOMContentLoaded", function() {
    let allNews = [];

    window.addEventListener("online", function (event) {
        provider.get("news", (news) => {
            if (news) {
                allNews = news;
            }
            sendNewsToServer(allNews);
            showAllNews(allNews);
            provider.remove("news");
            allNews = [];
        });
    });

    provider.get("news", (news) => {
        if (news) {
            allNews = news;
        }
    });
    if (isOnline()) {
        sendNewsToServer(allNews);
        showAllNews(allNews);
        provider.remove("news");
        allNews = [];
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
});
