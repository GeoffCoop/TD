

function drawMenu(ctx, height) {
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "#1F5592";
    var menuRectX = 0;
    var menuRectY = 0;
    var menuRectWidth = 400;
    var menuRectHeight = height;
    ctx.fillRect(menuRectX, menuRectY, menuRectWidth, menuRectHeight);
    ctx.globalAlpha = 1.0;
    ctx.font = "50px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Tower Defense!", 25, 55);
    ctx.lineWidth = 3;
    ctx.moveTo(0, 75);
    ctx.lineTo(400, 75);
    ctx.font = "25px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(gold, 70, 110);
    ctx.fillText(hearts, 180, 110);
    ctx.fillText("Score: "+score, 250, 110);
    ctx.moveTo(0, 125);
    ctx.lineTo(400, 125);
    ctx.moveTo(0, 205);
    ctx.lineTo(400, 205);
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.75;
    ctx.stroke();
    if (menuSelectedTower != -1) {
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(towers[menuSelectedTower].x + 20, towers[menuSelectedTower].y + 20, towers[menuSelectedTower].range, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#0D2F5B";
      ctx.fillRect(30, 220, 330, 280);
      ctx.moveTo(30, 222);
      ctx.lineTo(360, 220);
      ctx.moveTo(360, 220);
      ctx.lineTo(360, 500);
      ctx.moveTo(360, 500);
      ctx.lineTo(30, 500);
      ctx.moveTo(30, 500);
      ctx.lineTo(30, 222);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "white";
      ctx.lineWidth = 2;
      ctx.moveTo(30, 260);
      ctx.lineTo(360, 260);
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.moveTo(150, 260);
      ctx.lineTo(150, 500);
      ctx.moveTo(250, 260);
      ctx.lineTo(250, 500);
      ctx.moveTo(30, 290);
      ctx.lineTo(360, 290);
      ctx.moveTo(30, 320);
      ctx.lineTo(360, 320);
      ctx.moveTo(30, 350);
      ctx.lineTo(360, 350);
      ctx.moveTo(30, 380);
      ctx.lineTo(360, 380);
      ctx.moveTo(30, 410);
      ctx.lineTo(360, 410);
      ctx.moveTo(30, 440);
      ctx.lineTo(360, 440);
      ctx.moveTo(30, 470);
      ctx.lineTo(360, 470);
      ctx.font = "16px Arial";
      var tType = "";
      var tTargets = "";
      if (towers[menuSelectedTower].type == 1) {
        tType = "Ground Projectile";
        tTargets = "Ground";
      } else if (towers[menuSelectedTower].type == 2) {
        tType = "Ground Bomb";
        tTargets = "Ground";
      } else if (towers[menuSelectedTower].type == 3) {
        tType = "Air Projectile";
        tTargets = "Air";
      } else if (towers[menuSelectedTower].type == 4) {
        tType = "Air Missile";
        tTargets = "Air";
      }
      ctx.fillText(tType, 100, 250);
      ctx.fillText("Current", 165, 280);
      ctx.fillText("Next Level", 265, 280);
      ctx.fillText("Level", 40, 310);
      ctx.fillText(towers[menuSelectedTower].level, 165, 310);
      if(towers[menuSelectedTower].level<3){
        ctx.fillText(towers[menuSelectedTower].level+1, 265, 310);
        ctx.fillText(towers[menuSelectedTower].damage+10, 265, 340);
        ctx.fillText(towers[menuSelectedTower].range+2, 265, 370);
        ctx.fillText(towers[menuSelectedTower].rate-10, 265, 400);
      }
      else{
        ctx.fillText("---", 265, 310);
        ctx.fillText("---", 265, 340);
        ctx.fillText("---", 265, 370);
        ctx.fillText("---", 265, 400);
      }
      ctx.fillText("Damage", 40, 340);
      ctx.fillText(towers[menuSelectedTower].damage, 165, 340);
      ctx.fillText("Range", 40, 370);
      ctx.fillText(towers[menuSelectedTower].range, 165, 370);
      ctx.fillText("Firing Rate", 40, 400);
      ctx.fillText(towers[menuSelectedTower].rate, 165, 400);
      ctx.fillText("Targets", 40, 430);
      ctx.fillText(tTargets, 165, 430);
      ctx.fillText("---", 265, 430);
      ctx.fillText("Upgrade Cost", 40, 460);
      ctx.fillText(towers[menuSelectedTower].upgradeCost, 165, 460);
      ctx.fillText("Sell For", 40, 490);
      ctx.fillText(towers[menuSelectedTower].sellFor, 165, 490);
      var show = document.getElementById("upgradeOrSellButtons");
      show.style.display = "block";
      ctx.stroke();
    } //If there is a tower selected
    ctx.moveTo(0, 510);
    ctx.lineTo(400, 510);
    ctx.moveTo(400, 0);
    ctx.lineTo(400, 600);
    ctx.stroke();
}

function drawMainMenu(ctx) {
    inOptionsMenu = false;
    inMainMenu = true;
    var show = document.getElementById("towers");
    show.style.display = "none";
    var show2 = document.getElementById("mainMenu");
    show2.style.display = "block";
    ctx.fillStyle = "#0D2F5B";
    ctx.globalAlpha = .9;
    ctx.fillRect(0, 125, 400, 385)
    ctx.globalAlpha = 1;
    ctx.fillStyle = "white"
    ctx.lineWidth = 1;
    ctx.moveTo(0, 180);
    ctx.lineTo(400, 180);
    ctx.fillText("Main Menu", 140, 162);
    ctx.stroke();
}

