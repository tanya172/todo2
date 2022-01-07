alert("Welcome")
window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
	form.addEventListener('submit', (e) => {
		 e.preventDefault(); /*refresh was stopped after each submission*/
const task = input.value;
	const task_el = document.createElement('div');
		task_el.classList.add('task');
const task_content_el = document.createElement('div');
		task_content_el.classList.add('content'); 
task_el.appendChild(task_content_el);
const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task; /*value of in/p is text*/
		task_input_el.setAttribute('readonly', 'readonly');
	task_content_el.appendChild(task_input_el);
	const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
			const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit'; /*for displaying of edit button*/
const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';
task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
task_el.appendChild(task_actions_el);
list_el.appendChild(task_el);
input.value = '';
task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") { //lowercase is used as when we will edit
				task_edit_el.innerText = "Save"; // the task so agn whn task wl b written it wl b writtn in lowercase
				//done for editing the task written in input
				// done so that the editing can b done//
				task_input_el.removeAttribute("readonly"); 
				task_input_el.focus();
			} else {
				 task_edit_el.innerText = "Edit"; //after saving edit button displays agn aftr saving button
				}
		});
task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});
