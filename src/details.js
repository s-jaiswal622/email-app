// Render detailed email view
function renderEmailDetail(email) {
    console.log("email", email);
    const detail = document.getElementById('emailDetail');
    detail.innerHTML = `
      <h2>${email.subject}</h2>
      <p><strong>From:</strong> ${email.sender}</p>
      <p><strong>Time:</strong> ${email.timestamp}</p>
      <p>${email.body}</p>
      <button id="markUnreadBtn">Mark as Unread</button>
    `;
  
    // Add functionality to mark the email as unread
    document.getElementById('markUnreadBtn').addEventListener('click', () => {
      email.read = false;
      renderInbox();
      detail.innerHTML = '<p>Select an email to view details.</p>';
    });
  }
  