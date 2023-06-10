var draggedItem = null;

// Drag event handler
function drag(event) {
  draggedItem = event.target;
  event.dataTransfer.setData("text/plain", event.target.textContent);
  event.dataTransfer.setData("sourceContainerId", event.target.parentNode.id);
}

// Drop event handler
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text/plain");
  var sourceContainerId = event.dataTransfer.getData("sourceContainerId");
  var item = draggedItem || document.createElement("div");
  item.textContent = data;
  event.target.appendChild(item);
  draggedItem = null;
  document.getElementById('message').innerText = 'Item dropped successfully!';
  if (sourceContainerId && item !== draggedItem) {
    var sourceItem = document.getElementById(sourceContainerId).querySelector(".item[data-text='" + data + "']");
    sourceItem.parentNode.removeChild(sourceItem);
  }
}

// Allow drop by preventing default behavior
function allowDrop(event) {
  event.preventDefault();
}

// Reset containers and message
function resetContainers() {
  var container1 = document.getElementById("container1");
  var container2 = document.getElementById("container2");

  container1.innerHTML = '<div class="item" draggable="true" ondragstart="drag(event)" data-text="Item 1">Item 1</div>' +
    '<div class="item" draggable="true" ondragstart="drag(event)" data-text="Item 2">Item 2</div>' +
    '<div class="item" draggable="true" ondragstart="drag(event)" data-text="Item 3">Item 3</div>';

  container2.innerHTML = '';
  document.getElementById('message').innerText = 'Reset successfully!';
}