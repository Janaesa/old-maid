let sprite1;
let sprite2;
let sprite3;
let maidImg, mannyImg, paintImg;
let maid, manny, paint;



function preload() {

	maidImg = loadImage("assets/maid.png");
	mannyImg = loadImage("assets/manny.png");
	paintImg = loadImage("assets/paint.png");
	//new Canvas(windowWidth, windowHeight);
	//displayMode('centered');

}

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Create the sprites here
    sprite1 = createSprite(900, 700, 255, 370);
    sprite2 = createSprite(1200, 700, 255, 370);
    sprite3 = createSprite(1500, 700, 255, 370);

	//image 1
	maid = new Sprite();	
	//maid.img = maidImg;
	//maid.position = createVector(1000,400);

	//image 2
	paint = new Sprite();
	//paint.img = paintImg;
	
    //image 3
	manny = new Sprite();


}

function draw() {

	background('skyblue');
	

	if (sprite1.mouse.hovering()) {
	   maid.img = maidImg;
	   maid.position = createVector(900,400);
		//image(maid, 1000, 400);
		text("You lose!", 500, 200);
		textSize(100);	

	} else {
		text("Old Maid", 500, 200);

	}
		
	if (sprite2.mouse.hovering()) {
       paint.img =paintImg;
	   paint.position = createVector(1200,400);
	   

	}

	if (sprite3.mouse.hovering()) {
		manny.img = mannyImg;
		manny.position = createVector(1500,400);
 
}
	
		//ball.speed = 10;
		//ball.moveTo(mouse);
}
