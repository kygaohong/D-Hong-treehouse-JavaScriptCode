//Hide warning
//Show warning slowly

$(".warning").hide().show("slow"); //more condense code

$ = jQuery
jQuery(".warning").hide();
jQuery(".warning").show("slow");

//How to include jQuery into a project:
//function myCode() {
//	$(".warning").hide().show("slow");
//}

//var myCode = function() {
//	$(".warning").hide().show("slow");
//}
//
//myCode();
//
//$(document).ready(myCode);//don't include () after my code, because we want jQuery to run my code

//$(document).ready(function() {
//	$(".warning").hide().show("slow");
//});

//$(function(){
//	$(".warning").hide().show("slow");
//}); //if include javaScript at the end of body, don't need ready function. best practice.
 
$(".warning").hide().show("slow");


//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interation

//1, Hide spoiler
$(".spoiler span").hide();
//2, Add a button
$(".spoiler").append("<button>Reveal spoiler!</button>");
//3, when buttom pressed
$("button").click(function(){
	//3.1, show spoiler next to the button clicked
	$(this).prev().show();	
//	$(".spoiler span").show();
	//3.2, get rid of button
	$(this).remove();
});
	

//Create the Modal
var $modal = $("<div id='modal'></div>");

//Create a placeholder for text in the modal
var $placeHolder = $("<p id='placeHolder'></p>");
$modal.append($placeHolder);

//Create a button to dismiss modal and add it to modal
var $dismissButton = $("<button>Dismiss</button>");
$modal.append($dismissButton); //this is the answer - fix the problem - this dismiss button isn't showing.

//Hide modal when button is pressed
$dismissButton.click(function(){
  $modal.hide(300);
});

$("body").append($modal);

//A function to show a modal
function displayModal(message) {
  $placeHolder.text(message);
  $modal.show();
}

//Show an example modal
displayModal("Hello World!");

Using jQuery only, add to all links with the class "external", the target attribute with the value of "_blank".
$(".external").attr("target", "_blank");

//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image =$("<img>");
var $caption = $("<p></p>");

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);
	
//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	//Update overlay with the image linked in the link
	$image.attr("src", imageLocation);
	
	//Show the overlay
	$overlay.show();
	
	//Get child's alt attribute and set caption
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});
	

//When overlay is clicked
	$overlay.click(function(){
	//Hide the overlay
	$overlay.hide();					 
});


$("#fullName").val(fullName);

//Select the input for the title for blog post.
var $titleInput = $("#title");

//Select the preview h1 tag
var $previewTitle = $("#titlePreview");

// Every second update the preview
var previewTimer = setInterval(updatePreview, 1000);

function updatePreview(){  
  //Get the user's input
  var titleValue = $("#title").val(); //retrieve the value of input
  //Set the user input as the preview title. 
  $previewTitle.text(titleValue);
}

//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  //Create an option
  var $option = $("<option></option>");

  //Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  //option's value is the href
  $option.val($anchor.attr("href"));
  //option's text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});
//Create button 
var $button = $("<button>Go</button>");
$("#menu").append($button);
//Bind click to button
$button.click(function(){
  //Go to select's location
  window.location = $select.val();
});


//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);
//cycle over menu links
$("#menu a").each(function(){
	var $anchor = $(this);
	//Create an option
	var $option = $("<option></option>");
	
	//Deal with selected options depending on current page
	if($anchor.parent().hasClass("selected")){
		$option.prop("selected", true);
	}
	
	//option's value is the href
	$option.val($anchor.attr("href"));
	//option's text is the text of link
	$option.text($anchor.text());
	//append optino to select
	$select.append($option);
});
	

////Create button
//var $button = $("<button>Go</button>"); //why button is on the top right?
//$("#menu").append($button);
//Bind change listener to the select
$select.change(function(){
	//Go to select's location
	window.location = $select.val();
});


//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  //Create an option
  var $option = $("<option></option>");

  //Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  //option's value is the href
  $option.val($anchor.attr("href"));
  //option's text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});
//Create button 
var $button = $("<button>Go</button>");

//Bind click to button
$select.change(function(){
  //Go to select's location
  window.location = $select.val();
});


challenge question: 

//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
    //Find out if password is valid  
    if(isPasswordValid()) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint 
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirmPassword.keyup(enableSubmitEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

enableSubmitEvent();

password confirmatin project - before perfect: 
//Problem: Hints are shown even when form is valid
//Solution: Hide an show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//Hide hints
$("form span").hide();

function passwordEvent(){
//Find out if password is valid
	if($password.val().length > 8){
	//Hide hint if valid
		$password.next().hide();
	} else {
	//else show hint
		$password.next().show();
	}	
}

function confirmPasswordEvent(){
	//Find out if password and confirmation match
	if($password.val() === $confirmPassword.val()){
	//Hide hint if match
		$confirmPassword.next().hide();
	} else {
	//else show hint
		$confirmPassword.next().show();
	}	
}
//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);;
	

//When event happens on confirmation input
$confirm_password.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

challeng questions
//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");

//When clicking on control list items
$(".controls li").click(function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});
 
 drawing project: 

//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//equal to document.getElementByTagName("canvas")[0]

//When clicking on control list items
$(".controls").on("click", "li", function(){
	//Deselect sibling elements
	
	$(this).siblings().removeClass("selected");
	//Select clicked element
	$(this).addClass("selected");
	//cache current color
	color = $(this).css("background-color");
});
	
//When "new color" is pressed
$("revealColorSelect").click(function(){
//Show color select or hide the color select
	changeColor();
	$("#colorSelect").toggle();
});

//update the new color span
function changeColor(){
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("#newColor").css("background-color", "rgb(" + r + ", " + g + ", + " + b + ")");
}

//When color sliders change
$("input[type=range]").change(changeColor);

//When "add color" is pressed
$("#addNewColor").click(function(){
//Append the color to the controls ul
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css(background-color"));
	$(".controls ul").append($newColor);
	//Select the new color
		$newColor.click();																				 
});
	
//On mouse events on the canvas
$canvas.mousedown(function(e){
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e){
		//Draw lines
	if(mouseDown){
		context.beginPath();
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		context.lineTo(e.offsetX, e.offsetY);
		context.strokeStyle = color;
		context.stroke();
		lastEvent = e;
	}
}).mouseup(function(){
	mouseDown = false;
}).mouseleave(function(){
	$canvas.mouseup();
});

