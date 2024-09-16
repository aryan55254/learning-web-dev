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
             const color = this.color;
             return color;
    }
    
 }
 
 const rect = new Rectangle(2, 4,"red");//new means instance/object of rectangle class
 const area = rect.area();
 const rang = rect.paint();
 
 console.log(area);
console.log(rang);
 const rect2 = new Rectangle(3,4,"yellow");
 const area2 = rect2.area();
 const rang2 = rect2.paint();
 console.log(area2);
 console.log(rang2);