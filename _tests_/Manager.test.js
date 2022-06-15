const Manager = require('../lib/Manager');

describe('Instantiation', () => {
    it('Name, ID, email and officeNum should be instantiated by object', () => {
        let employee= new Manager('Tim',13,'string@string.com',9054675555)
        expect(employee.name).toEqual("Tim");
        expect(employee.id).toEqual(13)
        expect(employee.email).toEqual("string@string.com")
        expect(employee.officeNum).toEqual(9054675555)
    });
    it('should not let the user send an invalid name.', ()=>{
        const cb=()=>new Manager(1,13,'string@string.com',9054675555)
        const err = new Error("Expected parameter 'name' to be a non-empty string");
        expect(cb).toThrow(err);
    });
    it('should not let the user send an invalid id.', ()=>{
        const cb=()=>new Manager('Tim','13','string@string.com',9054675555)
        const err =new Error("Expected parameter 'id' to be a non-negative number");
        expect(cb).toThrow(err);
    });
    it('should not let the user send an invalid Email.', ()=>{
        const cb=()=>new Manager('Tim',13,5,9054675555)
        const err=new Error("Expected parameter 'email' to be a non-empty string with an @ sign and . address");
        expect(cb).toThrow(err);
    });
    it('should not let the user send an invalid officeNum', ()=>{
        const cb=()=>new Manager('Tim',13,'string@string.com',"9054675555")
        const err=new Error("Expected parameter office number to be a non empty number");
        expect(cb).toThrow(err);
    });
});

describe("Method functionality",()=>{
    it('Should return the proper name', ()=>{
        let employee1=new Manager('Tim',13,'string@string.com',9054675555)
        expect(employee1.getName()).toEqual('Tim');
    });
    it('Should return the proper ID', ()=>{
        let employee1=new Manager('Tim',13,'string@string.com',9054675555)
        expect(employee1.getId()).toEqual(13);
    });
    it('Should return the proper email', ()=>{
        let employee1=new Manager('Tim',13,'string@string.com',9054675555)
        expect(employee1.getEmail()).toEqual('string@string.com');
    });
    it('Should return the proper Officenumber', ()=>{
        let employee1=new Manager('Tim',13,'string@string.com',9054675555)
        expect(employee1.getNumber()).toEqual(9054675555);
    });
    it('Should return Manager when role is called', ()=>{
        let employee1=new Manager('Tim',13,'string@string.com',9054675555)
        expect(employee1.getRole()).toEqual('Manager');
    });
})