function drawOptionsMenu(ctx) {
    inMainMenu = false;
    inOptionsMenu = true;
    var show = document.getElementById("towers");
    show.style.display = "none";
    var show2 = document.getElementById("optionsMenu");
    show2.style.display = "block";
    ctx.fillStyle = "#0D2F5B";
    ctx.globalAlpha = .9;
    ctx.fillRect(0, 125, 400, 385)
    ctx.globalAlpha = 1;
    ctx.fillStyle = "white"
    ctx.lineWidth = 1;
    ctx.moveTo(0, 180);
    ctx.lineTo(400, 180);
    ctx.moveTo(0, 320);
    ctx.lineTo(400, 320);
    ctx.moveTo(0, 370);
    ctx.lineTo(400, 370);
    ctx.font = "30px Arial";
    ctx.fillText("Options", 150, 162);
    ctx.font = "16px Arial";
    ctx.fillText("Show Grid", 50, 210);
    ctx.fillText("Show Tower Coverage", 50, 240);
    ctx.fillText("Show Shortest Path Left to Right", 50, 270);
    ctx.fillText("Show Shortest Path Up to Down", 50, 300);
    ctx.font = "30px Arial";
    ctx.fillText("Controls", 150, 355);
    ctx.font = "16px Arial";
		if(readyForKeyboardShortcut==1){
			ctx.fillStyle="red";
			ctx.fillText(String.fromCharCode(upgradeKeyboardShortcut), 200, 410);
			ctx.stroke();
			ctx.fillStyle="white"
		}
		else{
			ctx.fillText(String.fromCharCode(upgradeKeyboardShortcut), 200, 410);
			ctx.stroke();
		}
		if(readyForKeyboardShortcut==2){
			ctx.fillStyle="red";
	    ctx.fillText(String.fromCharCode(sellBuildingKeyboardShortcut), 200, 440);
			ctx.stroke();
			ctx.fillStyle="white"
		}
		else{
			ctx.fillText(String.fromCharCode(sellBuildingKeyboardShortcut), 200, 440);
			ctx.stroke();
		}
		if(readyForKeyboardShortcut==3){
			ctx.fillStyle="red";
			ctx.fillText(String.fromCharCode(nextLevelKeyboardShortcut), 200, 470);
			ctx.stroke();
			ctx.fillStyle="white"
		}
		else{
			ctx.fillText(String.fromCharCode(nextLevelKeyboardShortcut), 200, 470);
			ctx.stroke();
		}
    ctx.stroke();
}

function drawHighScoresMenu(ctx){
    inMainMenu = false;
    inOptionsMenu = false;
    inCreditsMenu = false;
    inHighScoresMenu = true;
    var show = document.getElementById("towers");
    show.style.display = "none";
    var show2 = document.getElementById("optionsMenu");
    show2.style.display = "none";
    var show2 = document.getElementById("mainMenu");
    show2.style.display = "none";
    var show2 = document.getElementById("creditsMenu");
    show2.style.display = "none";
    var show2 = document.getElementById("highScoresMenu");
    show2.style.display = "block";
    ctx.fillStyle = "#0D2F5B";
    ctx.globalAlpha = .9;
    ctx.fillRect(0, 125, 400, 385)
    ctx.globalAlpha = 1;
    ctx.fillStyle = "white"
    ctx.lineWidth = 1;
    ctx.moveTo(0, 180);
    ctx.lineTo(400, 180);
    ctx.font = "30px Arial";
    ctx.fillText("High Scores", 120, 162);
    ctx.font = "24px Arial";
    var storedHSNames = [];
		var storedHsScores = [];
		if(localStorage.getItem("highscore") !== null){
			storedHSNames = JSON.parse(localStorage.getItem("highscore"));
			storedHsScores = JSON.parse(localStorage.getItem("score"));
		}
		for (var hs=0;hs<storedHSNames.length;hs++){
			graphics.context.fillText(storedHsScores[hs]+" - "+storedHSNames[hs],50,220+30*hs);
		}
    ctx.stroke();
}

function drawCreditsMenu(ctx){
    inMainMenu = false;
    inOptionsMenu = false;
    inHighScoresMenu = false;
    inCreditsMenu = true;
    var show = document.getElementById("towers");
    show.style.display = "none";
    var show2 = document.getElementById("optionsMenu");
    show2.style.display = "none";
    var show2 = document.getElementById("mainMenu");
    show2.style.display = "none";
    var show2 = document.getElementById("highScoresMenu");
    show2.style.display = "none";
    var show2 = document.getElementById("creditsMenu");
    show2.style.display = "block";
    ctx.fillStyle = "#0D2F5B";
    ctx.globalAlpha = .9;
    ctx.fillRect(0, 125, 400, 385)
    ctx.globalAlpha = 1;
    ctx.fillStyle = "white"
    ctx.lineWidth = 1;
    ctx.moveTo(0, 180);
    ctx.lineTo(400, 180);
    ctx.font = "30px Arial";
    ctx.fillText("Credits", 150, 162);
    ctx.font = "20px Arial";
    ctx.fillText("This game was created by Matt Ward", 20, 240);
    ctx.fillText("and Kyle Cooper as a project for our", 20, 270);
    ctx.fillText("CS 5410 Game Development class", 20, 300);
    ctx.fillText("taught by Professor Dean Mathias.", 20, 330);
    ctx.stroke();
}