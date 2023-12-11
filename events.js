document.addEventListener("DOMContentLoaded", function() {
    // Fetch the CSV file
    fetch("events.csv")
      .then((response) => response.text())
      .then((data) => {
        // Parse the CSV data
        const rows = data.split("\n").slice(1); // Remove the header row
        const events = rows.map((row) => {
          const [date, description] = row.split(",");
          return { date, description };
        });
  
        // Generate the HTML for the events
        const eventsContainer = document.getElementById("events-container");
        events.forEach((event) => {
            const eventDiv = document.createElement("div");
            eventDiv.classList.add("event");
            eventDiv.innerHTML = `
              <div class="event-card">
                <h3 class="event-date">${event.date}</h3>
                <p class="event-description">${event.description}</p>
              </div>
            `;
            eventsContainer.appendChild(eventDiv);
          });
          
    });

    
    // JavaScript code to change the iframe source based on button clicks
    const nasaButton = document.getElementById('nasa-button');
    const spacexButton = document.getElementById('spacex-button');
    const companyIframe = document.getElementById('company-iframe');

    nasaButton.addEventListener('click', function() {
        companyIframe.src = 'https://www.nasa.gov/';
    });

    spacexButton.addEventListener('click', function() {
        companyIframe.src = 'https://www.spacex.com/';
    });

    // Add similar event listeners for other buttons and organizations




  });
  