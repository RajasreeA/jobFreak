 // JavaScript to handle navigation clicks and update the content
 document.addEventListener("DOMContentLoaded", function() {
    var navigationLinks = document.querySelectorAll(".navigation a");
    var contentArea = document.getElementById("content-area");
    navigationLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();

        var page = this.getAttribute("href").substring(1);
        var pageTitle = this.textContent;

        // Remove existing page content
        contentArea.innerHTML = "";

        // Create and append the new page's content
        var pageContent = document.createElement("div");
        pageContent.setAttribute("id", page + "-content");
        pageContent.classList.add("container");

        // Add appropriate content for each page
        if (page === "home") {
          pageContent.innerHTML = `
            <div class="page-heading">
              <h1 class="mt-4">${pageTitle}</h1>
            </div>
            <p>Welcome to the Home page.</p>
            <p>This is the Home page of our website. We provide various products and services to cater to your needs.</p>
            <p>Feel free to explore our website and discover what we have to offer.</p>
          `;
        } else if (page === "contact") {
          pageContent.innerHTML = `
            <div class="page-heading">
              <h1 class="mt-4">${pageTitle}</h1>
            </div>
            <p>Welcome to the Contact page.</p>
            <p>If you have any questions or inquiries, please don't hesitate to contact us.</p>
            <p>You can reach us via email at contact@example.com or by phone at +1-123-456-7890.</p>
          `;
        } else if (page === "information") {
          pageContent.innerHTML = `
            <div class="page-heading">
              <h1 class="mt-4">${pageTitle}</h1>
            </div>
            <p>Welcome to the Information page.</p>
            <p>Here, you will find valuable information about our company, our mission, and our values.</p>
            <p>Learn more about our history, team, and the work we do to serve our customers.</p>
          `;
        } else if (page === "guide") {
          pageContent.innerHTML = `
            <div class="page-heading">
              <h1 class="mt-4">${pageTitle}</h1>
            </div>
            <p>Welcome to the Guide page.</p>
            <p>Our guide section provides you with helpful resources and step-by-step instructions.</p>
            <p>Whether you need assistance with our products or want to learn something new, our guides are here to assist you.</p>
          `;
        }

        contentArea.appendChild(pageContent);
      });
    });
  });