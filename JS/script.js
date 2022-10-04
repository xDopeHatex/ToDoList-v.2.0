"use strict";

// Add storage
let storage = [];

// Load

loadTasks();

const dropdownMenu = document.querySelector(".dropdown-menu");
const hamburger = document.querySelector(".hamburger");

const navLink = document.querySelector(".nav-link");
console.log(navLink);

navLink.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");

  hamburger.classList.toggle("active");
});

//Vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const taskInput = document.querySelector("#task");
const activeBtn = document.querySelector("#active");
const completedBtn = document.querySelector("#completed");
const deletedBtn = document.querySelector("#deleted");
const loadBtn = document.querySelector("#loadTasks");
const taskStatus = document.querySelector("#status");

console.log(form);

let statusText = "Active";

// Add task event

form.addEventListener("submit", addTaskToStore);

// Add Task

function addTaskToStore(e) {
  if (taskInput.value === "") {
    alert("It seems that you forgot to add a task, bro");
  } else {
    // Random Id

    const d = new Date();
    let ms = d.valueOf();

    // Create  object with random Id, text, active status
    storage.unshift({ id: ms, text: `${taskInput.value}`, status: "active" });

    // Create li element
    const li = document.createElement("li");

    // Add class
    li.className =
      "flex items-center rounded-xl justify-between p-3 group bg-white";

    li.setAttribute("id", `${ms}`);

    li.innerHTML = `<div class="flex space-x-2">
    <label
      ><input
        type="checkbox"
        name="checkbox"
        class="accent-cyan-400 mr-2 checkbox"
        id=""
      />${storage[0].text}</label
    >
  </div>
  <div id="3" class="flex gap-4">
              <button
                id="2.5"
                class="reduct-item flex items-center justify-center h-6 w-6 z-0"
              >
                <img
                  src="../img/pencil.svg"
                  id="1.5"
                  class="group-hover:scale-100 bg-cyan-200 rounded-md scale-0 z-0 transition-all duration-200"
                  alt=""
                />
              </button>
    <button class="delete-item flex items-center justify-center h-6 w-6 z-0">
      <img
        src="../img/delete.svg"
        class=" group-hover:scale-100 bg-cyan-200 rounded-md scale-0 z-0 transition-all duration-200"
        alt=""
      />
    </button>
  </div>`;

    taskList.appendChild(li);

    // Status change
    statusChange();
  }
  console.log(storage);
  e.preventDefault();
  taskInput.value = "";
  console.log(storage);
}

//Remove task event
taskList.addEventListener(`click`, removeTask);

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm(`Are you sure, bro?`)) {
    }

    console.log(e.target.parentNode.parentNode.parentNode.id);

    const id = e.target.parentNode.parentNode.parentNode.id;

    let currentTask = storage.find((item) => item.id == id);

    console.log(currentTask);

    currentTask.status = "deleted";

    console.log(currentTask);

    e.target.parentElement.parentElement.parentElement.remove();
    // Status change
    statusChange();
  }
  console.log(storage);
}

//If checkbox checked -> remove and change status to completed
taskList.addEventListener(`click`, completedTask);

function completedTask(e) {
  if (e.target.classList.contains("checkbox")) {
    let checkBox = e.target;
    console.log(e.target);
    if (checkBox.checked == true) {
      console.log(e.target.parentNode.parentNode.parentNode.id);

      const id = e.target.parentNode.parentNode.parentNode.id;

      let currentTask = storage.find((item) => item.id == id);

      console.log(currentTask);

      currentTask.status = "completed";

      console.log(currentTask);

      e.target.parentElement.parentElement.parentElement.remove();
      // Status change
      statusChange();
    }
  }
  console.log(storage);
}

//Delete all lines, filter deleted lines, and view them from storage

deletedBtn.addEventListener(`click`, deletedTask);

function deletedTask(e) {
  taskList.innerHTML = "";

  let deletedTasks = storage.filter(function (item) {
    return item.status === "deleted";
  });

  deletedTasks.forEach((e) => {
    console.log("here what they got");
    console.log(e);
    const li = document.createElement("li");

    // Add class
    li.className =
      "flex items-center rounded-xl justify-between p-3 group bg-white";

    li.setAttribute("id", `${e.id}`);

    const text = e.text;

    console.log("Here Text");

    console.log(text);

    //cgange status
    statusText = "Deleted";
    console.log(`------STATUS-------`);
    console.log(statusText);
    //update status
    statusChange();

    li.innerHTML = `<div class="flex space-x-2">
    <label
      >${text}</label
    >
  </div>
  <div id="3" class="flex gap-4">
              
    
  </div>`;

    taskList.appendChild(li);
  });

  console.log(deletedTasks);
  console.log(storage);
}

