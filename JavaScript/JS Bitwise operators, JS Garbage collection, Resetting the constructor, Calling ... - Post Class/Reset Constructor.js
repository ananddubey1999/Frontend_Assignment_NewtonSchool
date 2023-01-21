function Animal(name, lifeSpan) {
  this.name = name;
  this.lifeSpan = lifeSpan;
}

function Reptile() {
  this.layEggs = function layEggs() {
    console.log("Reptile laid eggs.");
  };
}

Reptile.prototype = Object.create(Animal.prototype);
Reptile.prototype.constructor = Reptile;

/** Do not make changes in the above code. Start writing your code here. */
