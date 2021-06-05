//Create variables here
var dog,sadDog,happyDog,database;
var foods,foodStock;

var addFood;
var foodObj;

var feed,lastFed;

function preload(){

	sadDog=loadImage("Dog.png");
  happyDog=loadImage("Happydog.png")



}

function setup() {
	createCanvas(1000, 400);
  database=firebase.database();

  foodObj = new Food();

  foodStock = database.ref('food');
  foodStock.on("value,readStock");

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("add food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);


  
}


function draw() {  
  background(45,140,85)
foodObj.display();

fedTime = database.ref('feedTime');
fedTime.on("value",function(data){
  lastFed = data.val();
})

fill (255,255,254);
textSize (15);
if(lastFed>=12){
  text("last Feed:"+lastFed%12+"PM",350,30);
}
else if (lastFed == 0){
  text("Last Feed:12AM",350,30);
}
else{
  text ("Last Feed:"+lastFed+"AM",350,30);
}








  drawSprites();


}



