function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    if (read) {
      return `${title} by ${author}, ${pages} pages, has been read`;
    } else {
      return `${title} by ${author}, ${pages} pages, has not been read`;
    }
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", 304, true);

console.log(theHobbit.info());

function Plant() {
  this.country = "Mexico";
  this.isOrganic = true;
}

// Add the showNameAndColor method to the Plant prototype property
Plant.prototype.showNameAndColor = function () {
  console.log("I am a " + this.name + " and my color is " + this.color);
};

// Add the amIOrganic method to the Plant prototype property
Plant.prototype.amIOrganic = function () {
  if (this.isOrganic) console.log("I am organic, Baby!");
};

function Fruit(fruitName, fruitColor) {
  this.name = fruitName;
  this.color = fruitColor;
}

// Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
Fruit.prototype = new Plant();

// Creates a new object, aBanana, with the Fruit constructor
var aBanana = new Fruit("Banana", "Yellow");

// Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
console.log(aBanana.name); // Banana

// Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.