// if click Completed delete all the lines, filter them and view from storage

completedBtn.addEventListener(`click`, completedTasks);

function completedTasks(e) {
  taskList.innerHTML = "";
  console.log(storage);

  let completedTaskss = storage.filter(function (item) {
    return item.status === "completed";
  });
  console.log(completedTaskss);

  completedTaskss.forEach((e) => {
    console.log("here what they got");
    console.log(e);
    const li = document.createElement("li");

    // Add class
    li.className =
      "flex items-center rounded-xl justify-between p-3 group bg-white";

    li.setAttribute("id", `${e.id}`);

    const text = e.text;

    console.log("Here Text");

    console.log(text);

    li.innerHTML = `<div class="flex space-x-2">
    <label
      >${text}</label
    >
  </div>
  <div id="3" class="flex gap-4">
              
  
  </div>`;

    taskList.appendChild(li);

    //cgange status
    statusText = "Completed";
    //update status
    statusChange();
  });

  console.log(completedTaskss);
  console.log(storage);
}

// if click Active delete all the lines, filter them and view from storage

activeBtn.addEventListener(`click`, activeTasks);

function activeTasks(e) {
  taskList.innerHTML = "";

  let activeTasks = storage.filter(function (item) {
    return item.status === "active";
  });

  activeTasks.forEach((e) => {
    console.log("here what they got");
    console.log(e);
    const li = document.createElement("li");

    // Add class
    li.className =
      "flex items-center rounded-xl justify-between p-3 group bg-white";

    li.setAttribute("id", `${e.id}`);

    const text = e.text;

    console.log("Here Text");

    console.log(text);

    li.innerHTML = `<div class="flex space-x-2">
    <label
      ><input
        type="checkbox"
        name="checkbox"
        class="accent-cyan-400 mr-2 checkbox"
        id=""
      />${text}</label
    >
  </div>
  <div id="3" class="flex gap-4">
              <button
                id="2.5"
                class="reduct-item flex items-center justify-center h-6 w-6 z-0"
              >
                <img
                  src="../img/pencil.svg"
                  id="1.5"
                  class="group-hover:scale-100 bg-cyan-200 rounded-md scale-0 z-0 transition-all duration-200"
                  alt=""
                />
              </button>
    <button class="delete-item flex items-center justify-center h-6 w-6 z-0">
      <img
        src="../img/delete.svg"
        class=" group-hover:scale-100 bg-cyan-200 rounded-md scale-0 z-0 transition-all duration-200"
        alt=""
      />
    </button>
  </div>`;

    taskList.appendChild(li);

    //cgange status
    statusText = "Active";
    //update status
    statusChange();
  });

  console.log(activeTasks);
  console.log(storage);
}

//Reduct task event
taskList.addEventListener(`click`, reductTask);

function reductTask(e) {
  if (e.target.parentElement.classList.contains("reduct-item")) {
    console.log(e.target.parentNode.parentNode.parentNode.id);

    const id = e.target.parentNode.parentNode.parentNode.id;

    let currentTask = storage.find((item) => item.id == id);

    console.log(currentTask);

    let li = document.getElementById(`${id}`);

    li.innerHTML = "";

    li.innerHTML = `<div class="flex space-x-2">
    <label class="flex space-x-2 items-center"
      ><input
        type="checkbox"
        name="checkbox"
        class="accent-cyan-400 mr-2 checkbox"
        id=""
      /><form class="flex space-x-2" type="submit" id="reductForm"><input class="bg-slate-200" type="text" name="text" id="reductText" value="${currentTask.text}"/><button
      id="2.7"
      class="done-item flex items-center justify-center h-6 w-6 z-0 type="submit"
    >
      <img
        src="../img/done.svg"
        id="1.7"
        class="group-hover:scale-100 bg-cyan-200 rounded-md scale-0 z-0 transition-all duration-200"
        alt=""
      />
    </button></form></label
    >
  </div>
  <div id="3" class="flex gap-4">
  
              <button
                id="2.5"
                class="reduct-item flex items-center justify-center h-6 w-6 z-0"
              >
                <img
                  src="../img/pencil.svg"
                  id="1.5"
                  class="group-hover:scale-100 bg-cyan-200 rounded-md scale-0 z-0 transition-all duration-200"
                  alt=""
                />
              </button>
    <button class="delete-item flex items-center justify-center h-6 w-6 z-0">
      <img
        src="../img/delete.svg"
        class=" group-hover:scale-100 bg-cyan-200 rounded-md scale-0 z-0 transition-all duration-200"
        alt=""
      />
    </button>
  </div>`;
    e.preventDefault();
  }

  console.log(storage);
}

