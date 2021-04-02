const contact = () => {
  const contentDiv = document.getElementById('content');

  const contactWrap = document.getElementById('page');
  contactWrap.innerHTML = '';
  contactWrap.setAttribute('class', '');
  contactWrap.classList.add('menu-item-wrap');

  const contactHeader = document.createElement('h3');
  contactHeader.classList.add('contact-header');
  contactHeader.innerHTML = 'Leave a Message';

  contactWrap.appendChild(contactHeader);

  const form = document.createElement('form');
  form.classList.add('contact-form');
  form.setAttribute('action', '?');
  form.setAttribute('method', 'POST');

  const name = document.createElement('input');
  name.classList.add('form-inputs');
  name.setAttribute('type', 'text');
  name.setAttribute('placeholder', 'Enter Name');

  form.appendChild(name);

  const email = document.createElement('input');
  email.classList.add('form-inputs');
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Enter Email');

  form.appendChild(email);

  const message = document.createElement('textarea');
  message.classList.add('text-area');
  message.setAttribute('placeholder', 'Enter message');

  form.appendChild(message);

  const btn = document.createElement('button');
  btn.classList.add('form-btn');
  btn.setAttribute('type', 'button');
  btn.innerHTML = 'Send';

  form.appendChild(btn);

  contactWrap.appendChild(form);

  contentDiv.appendChild(contactWrap);
};

export default contact;
