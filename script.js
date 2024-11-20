
const inputField = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');


addTaskButton.addEventListener('click', () => {
  const taskText = inputField.value.trim();


  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });


    listItem.appendChild(deleteButton);


    taskList.appendChild(listItem);


    inputField.value = '';
  }
});
