class Employee{
    constructor(name,id,email){
        let regex=/\S+@\S+\.\S+/;

        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        
        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }

        if (typeof email !== "string" || !email.trim().length|| !regex.test(email)) {
            throw new Error("Expected parameter 'email' to be a non-empty string with an @ sign and . address");
        }

        this.name=name;
        this.id=id;
        this.email=email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
}

module.exports=Employee;