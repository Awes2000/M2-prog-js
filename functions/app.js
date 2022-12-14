class App
{
    runApplication()
    {
        console.log(this.TelOp(20,20));
        this.RoepMario();
        let schreeuw = this.SchreeuwHier();
        console.log(schreeuw)
        this.TelOp();
        this.MijnNaam();
        this.tekenKerstBoom();
    }
    RoepMario()
    {
        console.log("MARIOOO")
    }

    SchreeuwHier()
    {
        return "BWHAHAHAHAH";
    }

    TelOp(a,b)
    {
        let resultaat = a + b;
        return resultaat
    }

    MijnNaam()
    {
        console.log("Awes Zoretic!")
    }

    tekenKerstBoom(g,x,y)
    {

    }


}


let app = new App();
app.runApplication();

