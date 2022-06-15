const Employee = require('../lib/Employee');

describe('Instantiation', () => {
    it('Name, ID and email should be instantiated by object', () => {
        let employee= new Employee('Tim',13,'string@string.com')
        expect(employee.name).toEqual("Tim");
        expect(employee.id).toEqual(13)
        expect(employee.email).toEqual("string@string.com")
    });
    it('should not let the user send an invalid name.', ()=>{
        const cb=()=>new Employee(13,13,'String@string.com')
        const err = new Error("Expected parameter 'name' to be a non-empty string");
        expect(cb).toThrow(err);
    });
    it('should not let the user send an invalid id.', ()=>{
        const cb=()=> new Employee('Tim','Jim','Strig@string.com')
        const err =new Error("Expected parameter 'id' to be a non-negative number");
        expect(cb).toThrow(err);
    });
    it('should not let the user send an invalid Email.', ()=>{
        const cb=()=> new Employee('Tim',13,'sdfafd')
        const err=new Error("Expected parameter 'email' to be a non-empty string with an @ sign and . address");
        expect(cb).toThrow(err);
    });
});

describe("Method functionality",()=>{
    it('Should return the proper name', ()=>{
        let employee1=new Employee('Tim',13,'String@string.com')
        expect(employee1.getName()).toEqual('Tim');
    });
    it('Should return the proper ID', ()=>{
        let employee1=new Employee('Tim',13,'String@string.com')
        expect(employee1.getId()).toEqual(13);
    });
    it('Should return the proper email', ()=>{
        let employee1=new Employee('Tim',13,'String@string.com')
        expect(employee1.getEmail()).toEqual('String@string.com');
    });
    it('Should return Employee when role is called', ()=>{
        let employee1=new Employee('Tim',13,'String@string.com')
        expect(employee1.getRole()).toEqual('Employee');
    });
})