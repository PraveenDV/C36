class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("Play");
        this.greeting=createElement("h3");
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }


    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);
       
        this.input.position(130,150);
        
        this.button.position(250,200);

         
        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
        playerCount=playerCount+1;
        player.update();
        player.updateCount(playerCount);    
        this.greeting.html("Welcome "+player.name);
        this.greeting.position(130,160);
        })
    }
}