// Assignment 2
// VehicleConstructor now also takes in 'speed', stored as attribute
// add private variable: 'distance_travelled' that starts at 0
// add private method: 'updateDistanceTravelled' that increments distance travelled by speed
// add method: 'move' that calls private updateDistanceTravelled and makeNoise
// method: 'checkMiles' that prints distance_travelled

function VehicleConstructor(name, wheels, passengers, speed){
	// PRIVATE
	var self = this; // Declared 'self' equal to new object created
	var distance_travelled = 0;
	var updateDistanceTravelled = function(){
		distance_travelled += self.speed;
	}

	// PUBLIC
	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.speed = speed;

	this.makeNoise = function(){
		console.log("Vroooom!");
	}
	this.move = function(){
		updateDistanceTravelled(); // runs private method
		this.makeNoise(); // runs public method
	}
	this.checkMiles = function(){
		console.log(distance_travelled); // outputs private attribute
	}

}

var Bike = new VehicleConstructor("Bike", 2, 1, 20);
Bike.checkMiles(); // outputs 0
Bike.move(); // outputs 'Vrooom!'
Bike.checkMiles(); // outputs 20

