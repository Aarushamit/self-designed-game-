class enemy {

    constructor(x, y) {
      this.x = x; 
      this.y = y;
      this.width = 50;
      this.height = 50;  

     
      
      this.image1 = loadImage("spaceship1.jpg");
      this.image2 = loadImage("spaceship2.jpg");
      this.image3 = loadImage("spaceship3.jpg");
      
      
    }

    display() {
       // rect(this.x, this.y, 50, 50); 
       // rectMode(CENTER); 
        image(enemy1_img, 100, 40, 80, 80);
        image(enemy2_img, 300, 40, 80, 80);
        image(enemy3_img,200, 40, 80, 80);
        
       

        
    }

}