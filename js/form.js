class Form {
    constructor(){
        this.title = createElement('h2')
        this.greeting = createElement('h2')
        this.input = createInput('').attribute("placeholder", "name");
        this.button = createButton("play");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }
    display(){
  
    this.title.html('Car Race');
    this.title.position(displayWidth/2-20,0);
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);
    this.button.mousePressed(()=>{
       this.input.hide();
      this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index=playerCount
        player.update();
        player.updateCount(playerCount);
        this.greeting.html('Welcome'+ player.name);
        this.greeting.position(displayWidth/2-70,displayHeight/4);
    })

    }
}