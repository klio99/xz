import news from "../data/news.json" assert { type: "json" };

const newsGrid = document.querySelector(".recent-news.grid");

for (let i = 0; i < news.length; i++) {
  const singleNews = document.createElement("div");
  singleNews.classList.add('news', 'grid');

  singleNews.innerHTML = `<img src="image/${news[i].image}" alt="">
  <div class="fs-montserrat fs-100 flex padding-inline"><p>${news[i].date}</p>
    <p>by ${news[i].author}</p>
  </div>
  <h2 class="fs-poppins padding-inline fs-200 blod-600">${news[i].title}</h2>
  <p class="fs-montserrat padding-inline fs-100">${news[i].excerpt} ...</p>`;

newsGrid.append(singleNews);
}