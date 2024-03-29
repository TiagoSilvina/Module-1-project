class Cloud {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
  
      // Random Position
      this.top = Math.floor(Math.random() * 288 );
  
      this.left = 822;
      this.width = 125;
      this.height = 125;
  
      // create the HTML element and create default styling
      this.element = document.createElement("img");
      this.element.src = "./docs/images/mine.png";
      this.element.style.position = "absolute";
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
  
      this.gameScreen.appendChild(this.element);
    }
  
    move() {
      // Move obstacle down
      this.left -= 2;
  
      this.updatePosition();
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  }
  