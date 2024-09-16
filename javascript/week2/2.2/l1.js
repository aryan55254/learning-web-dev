//classes - way to define  blueprints for creating objects that are different from other objects defined in last section
class Rectangle {//with class
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
 
 const Rect = new Rectangle(2, 4,"red");//new means instance/object of rectangle class
 const area = Rect.area();
 const rang = Rect.paint();
 
 console.log(area);
console.log(rang);
 