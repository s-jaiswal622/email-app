// -- Data (hardcoded) --
// const emails = [
//     { id: 1, sender: "alice@example.com", subject: "Meeting at 3PM", body: "Let's meet in the conference room at 3PM.", timestamp: "2025-04-28 10:00 AM", read: false },
//     { id: 2, sender: "bob@example.com", subject: "Lunch Invitation", body: "Would you like to grab lunch tomorrow?", timestamp: "2025-04-27 2:30 PM", read: false },
//     { id: 3, sender: "carol@example.com", subject: "Project Update", body: "The project is on track and will be done by Friday.", timestamp: "2025-04-26 5:00 PM", read: false }
//   ];
//   let selectedEmailId = null;
  
  // -- Inbox Rendering --
//   function renderInbox(filtered = emails) {
//     const list = document.getElementById('emailList');
//     list.innerHTML = '';
  
//     filtered.forEach(email => {
//       const div = document.createElement('div');
//       div.className = 'email-item';
//       if (email.read) div.classList.add('read');
//       if (email.id === selectedEmailId) div.classList.add('selected');
//       div.textContent = email.subject;
//       div.addEventListener('click', () => selectEmail(email.id));
//       list.appendChild(div);
//     });
//   }
  
  // -- Detail Rendering --
//   function renderEmailDetail(email) {
//     const detail = document.getElementById('emailDetail');
//     detail.innerHTML = `
//       <h2>${email.subject}</h2>
//       <p><strong>From:</strong> ${email.sender}</p>
//       <p><strong>Time:</strong> ${email.timestamp}</p>
//       <p>${email.body}</p>
//       <button id="markUnreadBtn">Mark as Unread</button>
//     `;
//     document.getElementById('markUnreadBtn').addEventListener('click', () => {
//       email.read = false;
//       selectedEmailId = null;
//       renderInbox();
//       detail.innerHTML = '<p>Select an email to view details.</p>';
//     });
//   }
  
  // -- Selection Handler --
//   function selectEmail(id) {
//     selectedEmailId = id;
//     const email = emails.find(e => e.id === id);
//     email.read = true;
//     renderInbox();
//     renderEmailDetail(email);
//   }
  
  // -- Search Handler --
//   function initSearch() {
//     const input = document.getElementById('searchInput');
//     input.addEventListener('input', (e) => {
//       const q = e.target.value.toLowerCase();
//       const filtered = emails.filter(email =>
//         email.subject.toLowerCase().includes(q)
//       );
//       renderInbox(filtered);
//     });
//   }
  
  // -- App Init --
//   function init() {
//     renderInbox();
//     initSearch();
//   }
  
//   document.addEventListener('DOMContentLoaded', init);