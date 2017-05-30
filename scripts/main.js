console.log("linked");

var bear = {
	name: "",
	hunger: 5,
	boredom: 5,
	sleepiness: 5,
	feed: function(){
		alert(this.name + " says tasty!");
		this.hunger = this.hunger - 1;
	}
};
var hungerMeter = document.getElementById("hunger");
hungerMeter.innerText = bear.hunger;

var	boredomMeter = document.getElementById("boredom");
boredomMeter.innerText = bear.boredom;

var sleepinessMeter = document.getElementById("sleepiness");
sleepinessMeter.innerText = bear.sleepiness;

var nameButton = document.getElementById("nameButton");
nameButton.addEventListener("click", function(){
  var name = document.getElementById("bearName").value;
  bear.name = name;
  alert("Why don't you remember my name!")
  console.log(bear)
});



var feedButton = document.getElementById("feed");

feedButton.addEventListener("click", function(){
  bear.feed();
  hungerMeter.innerText = bear.hunger;

	})
	hungerMeter.innerText = bear.hunger;


