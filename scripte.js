function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value === '') {
      alert('Please enter a task');
      return;
  }

  let li = document.createElement('li');
  li.textContent = taskInput.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '\u00D7'; 
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  taskInput.value = '';
}

document.getElementById('taskList').addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
      e.target.classList.toggle('cheaked');
  } else if (e.target.tagName === 'BUTTON') {
      e.target.parentElement.remove();
  }
}, false);


    
  

