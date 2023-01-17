class App {
  runApplication() {
    console.log("Hello World!");
    //window.onload// functie voor snow effect, nog geen oplossing gevonden voor toepassing
    let canvas = document.getElementById("canvasId");
    let g = canvas.getContext("2d");
    console.log(canvas);
    g.font = "bold 40px Mountains of Christmas";
    g.fillText("I wish you all a Merry Christmas! Ho-Ho-Hooooo!", 40, 500);

    this.tekenHuis(g, 10, 10);
    this.tekenHuis(g, 450, 100);
    this.tekenHuis(g, 850, 50);
    //1e boom start
    this.drawTriangle(g, 1500, 80);
    this.drawTriangle(g, 1500, 150);
    this.drawTriangle(g, 1500, 220);
    //einde

    //2e boom start
    this.drawTriangle(g, 1250, 80);
    this.drawTriangle(g, 1250, 150);
    this.drawTriangle(g, 1250, 220);
    //einde

    //3e boom start
    this.drawTriangle(g, 1250, 500);
    this.drawTriangle(g, 1250, 570);
    this.drawTriangle(g, 1250, 640);
    //einde

    //4e boom start
    this.drawTriangle(g, 1500, 500);
    this.drawTriangle(g, 1500, 570);
    this.drawTriangle(g, 1500, 640);

    this.LetItSnow(g);
  }

  //maak driehoek

  drawTriangle(g, x, y) {
    g.fillStyle = "green";

    g.beginPath();

    g.moveTo(30 + x, 120 + y);

    g.lineTo(130 + x, 20 + y);

    g.lineTo(230 + x, 120 + y);

    g.fill();

    g.fillStyle = "brown";
    g.fillRect(1610, 340, 40, 100);
    g.fillRect(1355, 340, 40, 100);
    g.fillRect(1360, 760, 40, 100);
    g.fillRect(1610, 760, 40, 100);
  }

  tekenHuis(g, x, y) {
    //dak
    g.beginPath();
    g.fillStyle = "red";
    g.moveTo(150 + x, 50 + y);
    g.lineTo(100 + x, 150 + y);
    g.lineTo(300 + x, 200 + y);
    g.lineTo(350 + x, 100 + y);
    g.closePath();
    g.stroke();
    g.fill();

    //muren
    g.beginPath();
    g.fillStyle = "gray";
    g.moveTo(300 + x, 200 + y);
    g.lineTo(100 + x, 150 + y);
    g.lineTo(100 + x, 250 + y);
    g.lineTo(300 + x, 300 + y);
    g.lineTo(400 + x, 250 + y);
    g.lineTo(400 + x, 150 + y);
    g.lineTo(350 + x, 100 + y);
    g.lineTo(300 + x, 200 + y);
    g.closePath();
    g.stroke();
    g.fill();

    //raam
    g.beginPath();
    g.fillStyle = "blue";

    g.lineTo(120 + x, 245 + y); //links onder
    g.lineTo(200 + x, 265 + y); //rechts onder
    g.lineTo(200 + x, 200 + y); //rechts boven
    g.lineTo(120 + x, 180 + y); //lb

    g.closePath();

    g.closePath();
    g.stroke();
    g.fill();
  }

  //maak-text

  //animatie om te laten sneeuwen

  LetItSnow(g, draw, update, setInterval) {
    //canvas dimensions
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    //snowflake particles
    let mp = 50; //max particles
    let particles = [];
    for (let i = 0; i < mp; i++) {
      particles.push({
        x: Math.random() * W, //x-coordinate
        y: Math.random() * H, //y-coordinate
        r: Math.random() * 4 + 1, //radius
        d: Math.random() * mp, //density
      });
    }

    //Lets draw the flakes
    draw();
    {
      g.clearRect(0, 0, W, H);

      g.fillStyle = "rgba(255, 255, 255, 0.8)";
      g.beginPath();
      for (let i = 0; i < mp; i++) {
        let p = particles[i];
        g.moveTo(p.x, p.y);
        g.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      g.fill();
      update();
    }

    //Function to move the snowflakes
    //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
    let angle = 0;
    update();
    {
      angle += 0.01;
      for (let i = 0; i < mp; i++) {
        let p = particles[i];
        //Updating X and Y coordinates
        //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
        //Every particle has its own density which can be used to make the downward movement different for each flake
        //Lets make it more random by adding in the radius
        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
        p.x += Math.sin(angle) * 2;

        //Sending flakes back from the top when it exits
        //Lets make it a bit more organic and let flakes enter from the left and right also.
        if (p.x > W + 5 || p.x < -5 || p.y > H) {
          if (i % 3 > 0) {
            //66.67% of the flakes
            particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
          } else {
            //If the flake is exitting from the right
            if (Math.sin(angle) > 0) {
              //Enter from the left
              particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d };
            } else {
              //Enter from the right
              particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
            }
          }
        }
      }
    }

    //animation loop
    setInterval(draw, 33);
  }
}

let app = new App();
app.runApplication();
