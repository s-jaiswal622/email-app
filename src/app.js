
// Initialize the app
function init() {
    loadEmails();
    renderInbox();   // Render the email list
    initSearch();    // Set up the search bar functionality
  }
  
document.addEventListener('DOMContentLoaded', init);
  