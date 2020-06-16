//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming. 
// The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  
//Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

//your code here...
class WhyClass {
    constructor(purpose) {

        this.purpose = purpose;
    }
    explain(purpose) {
        console.log(purpose);
    }
    pieces() {
        console.log('The important pieces of a class are the contructor, getters, setters, methods and attributes.')
    }



}

let example = new WhyClass("a class is a blueprint for creating objects (a particular data structure), providing initial values for state (member variables or attributes), and implementations of behavior (member functions or methods). The user-defined objects are created using the class keyword.");

example.explain(example.purpose);
example.pieces();


/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  
//To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  
//Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */


//your code here...
class Mammal {
    constructor(name, color, food, transit, noise) {
        name;
        color;
        food;
        transit;
        noise;
    }
    move(transit) {
        console.log(`${transit} is how I get from place to place`)
    }
    saySound(noise) {
        console.log(`I go ${noise} !!!! `)
    }

}
let dolphin = new Mammal("Amazon River dolphin", "pink", "fish", "swimming", "muaauuauau");
let capybara = new Mammal("Capybara", "brown", "grass", "burrowing", "nonknonk");
let armadillo = new Mammal("Giant Armadillo", "gray", "insects", "burrowing", "neek neek");
let otter = new Mammal("Giant River Otter", "brown", "fish", "swimming", "cheecheechee");
let jaguar = new Mammal("Jaguar", "Gold and Black", "the other mammals in this list", "stalking", "silence");
let bat = new Mammal("Lophostoma Yasuni Bat", "black", "insects", "flying", "flipflap");



/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
*/


class Shape {
    //your code here...
    constructor(name, sides, base, height, area, length, width) {
        this.name = name;
        this.sides = sides;
        this.base = base;
        this.height = height;
        this.area = area;
        this.length = length;
        this.width = width;
    }


}
class Triangle extends Shape {
    constructor(name, sides, base, height, area) {
        super(name, sides, base, height, area);
    }


    HeronsCalc() {
        let heronsStart = this.sides.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        let variableS = heronsStart / 2;
        let triangleArea = Math.sqrt(variableS * ((variableS - this.sides[0]) * (variableS - this.sides[1]) * (variableS - this.sides[2])));
        let triangleHeight = 2 * (triangleArea / this.sides[0]);
        this.height = triangleHeight;
        this.base = this.sides[0];
        this.area = triangleArea;

    }
}

triangle = new Triangle("triangle", [4, 7, 7], null, null);

triangle.HeronsCalc();


shape = new Shape("triangle", [4, 7, 7], 8, 8);
console.log(`The triangles area is ${triangle.area}`);
console.log(`The triangles heigh is ${triangle.height}`);

class Rectangle extends Shape {
    constructor(name, sides, base, height, area, length, width) {
        super(name, sides, base, height, area, length, width);
    }
    calcArea() {
        let area = this.length * this.width;


        this.area = area;

    }
    calcPerimeter() {
        console.log(`The perimeter is ${(2 * this.length) + (2 * this.width)}`)
    }

}
let rectangle = new Rectangle("rectangle", 4, null, null, null, 2, 5);

rectangle.calcArea();
rectangle.calcPerimeter();
console.log(`The area of the rectangle is ${rectangle.area}`);

class Circle extends Shape {
    constructor(name, sides, base, height, area, length, width, radius) {
        super(name, sides, base, height, area, length, width);
        this.radius = radius;
    }
    calcArea() {
        console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius ** 2).toFixed(2)}`);
    }
    calcCircumference() {
        console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
    }

}

let circle = new Circle("circle", 1, null, null, null, null, null, 5)

console.log(circle);
circle.calcCircumference();
circle.calcArea();

// const circle = {
//     name: "circle",
//     sides: 1,
//     radius: 5,
//     calcArea: function () {
//         console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius ** 2).toFixed(2)}`);
//     },
//     calcCircumference: function () {
//         console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
//     }
// }

console.log(circle);
circle.calcCircumference();
circle.calcArea();


/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.
//see triangle formula

//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

*/

class Earth {
    name;
    planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

    constructor(name, num) {
        this.name = name;
        this.planetNum = num;
    }

}

const earth = new Earth('earth', 3);
console.log(earth);




