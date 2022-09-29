"use strict";

const dropdownMenu = document.querySelector(".dropdown-menu");

const navLink = document.querySelector(".nav-link");
console.log(navLink);

navLink.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
});

//Vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const taskInput = document.querySelector("#task");
const activeBtn = document.querySelector("#active");
const completedBtn = document.querySelector("#completed");
const deletedBtn = document.querySelector("#deleted");

// Add storage
let storage = [];

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
  }
  console.log(storage);
  e.preventDefault();
  taskInput.value = "";
}

console.log(storage);

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
  });

  console.log(deletedTasks);
  console.log(storage);
}

// if click Completed delete all the lines, filter them and view from storage

completedBtn.addEventListener(`click`, completedTasks);

function completedTasks(e) {
  taskList.innerHTML = "";

  let completedTaskss = storage.filter(function (item) {
    return item.status === "completed";
  });

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
  e.preventDefault();
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
