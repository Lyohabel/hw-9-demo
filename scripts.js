window.addEventListener('load', function() {
    
    let tasks = document.querySelector('.tasks');
    
    function showList() {
        tasks.classList.add('show');
    };

    let showListBut = document.querySelector('.task-but'),
        showListBut2 = document.querySelector('.task-but2'),
        showListBut3 = document.querySelector('.task-but3'),
        showListBut4 = document.querySelector('.task-but4');

    showListBut.addEventListener('click', function() {
        showList();
        this.classList.add('hidden');
        showListBut2.classList.add('show');
        // showListBut3.classList.add('show');
        // showListBut4.classList.add('show');
    });

    showListBut2.addEventListener('click', function() {
        this.classList.remove('show');
        tasks.classList.remove('show');
        // showListBut3.classList.remove('show');
        // showListBut4.classList.remove('show');
        showListBut.classList.remove('hidden');
    });

    let taskList = document.querySelector('.task-list');

    let taskInput = document.querySelector('.task-input');
    taskInput.addEventListener('keydown', function(event) {
        if(event.key == 'Enter') {
            // let itemId = this.dataset.id;
            let taskItem = document.createElement('div'),
                taskCheck = document.createElement('span'),
                taskEdit = document.createElement('span');
                taskRemove = document.createElement('span'),
                taskNote = document.createElement('p');

            taskItem.classList.add('task-item');
            taskCheck.classList.add('task-checkbox');
            taskEdit.classList.add('task-edit');
            taskRemove.classList.add('task-remove');
            taskNote.classList.add('task-note');
                
            taskNote.innerHTML = taskInput.value;
            taskCheck.innerHTML = '&#10004;';
            taskEdit.innerHTML = '&#9998;';
            taskRemove.innerHTML = '&#10006;';
            taskList.appendChild(taskItem);
            taskItem.appendChild(taskCheck);
            taskItem.appendChild(taskEdit);
            taskItem.appendChild(taskRemove);
            taskItem.appendChild(taskNote);

            taskInput.value = '';

            taskCheck.addEventListener('click', function() {
                this.classList.toggle('checkbox-checked');
                let task = this.closest('.task-item').querySelector('.task-note');
                task.classList.toggle('task-note-checked');
            });

            taskEdit.addEventListener('click', function() {
                let itemE = this.closest('.task-item'),
                    taskE = itemE.querySelector('.task-note');
                   if (!itemE.querySelector('.task-to-edit'))
                    inputE = document.createElement('input');
                
                taskE.style.display = 'none';

                inputE.setAttribute('type', 'text');
                inputE.classList.add('task-to-edit');
                itemE.appendChild(inputE);
                inputE.value = taskE.innerHTML;

                //console.log(itemE.querySelector('.task-to-edit'));
                

                inputE.addEventListener('keydown', function(event) {
                    if(event.key == 'Enter') {
                        taskE.innerHTML = inputE.value;
                        this.remove();
                        taskE.style.display = 'block';
                    }
                }); 
            });

            taskRemove.addEventListener('click', function() {
                let itemR = this.closest('.task-item'),
                    taskR = itemR.querySelector('.task-note');
                taskR.classList.add('task-note-to-remove');
                setTimeout(function() {
                    if (confirm('Remove this task?')) {
                        itemR.remove();
                    } else {
                        taskR.classList.remove('task-note-to-remove');
                        };
                    }, 200);
            });

           
            
            
        };
    });

    /*let checkBoxes = document.querySelectorAll('.task-list span');

    checkBoxes.forEach(function(element) {
        element.addEventListener('click', function() {
            console.log(this);
            taskCheck.classList.add('checkbox-checked');
            taskNote.classList.add('task-note-checked');
        });
    });

    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].addEventListener('click', function() {
            taskCheckBox.classList.add('checkbox-checked');
            taskNote.classList.add('task-note-checked');
            
        });              
    };

    showListBut3.addEventListener('click', function() {
        taskNote.innerHTML = prompt('Edit the task');
    }); 

    showListBut4.addEventListener('click', function() {
        taskList.innerHTML = '';
    }); */


});