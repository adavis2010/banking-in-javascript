class Savings {

    constructor(id, description,) {
        this.id = id;
        this.description = description;
        this.bal = 0;
    }

        deposit(amt){
        if (typeof amt !== "number") {
            console.error("Amount is not a number");
            return false;
        }

        if (amt <= 0) {
            console.error("Amount must be greater than zero");
            return false;
        }

        this.bal += amt;
        return true;
    }   

    withdraw(amt) {
        if (typeof amt !== "number") {
            console.error("Amount is not a number");
            return false;
        }
        if (amt <= 0) {
            console.error("Amount must be greater than zero");
            return false;
        }

        if (amt > this.bal) {
            console.error("INSUFFICIENT FUNDS!")
            return false

        }

        this.bal -= amt;
        return true;

    }

    transfer(amt, toAcct) {
        if (this.withdraw(amt)) {
            toAcct.deposit(amt)
            return true;
        }
        return false;
    }


}


let sav1 = new Savings(1, "Savings1");
sav1.deposit(1000.00);
sav1.withdraw(500.00);
console.log("sav1 bal is", sav1.bal);


let sav2 = new Savings(2, "Savings2");
sav2.deposit(500.00);
sav2.withdraw(250.00)
console.log("sav2 bal is", sav1.bal);

sav1.transfer(200, sav2)
console.log("sav1 bal is", sav1.bal)
console.log("sav2 is", sav2.bal)

sav1.deposit (-1)
