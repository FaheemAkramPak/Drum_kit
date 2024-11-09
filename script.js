let numOfBtns= document.querySelectorAll(".drum").length;
document.addEventListener("keyup",keyPressFunc);
	
	function clickFunc(btnName){	
		makeSound(btnName);
		animateBtn(btnName)
	}
	
	function keyPressFunc(event){
		makeSound(event.key);
		animateBtn(event.key);
	}
	
	function makeSound(btnName){
		
		switch(btnName){
			case "w":
				let tom1 = new Audio("sounds/tom-1.mp3");
				tom1.play();
			break;
			case "a":
				let tom2 = new Audio("sounds/tom-2.mp3");
				tom2.play();
			break;
			case "s":
				let tom3 = new Audio("sounds/tom-3.mp3");
				tom3.play();
			break;
			case "d":
				let tom4 = new Audio("sounds/tom-4.mp3");
				tom4.play();
			break;
			case "j":
				let snare = new Audio("sounds/snare.mp3");
				snare.play();
			break;
			case "k":
				let crash = new Audio("sounds/crash.mp3");
				crash.play();
			break;
			case "l":
				let kickBass = new Audio("sounds/kick-bass.mp3");
				kickBass.play();
			break;
			default:
				console.log("Invalid key Press ");		
		}// end of swith statement
	} // end of makeSound function
	
	function animateBtn(btnName){
			
			let activeBtn = document.querySelector('.'+btnName);
			
			activeBtn.classList.add("pressed");
			
			setTimeout(function(){
				activeBtn.classList.remove("pressed")
			},0.6);
			
			
		}