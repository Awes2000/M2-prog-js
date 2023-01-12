class Dino
{
    constructor(naam, vleeseeter, leeftijd)
    {
        this.naam = naam;
        this.vleeseeter = true;
        this.leeftijd = 50
    }
}

class App
{
    runApplication()
    {
        let trex = new Dino("Trex", true, 10);
        console.log(trex);
    }
}

let app = new App();
app.runApplication();