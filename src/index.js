import './styles/style.css';
import todoData from './modules/data';

const ul = document.querySelector('.ul');

todoData.forEach(data => {
  const li = document.createElement('li');
  li.innerHTML = `
    <div><input type="checkbox" id="check">
      <p>${data.description}</p>
    </div>
    <i class="fas fa-ellipsis-v"></i>
  `;
  ul.appendChild(li);
});