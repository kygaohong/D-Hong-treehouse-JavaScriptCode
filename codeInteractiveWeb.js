challenge question: 

var lastName = document.getElementsByTagName('span')[1]
var sayButton = document.getElementById("say");
var greeting = function() {
  alert("Hello World!");
}
sayButton.onclick = greeting;

//Select the naviagation
var navigation = document.getElementById("navigation");

//Select all listItems from the navigation
var listItems = navigation.children;

//When a navigation link is pressed
var linkListener = function() {
  console.log("Listener is clicked!");
}

var bindEventsToLinks = function(listItem) {
  //Select the anchor
  var anchor = listItem.querySelector("a");
  //Bind the linkListener to the anchor element (a) 
  anchor.onclick = linkListener;
}

var newDiv = document.createElement("Div");
var newSpan = document.createElement("span");

for(var i = 0; i < listItems.length ; i++) {
    bindEventsToLinks(listItems[i]);
}

var body = document.body;
var newParagraph = document.createElement("p");
var pleaseEnableParagraph = document.querySelector("#please_enable");

// Add text to the new paragraph
newParagraph.innerText = "JavaScript is enabled";

//Remove "Please Enable JavaScript" paragraph
body.removeChild(pleaseEnableParagraph);
//why we don't need to define who is parent and who is the child, with this.parentNode?

//Append new paragaph to document
body.appendChild(newParagraph);

var anchor = document.querySelector("a");

//Add the class to the classList "selected"


anchor.classList.add("selected");

//Toggle the class "live"
anchor.classList.toggle("live");  

//Select select box
var navigationSelect = document.getElementById("nav");

//Navigate to URL when select box is changed
var navigateToValue = function() {
  window.location = this.value;
}

//Send analytics data
var sendAnalytics = function() {
  //Placeholder  
}

navigationSelect.addEventListener("change", navigateToValue);
navigationSelect.addEventListener("change", sendAnalytics);

My code for the schedule manager project:

//Problem: User interaction does not provide desired results.
//Solution: Add interativity so the user can manage daily tasks. 

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");  //completed-tasks

//New Task List Item
var createNewTaskElement = function(taskstring){
	//Create List Item
	var listItem = document.createElement("li");
	//input(checkbox)
	var checkBox = document.createElement("input"); //checkbox
	//label
	var label = document.createElement("label");
	//input(text)
	var editInput = document.createElement("input"); //text
	//button.edit
	var editButton = document.createElement("button"); 
	//button.delete
	var deleteButton = document.createElement("button"); 
	
	//Each element needs modifying
	
	checkBox.type = "checkbox";
	editInput.type = "text";
	
	editButton.innerText = "Edit";
	editButton.className = "edit";
	
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";
	
	label.innerText = taskString;
	//Each element needs appending
	listItem.appendChild(checkbox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
}

//Add a new task
var addTask = function(){
	console.log("Add task....");

	//Create a new list item with the text from #new-task;
	var listItem = createNewTaskElement("taskInput.value");
	
	//Append listItem to incompleteTasksHolder
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
	
	taskInput.value = ""
}

//Edit an existing task
var editTask = function(){
	console.log("Edit task....");

	var listItem = this.parentNode;
	
	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector("label");
	
	var containsClass = listItem.classList.contains("editMode");
	
		//if the class of the parent is .editMode
		if(containsClass){
			//Switch from .editMode
			//label text become the input's value
			label.innerText = editInput.value;
		} else {
			//Switch to .editMode
			//input value becomes the label's text
			editInput.value = label.innerText;
	}
			//toggle .editMode on the list item
			listItem.classList.toggle("editMode");
}

//Delete an existing task
var deleteTask = function(){
	console.log("Delete task....");

	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	
//Remove the parent list from the ul
	ul.removeChild(listItem);
}

//Mark a task as complete
var taskCompleted = function(){
	console.log("Task complete....");
	//Append the task list item to the #completed-tasks
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}

//Mark a task as incomplete
var taskIncomplete = function(){
	console.log("Task incomplete....");
	//Append the task list item to the #incompleted-tasks
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
	console.log("Bind list item events");
	//select taskListItem's children
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
		//bind editTask to edit button
	editButton.onclick = editTask;
		//bind deleteTask to delete button
	deleteButton.onclick = deleteTask;
		//bind checkBoxEventHandler to checkbox
	checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function(){
	console.log("AJAX request");
}


//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

//addButton.onclick = ajaxRequest; //input does not get cleared up

//cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++){
		//bind events to list item's childer(taskCompleted)
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}
//cycle over completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++){
	//bind events to list item's childer(taskIncomplete)
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}