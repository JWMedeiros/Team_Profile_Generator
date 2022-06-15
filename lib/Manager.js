const Employee =require('./Employee');

class Manager extends Employee{
    constructor(name,id,email,officeNum){
        super(name,id,email);

        if (typeof officeNum !== "number" || isNaN(officeNum) || officeNum < 0) {
            throw new Error("Expected parameter office number to be a non empty number");
        }
        this.officeNum =officeNum;
    }
    getNumber(){
        return this.officeNum;
    }
    getRole(){
        return 'Manager'
    }
}

module.exports=Manager;