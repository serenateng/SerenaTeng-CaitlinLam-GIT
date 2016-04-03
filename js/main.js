// JavaScript Document
//Self Executing Anonymous Function - use this. prevents global variables

(function() {
	

	//Variables
	
	var photographs = ["DespicableMe", "FlyingSwordsOfDragonGate", "HouseAtTheEndOfTheStreet", "IceAgeDOTD", "IronMan2", "Kick_Ass"];
	var number = ["1 of 6", "2 of 6", "3 of 6", "4 of 6","5 of 6", "6 of 6"];
	var thumbnailList = document.querySelector("#thumbnailList");
	var source = thumbnailList.querySelectorAll ("img");
	var despicable = document.querySelector("#despicable");
	var largeImage = document.querySelector("#largeImage");
	var captions = document.querySelector("#photoCaption");
	var numbers = document.querySelector("#photoNum");
	var prevClicked;

	//Functions

	function imageSwap(e) {

		e.preventDefault();
		var thisImg = "images/" + photographs[e.target.id] + ".jpg";
		despicable.src = thisImg;

		var thisCaption = caption[e.target.id];
		captions.innerHTML = thisCaption;

		var thisNumber = number[e.target.id];
		numbers.innerHTML = thisNumber;


		if (prevClicked)
		{
			prevClicked.style.opacity = null;
		}

		prevClicked = source[e.target.id];
		prevClicked.style.opacity = 1;

		TweenMax.from(despicable, .7, {opacity:0, marginLeft:"-50px", ease:Strong.easeInOut});
		TweenMax.to(despicable, .7, {opacity:1, marginLeft:"0", ease:Strong.easeInOut});
	}


	//Listeners
	for(var i=0; i<source.length; i++) {
		source[i].addEventListener("click", imageSwap, false);
	}



})();



