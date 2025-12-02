var count = 10; //global var
var intervalidID;
var x = 150;
var y = 150;
var changex = 100;
var changey = 100;

//this function applies the start button controls and condition so both can't be pressed at the same time

function start()
{
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
//sets the rate of movement to .7s
    intervalidID = setInterval(movingImage,700);// 1000 = # of ms before next moveImage
}
//this section stops the moving image and makes it so you have to click start to move it again. 
function stop()
{
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;   

    clearInterval(intervalidID)
}

function countdown()
{
    document.getElementById("countDown").innerHTML = count;
    count --; // equal to count - 1

}
// this section moves the image around
function movingImage()
{
    var image= document.getElementById("memeImage")
    image.style.top = x + "px";
    image.style.left = y + "px";
    
    
    if (x + image.width> window.innerWidth || x <=0)// hit bottom or top of window
    {

    changex = -changex;
    }
    if (y + image.height > window.innerHeight || y <=0)
    {
        changey = -changey;
    }
    x +=changex;
    y +=changey;
   
}

