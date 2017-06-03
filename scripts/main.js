console.log("linked");

var bear = {
	name: "",
	hunger: 5,
	boredom: 5,
	sleepiness: 5,
	age: 0,
	feed: function(){
		// alert("tasty!");
		this.hunger = this.hunger - 1;
	},
	excite: function(){
		// alert("yes");
		this.boredom = this.boredom - 1;
	},
	sleep: function(){
		// alert("Fitter Happier");
		this.sleepiness = this.sleepiness - 1;
	}
};
//Global variables

var dimmer = function() {
	$("#dimmer").show();
	$("#lights").html("lights on")
	}

var image = $("#start")[0];//gets the image element

var ageMeter = $("#age")[0];
ageMeter.innerText = bear.age;

var hungerMeter = $("#hunger")[0];//gets bunger span
hungerMeter.innerText = bear.hunger;//sets the text of the hungermeter = to the hunger property value

var	boredomMeter = $("#boredom")[0];//gets boredom span
boredomMeter.innerText = bear.boredom;

var sleepinessMeter = $("#sleepiness")[0];
sleepinessMeter.innerText = bear.sleepiness;

var nameButton = $("#nameButton")[0];//gets name button element
	
	nameButton.addEventListener("click", function(){//adds click event listener
	var name = document.getElementById("bearName").value;//stores name value from input box
  	bear.name = name;//puts the name value into the bear object
  	alert("Why don't you remember my name!")//alert
	});
// var endGame;


//end Global variables


var feed = function (){
	$("#feed").click(function(){//puts event listener on button with feed ID
  	bear.feed();//runs feed function from object
  	hungerMeter.innerText = bear.hunger;//sets hunger meter text to hunger value in bear object
	})
}
	feed();

var play = function (){
	$("#bored").click(function() {//puts event listener on button with bored ID
		bear.excite();//runs excite function from object
		boredomMeter.innerText = bear.boredom;//sets boredom meter text to boredom value in the bear object
	})
}
	play ();

var sleep = function () {
	$("#sleep").click(function() {//puts event listener on button with sleep ID
		bear.sleep();//runs sleep function from object
		sleepinessMeter.innerText = bear.sleepiness;////sets sleepiness meter text to sleepiness value in the bear object
	})
}
	sleep ();

var boredomClock = function (){

	var setIntervalID = setInterval(
  		function(){

    	bear.boredom++;
    	boredomMeter.innerText = bear.boredom;

   	if (bear.hunger === 10 || bear.boredom === 10 || bear.sleepiness === 10) {
    	clearInterval(setIntervalID); 	
    }

    faces ();
  },
	3000);
}
	boredomClock ();

var ageClock = function (){
	var setIntervalID = setInterval(
  		function(){

    	bear.age++;
    	ageMeter.innerText = bear.age;

   	if (bear.hunger === 10 || bear.boredom === 10 || bear.sleepiness === 10) {
    	clearInterval(setIntervalID); 	
    }

  },
	7000);
}
	ageClock ();

var sleepinessClock = function(){
	
	var setIntervalID = setInterval(
  		function(){

    	bear.sleepiness++;
    	sleepinessMeter.innerText = bear.sleepiness;

   	if (bear.hunger === 10 || bear.boredom === 10 || bear.sleepiness === 10) {
    	clearInterval(setIntervalID); 	
    }
    faces ();//calls the image changeing function below
  },
	3000);
}
	sleepinessClock ();

var hungerClock = function (){

	var setIntervalID = setInterval(
  		function(){

    	bear.hunger++;
    	hungerMeter.innerText = bear.hunger;

   	if (bear.hunger === 10 || bear.boredom === 10 || bear.sleepiness === 10) {
    	clearInterval(setIntervalID);
    }
    faces ();//calls the image changeing function below
  },
	3000);

}
	hungerClock ();


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
//varialbles for lights function
var dimmer = function() {
	$("#dimmer").show();//shows the #dimmer css
}

var bright = function() {
	$("#dimmer").hide();//hides the #dimmer css
}

//function for turning lights on and off
var lights = function (){

	$("#lights").click(function(){//calls the dimmer function on button click
		dimmer();
	})

	$("#lights-on").click(function(){//calls the bright funtion on button click
		bright();
	})
}
 lights();

//Animations
 $( "#play" ).click(function() {
 
  $( "#start" ).animate({
    left: "350px"});//on to something. research back and forth. use in if statement

});

