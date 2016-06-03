challenge question:

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    document.getElementById("footer").innerHTML = request.responseText;
  }
};
request.open('GET', 'footer.html');
request.send();

<?xml version="1.0" encoding="UTF-8"?>
<songs>
  <song>
    <title>Five little ducks</title>
    <artist>Micheal Jackson</artist>
  </song>
</songs>

<?xml version="1.0" encoding="UTF-8"?>
<songs>
  <song>
    <title>My Way</title>
    <artist>Frank Sinatra</artist>
  </song>
  <song>
    <title>My Way-2</title>
    <artist>Frank Sinatra-2</artist>
  </song>
  <song>
    <title>My Way-3</title>
    <artist>Frank Sinatra-3</artist>
  </song>
   <song>
    <title>My Way-4</title>
    <artist>Frank Sinatra-4</artist>
  </song>
</songs>

can test what the problem was if AJAX is not working
	var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if (xhr.status === 200){
				document.getElementById('ajax').innerHTML = xhr.responseText;
			} else if (xhr.status === 404){
				//file not found
			} else if (xhr.status === 500){
				//server had a problem
			}
		};
challenge questions: 
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){};
xhr.open('GET', 'sidebar.html');
xhr.send();

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4){
    if(xhr.status === 200){
      document.getElementById('sidebar').innerHTML = xhr.responseText;
    }
  }
};
xhr.open('GET', 'sidebar.html');
xhr.send();

[
{
"name": "Aimee",
"inoffice": false
},
{
"name":"Amit",
"inoffice": true
}
]

[
{
"title": "five little ducks",
"artist":"Michael Jackson"
}
]

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){
//		console.log(typeof xhr.responseText);
		var employees = JSON.parse(xhr.responseText);
		console.log(employees);
	}
};
xhr.open('GET', 'data/employees.json');
xhr.send();

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){
//		console.log(typeof xhr.responseText);
		var employees = JSON.parse(xhr.responseText);
		var statusHTML ='<ul class="bulleted"';
		for(var i = 0; i < employees.length; i+=1){
			if (employees[i].inoffice === true){
				statusHTML +='<li class="in">';
			} else {
				statusHTML +='<li class="out">';
			}
			statusHTML += employees[i].name;
			statusHTML += '</li>';
		}
		statusHTML +='</ul>';
		document.getElementById('employeeList').innerHTML = statusHTML;
	}
};
xhr.open('GET', 'data/employees.json');
xhr.send();

my answer to the challenge (office room availablity) - 
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4 && xhr.status === 200){
		var roomsStatus = JSON.parse(xhr.responseText);
		var statusHTML = '<ul class="rooms">'; //did not change ul class at first, need to look at css file. cannot find this class in HTML
		for (var i=0; i<roomsStatus.length; i +=1){
			if(roomsStatus[i].available === true){
				statusHTML +='<li class="empty">';
			} else {
				statusHTML +='<li class="full">';
			}
			statusHTML += roomsStatus[i].room;
			statusHTML += '</li>';
		}
			statusHTML +='</ul>';
			document.getElementById('roomList').innerHTML = statusHTML;
	}
};
xhr.open('GET', '../data/rooms.json');
xhr.send();
	
Dave's answer:

