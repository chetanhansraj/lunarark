// Fetch the CSV file
document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code here...
});

fetch("articles.csv")
  .then((response) => response.text())
  .then((data) => {
    // Parse the CSV data
    const rows = data.split("\n").slice(1); // Remove the header row
    const articles = rows.map((row) => {
      const [title, snippet, image_url] = row.split(",");
      return { title, snippet, image_url };
    });

    // Generate the HTML for the news articles
    const newsContainer = document.getElementById("articles");
    articles.forEach((article) => {
      const articleDiv = document.createElement("div");
      articleDiv.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.snippet}</p>
        <img src="${article.image_url}" alt="${article.title}">
      `;
      newsContainer.appendChild(articleDiv);
    });
  });





    {/* // document.getElementById("toggle-news").addEventListener("click", function () {
    //   const newsContainer = document.getElementById("news-container");
    //   const currentHeight = newsContainer.style.height;

    //   if (currentHeight === "400px" || currentHeight === "") {
    //       newsContainer.style.height = "600px";
    //       this.textContent = "⬆️"; // Change the arrow to an up arrow
    //   } else {
    //       newsContainer.style.height = "400px";
    //       this.textContent = "⬇️"; // Change the arrow to a down arrow
    //   }
    // }); */}

