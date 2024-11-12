{

// oop inheritence

class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numberOfHours : number){
        console.log(`${this.name} will sleep for ${numberOfHours} Hours`);
    }
} 

class Student extends Person {
    constructor(name: string, age: number, address: string){
        super(name, age, address)
    }

}

const student1 = new Student('Mr. Student ', 20, 'Uganda')

student1.getSleep(20)


class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string){
        super(name, age, address)
        this.designation = designation;
    }

    takeClass(numOfClass : number){
        console.log(`${this.name} will take ${numOfClass} Classes`);
    }

}
const teacher1 = new Teacher('Mr. Teacher ', 40, 'Uganda', 'Principle')













}