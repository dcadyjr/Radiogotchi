console.log("linked");

var bear = {
	name: "",
	hunger: 5,
	boredom: 5,
	sleepiness: 5,
	feed: function(){
		alert("tasty!");
		this.hunger = this.hunger - 1;
	},
	excite: function(){
		alert("yes");
		this.boredom = this.boredom - 1;
	},
	sleep: function(){
		alert("Fitter Happier");
		this.sleepiness = this.sleepiness - 1;
	}
};
//Global variables
var image = $("#start")[0];//gets the image element

var hungerMeter = $("#hunger")[0];//gets bunger span
hungerMeter.innerText = bear.hunger;//sets the text of the hungermeter = to the hunger property value

var	boredomMeter = $("#boredom")[0];//gets boredom span
boredomMeter.innerText = bear.boredom;

var sleepinessMeter = $("#sleepiness")[0];
sleepinessMeter.innerText = bear.sleepiness;

var nameButton = $("#nameButton")[0];//gets name button element
nameButton.addEventListener("click", function(){//adds click event listener



//end Global variables

  var name = document.getElementById("bearName").value;//stores name value from input box
  bear.name = name;//puts the name value into the bear object
  alert("Why don't you remember my name!")//alert
});

$("#feed").click(function(){//adds click event listener
  bear.feed();//runs feed function from object
  hungerMeter.innerText = bear.hunger;//sets hunger meter text to hunger value in bear object
	})

	
	$("#bored").click(function() {
		bear.excite();
		boredomMeter.innerText = bear.boredom;
	})

	
	$("#sleep").click(function() {
		bear.sleep();
		sleepinessMeter.innerText = bear.sleepiness;
	})


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
	if (bear.hunger > 6 && bear.hunger < 10 || bear.boredom > 6 && bear.boredom < 10 || bear.sleepiness > 6 && bear.sleepiness < 10) {// if the score is greater than 6
	  image.setAttribute("src", "https://s-media-cache-ak0.pinimg.com/236x/b5/da/ab/b5daaba84f15204e39afbc3462c4004b.jpg");//changes the image source attribute to a new image
	} else if (bear.hunger >= 10 || bear.boredom >= 10 || bear.sleepiness >= 10) {
		image.setAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/41DMiDVRWeL._AC_UL320_SR250,320_.jpg");
	} else if (bear.hunger < 4 || bear.sleepiness < 4 || bear.sleepiness < 4) {
		image.setAttribute("src", "http://www.abc.net.au/triplej/radiohead/img/bear.gif");
	} else {
			image.setAttribute("src", "http://emblemsbf.com/img/1379.jpg")
	}
	
}


