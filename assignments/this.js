/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding - in the global context, this is bound to the window.
* 2. Implicit binding - when using a dot operator, this refers to the object to the left of the dot.
* 3. New binding - when using the new keyword, this is bound to the new object that is created.
* 4. Explicit binding - By using .call or .apply, we can change the object being referenced. Thus, changing the this pointer as well.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const car = {
    greeting: 'This car is a ',

    carSpeak: function(make, model, year) {
        console.log(`${this.greeting} is a ${year} ${make} ${make}`);
    }
};

car.carSpeak('Toyota', 'Camry', 1998);



// Principle 3

// code example for New Binding

function Person(object) {
    this.name = object.name;
}

const louis = new Person({name: 'Louis'});

console.log(louis.name);

// Principle 4

// code example for Explicit Binding

//Humanoid.call(this, object);