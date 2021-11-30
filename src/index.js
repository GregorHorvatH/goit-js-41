console.log('module 6.1');

// ===== parsing ======
// const template = 'Hello {name}! You are {age} years old!';
// const user = {
//   name: 'Bobby',
//   age: 10,
// };

// ===== debugging =====
// const refs = {
//   text: document.getElementById('text'),
//   checkbox: document.getElementById('checkbox'),
// };

// refs.checkbox.addEventListener('click', (e) => {
//   const isChecked = e.target.checked;

//   if (isChecked) {
//     // debugger;
//     refs.text.classList.add('red');
//     refs.text.classList.remove('green');
//   } else {
//     // debugger;
//     refs.text.classList.add('green');
//     refs.text.classList.remove('red');
//   }
// });

// ======================================================
// Example 1 - Form
// Создай программно форму:

// {
/* <form>
  <fieldset>
    <legend>My JS generated login form</legend>

    <label>
      <span>Login</span>
      <input type="text" name="login" autocomplete="off" />
    </label>
    <br />

    <label>
      <span>Password</span>
      <input type="password" name="password" />
    </label>
    <br />

    <button type="submit">Enter</button>
  </fieldset>
</form> */
// }

// const form = document.createElement('form');
// const login = document.createElement('input');
// const password = document.createElement('input');
// const button = document.createElement('button');

// login.type = 'text';
// password.type = 'password';
// button.type = 'submit';
// button.textContent = 'Login';

// form.append(login, password, button);

// document.body.appendChild(form);

// ======================================================
// Example 2 - Form styles inline
// Добавь программно стили к форме инлайн

// button.style.backgroundColor = 'gray';
// button.style.color = 'white';

// ======================================================
// Example 3 - Form styles classes
// Добавь программно стили к форме классами

// button.classList.add('red');

// ======================================================
// Example 4 - User list - createElement()
// Сгенерируй список пользователей с массива используя document.createElement()
// const users = ['Bobby', 'Peter', 'Chris'];

// {
/* <ul>
  <li>Bobby</li>
  <li>Peter</li>
  <li>Chris</li>
</ul> */
// }

// const users = ['Bobby', 'Peter', 'Chris'];
// const ul = document.createElement('ul');
// const lis = users.map((name) => {
//   const li = document.createElement('li');
//   li.textContent = name;

//   return li;
// });

// ul.append(...lis);

// document.body.appendChild(ul);

// ======================================================
// Example 5 - User list - insertAdjacentHTML()
// Сгенерируй список пользователей с массива используя insertAdjacentHTML()
// const users = ['Bobby', 'Peter', 'Chris'];

// <ul>
//   <li>Bobby</li>
//   <li>Peter</li>
//   <li>Chris</li>
// </ul>

// const users = ['Bobby', 'Peter', 'Chris'];
// const ul = document.createElement('ul');
// const lis = users.map((name) => `<li>${name}</li>`);

// ul.insertAdjacentHTML('beforeend', lis.join(''));

// document.body.appendChild(ul);

// ======================================================
// Example 6 - Download file
// Создай ссылку для загрузки текстового файла
// <a href="data:text/plain;charset=utf-8, lorem_ipsum_dolor" download="output.txt">file</a>

const refs = {
  textArea: document.getElementById('textArea'),
  button: document.querySelector('button'),
};

const download = () => {
  const link = document.createElement('a');
  const text = refs.textArea.value;

  link.setAttribute('download', 'output.txt');
  link.setAttribute(
    'href',
    `data:text/plain;charset=utf-8, ${encodeURIComponent(text)}`,
  );
  // link.textContent = 'file';

  // document.body.appendChild(link);
  link.click();
  // document.body.remove(link);
};

refs.button.addEventListener('click', download);
