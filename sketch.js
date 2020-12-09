var Dog,HappyDog;
var database;
var foodS,foodStock;

function preload()
{
  DOG = loadImage("images/dogImg.png");
  HAPPYDOG = loadImage("images/dogImg1.png"); 
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
 Dog = createSprite(250,350,5,5);
  Dog.addImage(DOG);
  Dog.scale = 0.2;
}


function draw() {  
background(46, 139, 87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    Dog.addImage(HAPPYDOG);
  }
drawSprites();
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}