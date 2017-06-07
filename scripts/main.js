
var bear = {
	name: "",
	fitter: 5,
	happier: 5,
	productive: 5,
	age: 0,
	feed: function(){
		// alert("tasty!");
		this.fitter = this.fitter + 1;
	},
	excite: function(){
		// alert("yes");
		this.happier = this.happier + 1;
	},
	sleep: function(){
		// alert("Fitter Happier");
		this.productive = this.productive + 1;
	}
};
//Global variables



var image = $("#imgBear")[0];//gets the image element

var ageMeter = $("#age")[0];
ageMeter.innerText = bear.age;

var fitterMeter = $("#fitter")[0];//gets bunger span
fitterMeter.innerText = bear.fitter;//sets the text of the hungermeter = to the hunger property value

var	happierMeter = $("#happier")[0];//gets boredom span
happierMeter.innerText = bear.happier;

var productiveMeter = $("#productive")[0];
productiveMeter.innerText = bear.productive;

var nameTag	= $("#showName")[0];

//end Global variables


var nameButton = $("#nameButton")[0];//gets name button element
	
nameButton.addEventListener("click", function(){//adds click event listener
	var name = document.getElementById("bearName").value;//stores name value from input box
  	bear.name = name;//puts the name value into the bear object
  	nameTag.innerText = bear.name;
});



var feed = function (){
	$("#feed").click(function(){//puts event listener on button with feed ID
  		bear.feed();//runs feed function from object
  		fitterMeter.innerText = bear.fitter;//sets hunger meter text to hunger value in bear object
	})
}
feed();

var play = function (){
	$("#bored-btn").click(function() {//puts event listener on button with bored ID
		bear.excite();//runs excite function from object
		happierMeter.innerText = bear.happier;//sets boredom meter text to boredom value in the bear object
	})
}
play ();

var sleep = function () {
	$("#sleep").click(function() {//puts event listener on button with sleep ID
		bear.sleep();//runs sleep function from object
		productiveMeter.innerText = bear.productive;////sets sleepiness meter text to sleepiness value in the bear object
	})
}
sleep ();

var happierClock = function (){

	var setIntervalID = setInterval(function(){
    	bear.happier--;
    	happierMeter.innerText = bear.happier;

   		if (bear.fitter === 0 || bear.happier === 0 || bear.sleepiness === 0) {
    		clearInterval(setIntervalID); 	
    	}

    	faces ();
  	},3000);
}
happierClock ();

var ageClock = function (){
	var setIntervalID = setInterval(function(){
    	bear.age++;
    	ageMeter.innerText = bear.age;

   		if (bear.fitter === 0 || bear.happier === 0 || bear.sleepiness === 0) {
    		clearInterval(setIntervalID); 	
    	}

  	},7000);
}
ageClock ();

var productiveClock = function(){
	
	var setIntervalID = setInterval(function(){
    	bear.productive--;
    	productiveMeter.innerText = bear.productive;

   		if (bear.fitter === 0 || bear.happier === 0 || bear.productive === 0) {
    		clearInterval(setIntervalID); 	
    	}
    	faces ();//calls the image changeing function below
  	},3000);
}
productiveClock ();

var fitterClock = function (){

	var setIntervalID = setInterval(function(){
    	bear.fitter--;
    	fitterMeter.innerText = bear.fitter;

   		if (bear.fitter === 0 || bear.happier === 0 || bear.productive === 0) {
    		clearInterval(setIntervalID);
    	}
    	faces ();//calls the image changeing function below
  	},3000);
}
fitterClock ();


var faces = function (){
	if (bear.fiter > 6 && bear.fitter < 10 || bear.happier > 6 && bear.happier < 10 || bear.productive > 6 && bear.productive < 10) {// if the score is greater than 6
	  image.setAttribute("src", "http://www.abc.net.au/triplej/radiohead/img/bear.gif");//changes the image source attribute to a new image
	} else if (bear.fitter === 0 || bear.happier === 0 || bear.productive === 0) {
		image.setAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/41DMiDVRWeL._AC_UL320_SR250,320_.jpg");
	} else if (bear.fitter < 4 && bear.fitter > 0 || bear.happier < 4 && bear.happier > 0 || bear.productive < 4 && bear.productive > 0) {
		image.setAttribute("src", "https://s-media-cache-ak0.pinimg.com/236x/b5/da/ab/b5daaba84f15204e39afbc3462c4004b.jpg");
	} else {
			image.setAttribute("src", "http://emblemsbf.com/img/1379.jpg")
	}
	
}
//variables for lights
var dimmer = function() {
	$("#dimmer").show();
	}

var bright = function() {
	$("#dimmer").hide();//hides the #dimmer css
}

var lightsAreOn = true;

//function for turning lights on and off
var lights = function (){

	$("#lights").click(function(){//calls the dimmer function on button click
		if (lightsAreOn === true) {
			dimmer();
			lightsAreOn = false;
			$("#lights-btn").html("keep it light");
		} else {
			bright();
			lightsAreOn = true;
			$("#lights-btn").html("it's always best when the light is out");
		}
	})
}
lights();

//Animations

var animate = function () {//animate function
	
	$("#play").click(function(){//adds event listener to play dive
		$("#imgBear").addClass("animate");//adds animate class to image to fire css animation
		window.setTimeout(function() {
			$("#imgBear").removeClass("animate");
		}, 4100);
	})

}
animate ();
