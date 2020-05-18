let taskList = []

class Task {
    constructor(name, currentDate, isDone, dueDate) {
        this.taskId = Date.now();
        this.name = name;
        this.currentDate = currentDate;
        this.isDone = isDone;
        this.dueDate = dueDate;
    }

    toString() {
      
        let htmlText = '<li class="task" ><div class ="eachTask">'
        htmlText += this.name
        htmlText += ", " + this.currentDate.getDate() +
            "-" + (this.currentDate.getMonth()+1)+
            "-" + (this.currentDate.getFullYear());
        htmlText += ", " + "Due date: " + this.dueDate
        htmlText += '<input type="checkbox" onclick="check(';
        htmlText +=  this.taskId;
        htmlText +=  ')" name="isDone" id="isDone">';
        htmlText += '<button onclick="deleteTask(';
        htmlText += this.taskId;
        htmlText += ')">Delete</button>';
        htmlText += '</div></li>';
        return htmlText;
    }
}

function check(x) {
    
        taskList.forEach((task) => {
            if(task.taskId===x){
                let update =task.name;
                update ="<Strike>"+update;
                update=update+"</Strike>";
                task.name =update;
                render()
            }
            
        })
}
   

function render() {
    const listUI = document.getElementById("todolist")
    listUI.innerHTML = "";
    if (taskList.length === 0) listUI.innerHTML = "No tasks todo :-)"
    taskList.forEach((task) => {
        listUI.innerHTML += task.toString();
    })
}

function deleteTask(taskId) {
    taskList = taskList.filter(
        (t) => {
            if (t.taskId != taskId)
                return t;
        }
    );
    // call a web api to update the database on the server

    // update the DOM
    render()
    console.log(taskList);
}

function createTask() {
    const taskName = document.getElementById("taskName").value;
    const dueDate = document.getElementById("dueDate").value;


    addTask(new Task(taskName, new Date(), false, dueDate));
}

function addTask(t) {
    taskList.push(t)
    render();
    console.log(taskList)
}

function init() {
    console.log("init called");
    task = new Task("welcome task", new Date("May 30, 2020"), false, currDate);
    addTask(task);
    console.log(task);
}

init();