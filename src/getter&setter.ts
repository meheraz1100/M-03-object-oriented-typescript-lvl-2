{

    // getter and setter
    
    class BankAccount {
        public readonly id: number;
        name: string;
        protected _balance: number;
    
    
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // setter
        set deposit(amount : number){
            this._balance = this._balance + amount;
        }
        
        
        // public addDeposit(amount : number){
        //     this._balance = this._balance + amount;
        // }
        
        // getter 
        get getBalance(){
            return this._balance
        }
        // public getBalance(){
        //     return this._balance;
        // }
    }
    
    
    
    const goribManusherAccount = new BankAccount(111, "mr. gorib", 20);
    
    // goribManusherAccount.deposit = 0
    // goribManusherAccount.addDeposit(2980);   //function call korte hocche
    goribManusherAccount.deposit = 50;



    // const myBalance = goribManusherAccount.getBalance() //function call korte hocche


    const myBalance = goribManusherAccount.getBalance;   // property er moto kore

    console.log(myBalance);
    
    
    
    
    
    
    
    
    
    
    
    
    }