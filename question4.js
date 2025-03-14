let tasks = [
    { id: 1, name: "Learn JavaScript", description: "Study JavaScript basics" },
    { id: 2, name: "Learn Node.js", description: "Study Node.js backend" },
  ];
  
  // CRUD Functions
  
  // Create - Add a new task
  function addTask(name, description) {
    const newTask = {
      id: tasks.length + 1,
      name: name,
      description: description,
    };
    tasks.push(newTask);
    console.log("Task added:", newTask);
  }
  
  // Read - Get all tasks
  function getAllTasks() {
    return tasks;
  }
  
  // Update - Modify a task
  function updateTask(id, name, description) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      task.name = name;
      task.description = description;
      console.log("Task updated:", task);
    } else {
      console.log("Task not found.");
    }
  }
  
  // Delete - Remove a task
  function deleteTask(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      console.log("Task deleted.");
    } else {
      console.log("Task not found.");
    }
  }
  


addTask("Learn Express", "Study Express framework");
console.log(getAllTasks()); // View all tasks
updateTask(1, "Learn JavaScript Basics", "Revise JavaScript basics");
deleteTask(2); // Deletes the task with id 2