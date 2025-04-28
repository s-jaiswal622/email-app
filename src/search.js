// Initialize search functionality
function initSearch() {
    const input = document.getElementById('searchInput');
    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const filtered = emails.filter(email =>
        email.subject.toLowerCase().includes(q)
      );
      renderInbox(filtered);
    });
  }
  