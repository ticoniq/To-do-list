import './styles/style.css';
import todoData from './modules/data';

const ul = document.querySelector('.ul');

function displayTask() {
  todoData.forEach((data) => {
    const list = document.createElement('li');
    list.innerHTML = `
      <div><input type="checkbox" id="check">
        <p>${data.description}</p>
      </div>
      <i class="fas fa-ellipsis-v"></i>
    `;
    ul.appendChild(list);
  });
}

document.addEventListener('DOMContentLoaded', displayTask);