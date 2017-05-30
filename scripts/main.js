console.log("linked");

var bear = {
	name: "",
	hunger: 5,
	boredom: 5,
	sleepiness: 5,
	feed: function(){
		alert("tasty!");
		this.hunger = this.hunger - 1;
	}
};
//Global variables
var image = document.getElementById("start");//gets the image element

var hungerMeter = document.getElementById("hunger");
hungerMeter.innerText = bear.hunger;

var	boredomMeter = document.getElementById("boredom");
boredomMeter.innerText = bear.boredom;

var sleepinessMeter = document.getElementById("sleepiness");
sleepinessMeter.innerText = bear.sleepiness;

var nameButton = document.getElementById("nameButton");//gets name button element
nameButton.addEventListener("click", function(){//adds click event listener

//end Global variables

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
    bear.boredom++;
    boredomMeter.innerText = bear.boredom;

    faces ();//calls the image changeing function below
  },
	3000);

setInterval(
  function(){
    bear.sleepiness++;
    sleepinessMeter.innerText = bear.sleepiness;

    faces ();//calls the image changeing function below
  },
	3000);

setInterval(
  function(){
    bear.hunger++;
    hungerMeter.innerText = bear.hunger;

    faces ();//calls the image changeing function below
  },
	3000);

var faces = function (){
	if (bear.hunger > 6 && bear.hunger < 10) {// if the score is greater than 6
	  image.setAttribute("src", "https://s-media-cache-ak0.pinimg.com/236x/b5/da/ab/b5daaba84f15204e39afbc3462c4004b.jpg");//changes the image source attribute to a new image
	} else if (bear.hunger >= 10) {
		image.setAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/41DMiDVRWeL._AC_UL320_SR250,320_.jpg");
	} else if (bear.hunger < 4){
		image.setAttribute("src", "http://www.abc.net.au/triplej/radiohead/img/bear.gif");
	} else {
			image.setAttribute("src", "http://emblemsbf.com/img/1379.jpg")
	}
	
}

// var sadDeadFace = function (){
// 	if (bear.)
// }

