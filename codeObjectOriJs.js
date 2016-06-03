var contact = {
    firstName:"Andrew",
    lastName: "Chalkley",
    fullName: function() {
   console.log(this.firstName + " " + this.lastName);
    }
}

var contact = {
  firstName: "Andrew",
  lastName: "Chalkley",
  fullName: function(){
    var print = this.firstName + " " + this.lastName;
    return print;
  }
}

var calculator = {
		sum: 0,
		add: function(value) {
			this.sum +=value;  //this.sum = this.sum + value; //this.sum -=value; this.sum=this.sum*value; this.sum = this.sum/value;
    },
    clear: function() {
			this.sum = 0;
    }, 
    equals: function() {
			return this.sum;
    }
}

function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};

var dice = {
	sides: 6,
	roll: function () {
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber;  //if add more code after return method, it will not be executed.
}
}

constructor functions: 

function Animal(breed, noise) {
    this.breed = breed;
    this.noise = noise;
    this.makeNoise = function() {
        console.log(this.noise + ", " + this.noise);
    }
}

Given the following code what is the best way to describe Monster?

function Monster(rank) {
  this.rank = rank;
  this.health = 100;
  this.takeHit = function() {
    this.health--;
  }
  this.isDead = function() {
    return this.health <= 0;
  }
}

var monster = new Monster("Captain");

Given the following code what is the best way to describe task?

function TodoListItem(description) {
  this.description = description;
  this.isDone = false;
  this.toString = function() {
    return this.description;
  }
  this.markAsComplete = function() {
    this.isDone = true;
  }
}

var task = new TodoListItem("Do the laundry!");

function Monster(name){
  this.name = name;
  this.health = 100;
}

constructor function: 

function Dice(sides) {
	this.sides = sides;
	this.roll = function (){
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber;  //if add more code after return method, it will not be executed
	}
}

var dice = new Dice(6);

function Dice(sides) {
	this.sides = sides;
	this.roll = function (){
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber;  
	}
}

var dice = new Dice(6);
var dice10 = new Dice(10);

console.log(dice.roll === dice10.roll); -- false

function diceRoll(){
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber; 
}

function Dice(sides) {
	this.sides = sides;
	this.roll = diceRoll;
}

var dice = new Dice(6);
var dice10 = new Dice(10);

console.log(dice.roll === dice10.roll); - true

prototype function: 

function Dice(sides) {
	this.sides = sides;
	}

Dice.prototype.roll = function (){
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber; 
}

var dice = new Dice(6);
var dice10 = new Dice(10);

console.log(dice.roll === dice10.roll); - true


function Monster(name) {
  this.name = name;
  this.health = 100;
  }
Monster.prototype.takeDamage = function (){
  this.health--;//Monster.health-- is not working , why?
}

prototype chain: 

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
 return this.firstName + " " + this.lastName; 
};

function Teacher(firstName, lastName, roomNumber) {
  Person.call(this, firstName, lastName);
  this.room = roomNumber;
}

Teacher.prototype = Object.create(Person.prototype);