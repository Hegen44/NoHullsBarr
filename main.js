canvas = document.getElementById('game');
context = canvas.getContext('2d');
var screen = 10;

////////////CREATION SCREEN///////////////////

var imageSrc = new Array();
imageSrc.push("https://i.imgur.com/gFnMh2j.png?1");

var objects = new Array();
function image(x,y,h,w,src){
	var imageObj = new Image();
	imageObj.x = x;
  imageObj.y = y;
  imageObj.height = h;
  imageObj.width = w;
  imageObj.src = src;
  return imageObj;
}
var ship = image(80,100,120,330,imageSrc[0]);
objects.push(ship);

var upgrades = new Array();
var upgrade = function (x,y,h,w,desc,border){
this.x = canvas.width - x;
this.y = y;
this.height = h
this.width = w
//this.style = color;
this.border = border;
this.desc = desc;
upgrades.push(this);
}

var over = 0;
var displayText = false;
canvas.addEventListener("mouseover",mouseOverUp);
function mouseOverUp(e){
for(i=0;i<hullUpCon.length;i++){
	if(e.clientX > hullUpCon[i].x && e.clientX < hullUpCon[i].x + hullUpCon[i].width
  		&& e.clientY > hullUpCon[i].y && e.clientY > hullUpCon[i].y + hullUpCon[i].height){
      over = i;
    displayText = true;
    console.log(i);
      }else{
      over = 5;
      displayText = false;
     }
}
	
}

var hullUpCon = new Array();
var powerUpCon = new Array();
var offenseUpCon = new Array();
var scannerUpCon = new Array();

	for(i = 0; i < 5;i++){
		var hullUpgrade = new upgrade(390-(i*70) ,60,50,65,"#1","thick solid red");
    hullUpCon.push(hullUpgrade);
		var powerUpgrade = new upgrade(390-(i*70),160,50,65,"#2","thick solid blue");
    powerUpCon.push(powerUpgrade)
		var offenseUpgrade = new upgrade(390-(i*70) ,260,50,65,"#3","thick solid purple");
    offenseUpCon.push(offenseUpgrade)
		var scannerUpgrade = new upgrade(390-(i*70) ,360,50,65,"#4","thick solid red");
    scannerUpCon.push(scannerUpgrade);
	}
//console.log(hullUpCon.length);


var windows = new Array();
var window = function (x,y,h,w){
this.x = canvas.width - x;
this.y = y;
this.height = h
this.width = w
windows.push(this);
}


//check which window to create
var upgradeWindow = new window(400,30,440,370);
var skillWindow = new window(450,30,100,50);
var instructionsWindow = new window(700,30, 80, 150);
var diveWindow = new window(700,350,80,150);
var currentWindow = windows[0];
//check which window to show user


function draw(){
 	canvas.width = canvas.width;
  context.fillStyle = "#9DD1E3";//9DD1E3//90C3D4//96E2EB//best to worst order
  context.fillRect(0,0 ,canvas.width, canvas.height);
  context.fillStyle = "#FFFFFF";
  context.fillRect(windows[0].x,windows[0].y,windows[0].width,windows[0].height);
  context.fillStyle = "#FFFFFF";
  context.fillRect(windows[1].x,windows[1].y,windows[1].width,windows[1].height);
  context.fillRect(windows[2].x,windows[2].y,windows[2].width,windows[2].height);
  context.fillRect(windows[3].x,windows[3].y,windows[3].width,windows[3].height);
  context.fillStyle = "#000000";
  context.font = "15px vardana";
  context.fillText("Skill Points",windows[1].x,windows[1].y+15);
  context.fillText("Instructions",windows[2].x,windows[2].y+15);
  context.fillText("DIVE",windows[3].x,windows[3].y+15);
    

  for(i=0;i<hullUpCon.length;i++){
  context.fillStyle = "#4169E1";
  context.fillRect(hullUpCon[i].x,hullUpCon[i].y,hullUpCon[i].width,hullUpCon[i].height);
  //hullUpCon[i].style.border(thick red line);
  }
  
  context.font = "20px vardana";
  context.fillText("Hull",400,50);
  
  
  for(i=0;i<powerUpCon.length;i++){
  context.fillStyle = "#228B22";
  context.fillRect(powerUpCon[i].x,powerUpCon[i].y,powerUpCon[i].width,powerUpCon[i].height);
  }
  context.font = "20px vardana";
  context.fillText("Power",400,150);
  
  for(i=0;i<powerUpCon.length;i++){
  context.fillStyle = "#800000";
 context.fillRect(offenseUpCon[i].x,offenseUpCon[i].y,offenseUpCon[i].width,offenseUpCon[i].height);
  }
  context.font = "20px vardana";
  context.fillText("Offense",400,250);
  
  for(i=0;i<powerUpCon.length;i++){
  context.fillStyle = "#8B008B";
 context.fillRect(scannerUpCon[i].x,scannerUpCon[i].y,scannerUpCon[i].width,scannerUpCon[i].height);
  }
  context.font = "20px vardana";
  context.fillText("Scanner",400,350);
  context.drawImage(objects[0],10,170,objects[0].width, objects[0].height);
}

function update(){
	if(displayText){
  	context.fillStyle = "#000000";
  	context.font = "20px vardana";
  	context.fillText(hullUpCon[over].desc,400,150);
  }
}


/////////////////////MENU SCREEN/////////////////////
var menuOptions = new Array();
var option = function (x,y,h,w,t){
this.x = x;
this.y = y;
this.height = h
this.width = w
this.text = t;
menuOptions.push(this);
}

var startGame = new option(300,100,70,150,"Start Game");
var instructGame = new option(300, 150, 70, 150, "Instructions");

//check which mainmenu option was pressed
canvas.addEventListener("mousedown",handledown);
function handledown(eventParams){
	var screenOpt = checkDown(eventParams.clientX,eventParams.clientY);
  console.log(screenOpt);
  if(screenOpt < menuOptions.length){
  	screen = screenOpt;
    canvas.removeEventListener("mousedown",handledown);
  }
  	
}

//check menu option click
function checkDown(x,y){
	for(i = 0; i < menuOptions.length;i++){
  	if(x > menuOptions[i].x &&
		 	x < menuOptions[i].x + menuOptions[i].width &&
   		y > menuOptions[i].y &&
   		y < menuOptions[i].y + menuOptions[i].height){
   			return i;
   	}
  }
  //10 is # for menu screen
	return 10;
}

function menuDraw(){
	canvas.width = canvas.width;
  context.fillStyle = "#000000";
  context.font = "20px vardana";
  context.fillText(startGame.text,startGame.x,startGame.y);
  context.fillText(instructGame.text,instructGame.x,instructGame.y);
}

function menuUpdate(){

}


////////////Instruction Screen/////////////
function instructDraw(){
  canvas.width = canvas.width;
  context.fillStyle = "#000000";
  context.font = "20px vardana";
  context.fillText("Instructions",300,100);
}

function  instructUpdate(){

}

/////////CALL GAME LOOP///////////////

function game_loop() {
if(screen == 10){
	menuUpdate();
  menuDraw();
}else if (screen == 0){
	update();
  draw();
}else if (screen == 1){
	instructUpdate();
  instructDraw();
}
}

//4 planets in game
setInterval(game_loop, 30);