//classes - way to define  blueprints for creating objects that are different from other objects defined in last section
class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log("color is");
             console.log(this.color);
    }
    
 }
 
 const rect = new Rectangle(2, 4,"red")//new means instance/object of rectangle class
 const area = rect.area();
 const rang = rect.paint();
 console.log(rang);
 console.log(area);