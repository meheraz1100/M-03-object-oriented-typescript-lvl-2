{

// static

class Counter {
    static count: number = 0;
    static increament(){
        return (Counter.count = Counter.count + 1);
    }
    static decreament (){
        return (Counter.count = Counter.count - 1);
    }
}

const instance1 = new Counter()
console.log(Counter.increament());  //1 --> Different Memory


const instance2 = new Counter()
console.log(Counter.increament());  //-2  --> Different Memory

const instance3 = new Counter();
console.log(Counter.increament());















}