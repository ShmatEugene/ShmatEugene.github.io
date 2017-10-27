

var ctx;
var imgBg;
var imgDrops;
var x = 0;
var y = 0;
var noOfDrops = 12;
var fallingDrops = [];
var imageArr = ['Images/take-away.png', 'Images/bottle4.png', 'Images/bottle2.png', 'Images/bottle5.png', 'Images/bottle6.png', 'Images/coffeeR.png', 'Images/newspaper-folded.png'];
var rand = Math.floor(Math.random() * imageArr.length);





    function drawBackground(){  
        ctx.drawImage(imgBg, 0, 0); //Background
        ctx.canvas.width  = window.innerWidth / 2;
        ctx.canvas.height = window.innerHeight;
    }

    function draw() {
        
        drawBackground();
        
        for (var i=0; i< noOfDrops; i++)
        {
        ctx.drawImage (fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y); //The rain drop
            
        fallingDrops[i].y += fallingDrops[i].speed; //Set the falling speed
        if (fallingDrops[i].y > 980) {  //Repeat the raindrop when it falls out of view
        fallingDrops[i].y = -250 //Account for the image size
        fallingDrops[i].x = Math.random() * 600;    //Make it appear randomly along the width    
        }
        
        }
    }

    function setup() {
        var canvas = document.getElementById('canvasRegn');
        
        
        if (canvas.getContext) {
                ctx = canvas.getContext('2d');
                
            
                    imgBg = new Image();
            imgBg.src = "Images/bg.png";
        setInterval(draw, 30);
        for (var i = 0; i < noOfDrops; i++) {
            var fallingDr = new Object();
            fallingDr["image"] =  new Image();
            rand = Math.floor(Math.random() * imageArr.length);
            fallingDr.image.src = imageArr[rand];
              
            fallingDr["x"] = Math.random() * window.innerWidth / 2;
            fallingDr["y"] = Math.random() * 960;
            fallingDr["speed"] = 0.7 + Math.random() * 3;
            fallingDrops.push(fallingDr);
            
            }

        }
    }





setup();

