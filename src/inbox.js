function renderInbox(filtered = emails) {
    const list = document.getElementById('emailList');
    list.innerHTML = '';
    filtered.forEach(email => {
      const div = document.createElement('div');
      div.className = 'email-item';
      if (email.read) div.classList.add('read');
      if (email.id === selectedEmailId) div.classList.add('selected');
      div.textContent = email.subject;
      div.addEventListener('click', () => selectEmail(email.id));
      list.appendChild(div);
    });
  }
  
  function selectEmail(id) {
    selectedEmailId = id;
    const email = emails.find(e => e.id === id);
    email.read = true;
    saveEmails();
    renderInbox();
    renderEmailDetail(email);
  }