//Done reduct text

taskList.addEventListener(`click`, doneTask);

function doneTask(e) {
  if (e.target.parentElement.classList.contains("done-item")) {
    console.log("Did we find id");
    console.log(
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id
    );

    const id =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;

    let currentTask = storage.find((item) => item.id == id);
    console.log("Need to know did we find task");
    console.log(currentTask);

    // changed text send to object
    const taskInputCurrent = document.querySelector("#reductText");
    currentTask.text = `${taskInputCurrent.value}`;

    console.log("Need to know did we changed object after all");
    console.log(storage);

    let li = document.getElementById(`${id}`);

    li.innerHTML = "";

    li.innerHTML = `<div class="flex space-x-2">
    <label
      ><input
        type="checkbox"
        name="checkbox"
        class="accent-cyan-400 mr-2 checkbox"
        id=""
      />${currentTask.text}</label
    >
  </div>
  <div id="3" class="flex gap-4">
              <button
                id="2.5"
                class="reduct-item flex items-center justify-center h-6 w-6 z-0"
              >
                <img
                  src="../img/pencil.svg"
                  id="1.5"
                  class="group-hover:scale-100 bg-cyan-200 rounded-md scale-0 z-0 transition-all duration-200"
                  alt=""
                />
              </button>
    <button class="delete-item flex items-center justify-center h-6 w-6 z-0">
      <img
        src="../img/delete.svg"
        class=" group-hover:scale-100 bg-cyan-200 rounded-md scale-0 z-0 transition-all duration-200"
        alt=""
      />
    </button>
  </div>`;
  }
}
let data1;
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    data1 = json;
    console.log(json);
    return json;
  });

// let data2 = data.map(function (user) {
//   return user.title;
// });

// Load Tasks

loadBtn.addEventListener(`click`, loadTasks);

function loadTasks() {
  console.log(`----------------CONTROL------------------`);
  let exit = "";

  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
      data1 = json;
      console.log(json);
      return json;
    })
    .then(() => {
      data1.forEach((object) => {
        if (storage !== []) {
          let obj = object;
          // console.log(obj);
          // console.log(obj.id);

          storage.forEach((object) => {
            let id = object.id;
            // console.log(id);
            // console.log(object.id);
            if (id === obj.id) {
              exit = "yes";
            }
          });
        }

        // console.log(storage.id);
        if (exit === "yes") {
          return;
        } else {
          storage.push({
            id: object.id,
            text: `${object.title}`,
            status: `${object.completed ? "completed" : "active"}`,
          });
        }
      });
      activeTasks();
      statusChange();

      console.log(storage);
    });

  //update status

  console.log(storage);
  console.log(`----------------CONTROL------------------`);
}

// Status change function

const statusChange = function () {
  if (statusText === "Active") {
    //Find all active

    let activeTasks = storage.filter(function (item) {
      return item.status === "active";
    });

    //Create text in Status

    taskStatus.innerHTML = `Active Tasks ${activeTasks.length}`;
  }
  if (statusText === "Deleted") {
    //Find all deleted

    let deletedTasks = storage.filter(function (item) {
      return item.status === "deleted";
    });

    //Create text in Status

    taskStatus.innerHTML = `Deleted Tasks ${deletedTasks.length}`;
  }
  if (statusText === "Completed") {
    //Find all completed

    let completedTasks = storage.filter(function (item) {
      return item.status === "completed";
    });

    //Create text in Status

    taskStatus.innerHTML = `Completed Tasks ${completedTasks.length}`;
  }
};
