var grantHealth = 10;
var userHealth = 40;
var grantLives = 3;
var userWins = 0;
var grantWins = 0;

function startGame() {
	var playGame = prompt("Do you want to play a game with two characters?");
	if (playGame.toLowerCase() === "yes") {
		startCombat();
	}
}

function getDamage() {
	 var damage = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	 return damage;
}

function startCombat () {
  var userName = prompt ("What do you want to name your character?");
  
	while (userHealth > 0 && grantHealth > 0 && grantLives > 0) {
	 
		var attackOrQuit = prompt("Do you want to attack or quit?");
		if (attackOrQuit.toLowerCase() === "attack") {
			var userDamage = getDamage();
			var grantDamage = getDamage();
			
			userHealth -= userDamage;
		  grantHealth -= grantDamage;
			if (grantHealth  < 1) {
				grantLives --;
				userWins ++;
				console.log("THE ALMIGHTY GRANT HAS " + grantLives + " LIVES LEFT.");
				grantHealth = 10;
			}
		} else if (attackOrQuit.toLowerCase() === "quit") {
			return;
		}
		console.log(userName + " has " + userHealth + " health left.")
		console.log("The Almight Grant has " + grantHealth + " health left.")
		if (grantHealth  < 1) {
			grantLives --;
			userWins ++;
			console.log("THE ALMIGHTY GRANT HAS " + grantLives + " LIVES LEFT.");
			grantHealth = 10;
		}
	}
	if (grantLives === 0) {
		console.log(userName + " is the winner!");
	} else if (userHealth === 0) {
		console.log("The Almighty Grant is the winner!");
	}
}

startGame();