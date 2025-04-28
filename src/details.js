function renderEmailDetail(email) {
    const detail = document.getElementById('emailDetail');
    detail.innerHTML = `
      <h2>${email.subject}</h2>
      <p><strong>From:</strong> ${email.sender}</p>
      <p><strong>Timestamp:</strong> ${email.timestamp}</p>
      <p>${email.body}</p>
      <button id="markUnreadBtn">Mark as Unread</button>
      <button id="deleteBtn">Delete</button>
    `;
  
    document.getElementById('markUnreadBtn').addEventListener('click', () => {
      email.read = false;
      selectedEmailId = null;
      saveEmails();
      renderInbox();
      detail.innerHTML = '<p>Select an email...</p>';
    });

    document.getElementById('deleteBtn').addEventListener('click', () => {
        emails = emails.filter(e => e.id !== email.id);
        selectedEmailId = null;
        saveEmails();
        renderInbox();
        detail.innerHTML = '<p>Select an email to view details.</p>';
      });
      
  }