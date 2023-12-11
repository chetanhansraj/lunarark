fetch("latest_news.csv")
  .then((response) => response.text())
  .then((data) => {
    // Parse the CSV data
    const rows = data.split("\n").slice(1); // Remove the header row
    const latestNewsItems = rows.map((row) => {
      const [title, snippet, image_url] = row.split(",");
      return { title, snippet, image_url };
    });

    // Get the scrolling container element
    const scrollingContainer = document.querySelector('.scrolling-container');

  //  
    // Loop through the latest news items
    latestNewsItems.forEach((newsItem) => {
      // Create a div for the news item
      const newsContent = document.createElement('div');
      newsContent.classList.add('news-content');

      // Set the inner HTML for the news item
      newsContent.innerHTML = `
        <img src="${newsItem.image_url}" alt="${newsItem.title}">
        <h3 class="news-title">${newsItem.title}</h3>
        <p class="news-snippet">${newsItem.snippet}</p>
      `;

      // Append the news item to the scrolling container
      scrollingContainer.appendChild(newsContent);
    });


  });
  document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.expandable-section');
    sections.forEach(function(section) {
        section.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});

// --------------------------------------------------------
fetch("latest_news.csv")
  .then((response) => response.text())
  .then((data1) => {
    const rows = data1.replace(/\r\n/g, '\n').split('\n').slice(1);

    // const rows = data1.split("\n").slice(1);
    const latestNewsItems1 = rows.map((row) => {
      const [title, snippet, image_url] = row.split(",");
      return { title, snippet, image_url };
    });

    const swiperWrapper = document.querySelector('.swiper-wrapper');

    latestNewsItems1.forEach((newsItem1) => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');

      slide.innerHTML = `
        <img class="news-img" src="${newsItem1.image_url}" alt="${newsItem1.title}">
        <h3 class="news-title">${newsItem1.title}</h3>
       
      `;

      swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper after adding the slides
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 4, // This allows multiple slides to be visible at once
      spaceBetween: 10, // This adds some space between the slides
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
