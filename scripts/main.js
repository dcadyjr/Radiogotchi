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

var nameButton = document.getElementById("nameButton");//gets name button element
nameButton.addEventListener("click", function(){//adds click event listener
  var name = document.getElementById("bearName").value;//stores name value from input box
  bear.name = name;//puts the name value into the bear object
  alert("Why don't you remember my name!")//alert
});

var feedButton = document.getElementById("feed");//gets feed button element

feedButton.addEventListener("click", function(){//adds click event listener
  bear.feed();//runs feed function from object
  hungerMeter.innerText = bear.hunger;//sets hunger meter text to hunger value in bear object

	})
	hungerMeter.innerText = bear.hunger;//sets hunger meter text to hunger value in bear object

setInterval(
  function(){
    bear.hunger++;
    hungerMeter.innerText = bear.hunger;

    almostDeadFace ();//calls the image changeing function below
  },
	3000);

var almostDeadFace = function (){
	var image = document.getElementById("start");//gets the image element
	if (bear.hunger > 6) {// if the score is greater than 6
	image.setAttribute("src", "https://s-media-cache-ak0.pinimg.com/236x/b5/da/ab/b5daaba84f15204e39afbc3462c4004b.jpg");//changes the image source attribute to a new image
		}
}

var sadDeadFace = function ()

