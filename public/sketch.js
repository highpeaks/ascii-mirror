var video, prevVideo;
var vscale;

//var chars = ["$", "@", "B", "%", "8", "&", "W", "M", "#", "*", "o", "a", "h", "k", "b", "d", "p", "q", "w", "m", "Z", "O", "0", "Q", "L", "C", "J", "U", "Y", "X", "z", "c", "v", "u", "n", "x", "r", "j", "f", "t", "/", "|", "(", ")", "1", "{", "}", "[", "]", "?", "-", "_", "+", "~", "<", ">", "i", "!", "l", "I", ";", ":", "^", "`", "'", "."];

//var darks = ["$", "@", "B", "%", "8", "&", "W", "M", "#", "*", "o", "a", "h", "k", "b", "d", "p", "q", "w", "m", "Z", "O"];
//var mids = ["0", "Q", "L", "C", "J", "U", "Y", "X", "z", "c", "v", "u", "n", "x", "r", "j", "f", "t", "/", "|", "(", ")"];
//var lights = ["1", "{", "}", "[", "]", "?", "-", "_", "+", "~", "<", ">", "i", "!", "l", "I", ";", ":", "^", "`", "'", "."];

//var chars = [" ", ".", ":", "-", "=", "+", "*", "#", "%", "@"];


var darks = ["0", "%", "#", "&", "X", "@"];
var mids = ["|", "=", "+", "*", "/", "|"];
var lights = [",", ".", ":", "'", "-", ","];


var index = 0;


function setup() {
//	var c = createCanvas(640, 360);
    var c = createCanvas(windowWidth * 0.75, windowWidth * 0.75 * 0.5625);
    vscale = width / 50;
    c.parent("#canvas");
    pixelDensity(1);
    video = createCapture(VIDEO);
	video.size(width/vscale, height/vscale);
	video.hide();
}


function draw() {
    
    background(255);
        
    video.loadPixels();
    
    for (let y = 0; y < video.height; y++){
        for (let x = 0; x < video.width; x++){

            // index value for each pixel
            let i = (video.width - (x + 1) + (y * video.width)) * 4;

            // red channel value
            let r = video.pixels[i];

            let xp = x * vscale;
            let yp = y * vscale;
            
            let character = " ";
            
//            let index = i % 3;
            
            let index = Math.round(map(noise(i),0,1,0,5));

            if (r <= 33) {
                character = darks[index];
            }
            
            if (r > 33 && r <= 66) {
                character = mids[index];
            }
            
            if (r > 66 && r <= 99) {
                character = lights[index];
            } 
            
            if (r > 99) {
                character = " ";
            }
            
            textSize(vscale);
            textFont("Roboto Mono");
            text(character, xp, yp);
        }
    }
}