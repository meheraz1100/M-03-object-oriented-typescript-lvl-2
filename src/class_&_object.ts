{

// oop-- class
class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }


    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`)
    }
}


const dog = new Animal("German Shepard Bhai", "Dog", "Ghew Ghew");

const cat = new Animal("Persian", "cat", "Meow Meow");


cat.makeSound();









}