var roomRequest = new XMLHttpRequest();
roomRequest.onreadystatechange = function () {
  if(roomRequest.readyState === 4 && roomRequest.status === 200) {
    var rooms = JSON.parse(roomRequest.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
roomRequest.open('GET', '../data/rooms.json');
roomRequest.send();

$('#footer').load('footer.html');

jQuery.get(url, data, callback); = $.get(url, data, callback);

var url = '/employees.php';
var data = {
	firstName: "Dave",
	lastName: "McFarland"
};
var callback = function(response){
	//do something with the response
};
$.get(url, data, callback);

can also do like this: 
$.get('/employees.php', {
	firstName: "Dave",
	lastName: "McFarland"
}, function(response){
	//do something with the response
};

$('#ajax').load('sidebar.html');
$.get('sidebar.html', function(response){
	$('#ajax').html(response);
});
load is the same as the get function. 

challenge: 

$.get("footer.html", function(data){
  $('#footer').html(data);
});

<script>
    function sendAJAX() {
  		$('#ajax').load('sidebar.html');
//			$.get('sidebar.html', function(response){
//				$('#ajax').html(response);
			});
			
			$('#load').hide();
  }
  </script>

jQuery post method: 

var url = "http://website.com/posts";
var data = {
	firstName = "Dave", 
	lastName = "McFarland"
};
$.post(url, data, callback);
in index.html
<script>
$(document).ready(function(){
	$('form').submit(function(evt){
	evt.preventDefault();
	var url = $(this).attr("action");
	var formData = $(this).serialize();
	$.post(url, formData, function(response){
		$('#signup').html("<p>Thanks for signing up!</p>");
});//end post
}); //end submit
});//end ready

employee form with jQuery: 

$(document).ready(function(){
	var url="../data/employees.json";
	$.getJSON(url, function(response){
		var statusHTML = '<ul class="bulleted">';
		$.each(response, function(index, employee){
			if(employee.inoffice === true){true
				statusHTML +='<li class="in">';															
			} else {
				statusHTML += '<li class="out">';
			}
			statusHTML += employee.name + '<li>';
		});
		statusHTML +='</ul>';
		$('#employeeList').html(statusHTML);
	});//end getJSON

});//end ready

$.ajax(url, settings);
post function:

$.ajax(url, {
	data: formData,
	type:"POST",
	success: function(response){
		$('#signup').html("<p>Thanks for signing up!</p>")
}

});

$(document).ready(function(){
	$.get('missing.html', function(data){
		$('#myDiv').html(data);
}).fail(function(jqXHR){
	var errorMessage = "<p>Sorry! There 's been an error. ";
	errorMessage += "Please try again later. <p>";
	//alert(jqXHR.statusText);
	$('#myDiv').html(errorMessage);
});	

}); //end ready

challenge questions:

$.get("missing.html", function(data) {
  $("#footer").html(data);
}).fail(function(jqXHR){
  alert(jqXHR.statusText);
});

jQuery for employee and room challenge:

$(document).ready(function () {
  $.getJSON('../data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
  }); // end getJSON
}); // end ready

$(document).ready(function () {
  $.getJSON('../data/rooms.json', function (data) {
    var statusHTML = '<ul class="rooms">';
    $.each(data,function (index, rooms) {
      if (rooms.available === true) {
        statusHTML +='<li class="empty">';
      } else {
        statusHTML +='<li class="full">';
      }
      statusHTML += rooms.room + '</li>';
    });
    statusHTML += '</ul>';
    $('#roomList').html(statusHTML)
  }); // end getJSON
}); // end ready

// Either room or rooms is OK, but it needs to be consistent. 

$(document).ready(function(){
	$('button').click(function(){
		$('button').removeClass("selected");
		$(this).addClass("selected");
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var animal = $(this).text();
		var flickrOptions = {
			tags: animal,
			format: "json"
		};
		function displayPhotos(data){
		}
		$getJSON(flickerAPI, flickrOptions, displayPhotos);
	}); //end click. addClass must be after removeClass,otherwise the button will be clicked and then removed immediately

}); //end ready, put this function on top of the code.  jq doesn't run before HTML is fully loaded

alternate: 
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	{
		tags:animal,
		format:"json"

	},
	function(data){
	}

	);

challenge questions: 

$(document).ready(function() {

  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q : "Portland,OR",
    units : "metric"
  };
  function showWeather(weatherReport) {
    $('#temperature').text(weatherReport.main.temp);
  }
  $.getJSON(weatherAPI, data, showWeather)
});

flickr-search:

$(document).ready(function() {
	$('form').submit(function(evt){
	evt.preventDefault();
	var $searchField = $('#search');
	var $submitButton = $('#submit');
		
	$searchField.prop("disabled", true);
	$submitButton.attr("disabled", true).val("searching....");
     // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var animal = $searchField.val(); //cannot be ('#search').val()
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
			$.each(data.items, function(i, photo){
				photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
			}); //end each
        photoHTML += '</ul>';
       	$('#photos').html(photoHTML);
				$searchField.prop("disabled", false);
				$submitButton.attr("disabled", false).val("Search");
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
}); // end click
}); //end ready
