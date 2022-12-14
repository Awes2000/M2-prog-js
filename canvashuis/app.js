class App
{
    runApplication()
    {
        console.log("Hello World!")
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10);
        console.log(canvas)
         //dak
         g.beginPath()
         g.fillStyle = "red"
         g.moveTo(150,50);
         g.lineTo(100,150);
         g.lineTo(300,200);
         g.lineTo(350,100);
         g.closePath();
         g.stroke();
         g.fill();
 
         //muren
         g.beginPath()
         g.fillStyle = "gray"
         g.moveTo(300,200);
         g.lineTo(100,150);
         g.lineTo(100,250);
         g.lineTo(300,300);
         g.lineTo(400,250);
         g.lineTo(400,150);
         g.lineTo(350,100);
         g.lineTo(300,200);
         g.closePath();
         g.stroke();
         g.fill();
 
         //raam
         g.beginPath()
         g.fillStyle = "blue"
 
         g.lineTo(120,245); //links onder
         g.lineTo(200,265); //rechts onder
         g.lineTo(200,200); //rechts boven
         g.lineTo(120,180); //lb
 
         g.closePath();
 
         g.closePath();
         g.stroke();
         g.fill();
 
    }

}
let app = new App();
app.runApplication();