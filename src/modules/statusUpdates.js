import UI from './ui';

const ul = document.querySelector('.ul');

const handleStatusUpdate = () => {
  ul.addEventListener('change', (e) => {
    if (e.target.classList.contains('check')) {
      const taskId = e.target.id;
      const todoData = UI.getItem();
      const updatedTodoData = todoData.map((todo) => {
        if (todo.index === taskId) {
          todo.completed = e.target.checked;
        }
        return todo;
      });

      // Update the task in the localStorage
      localStorage.setItem('todoData', JSON.stringify(updatedTodoData));

      // Update the completed class on the input element
      const input = e.target.nextElementSibling;
      if (e.target.checked) {
        input.classList.add('completed');
      } else {
        input.classList.remove('completed');
      }
    }
  });
};

export default handleStatusUpdate;