var count = 10; //global var
var intervalidID;
var x = 150;
var y = 150;
var changex = 100;
var changey = 100;
var myAudio = document.getElementById('myAudio');

startButton.addEventListener('click', () => {
        // Play the audio when the button is clicked
        myAudio.play();
    });
//this function applies the start button controls to toggle off the stop and start the interval moving the image.
function start()
{
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

    intervalidID = setInterval(movingImage,700);// 1000 = # of ms before next moveImage
}
//this section stops the moving image and makes 
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

