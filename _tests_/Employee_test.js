const { describe } = require('yargs');
const Employee = require('../lib/Employee');

describe('Instantiation', () => {
    it('Name, ID and email should be instantiated by object', () => {
        let employee= new Employee('Tim',13,'string@string.com')
        expect(employee.name).toEqual("Tim");
        expect(employee.id).toEqual(13)
        expect(employee.email).toEqual("string@string.com")
    });
    it('should not let the user send an invalid name.', ()=>{
        let employee1=new Employee(13,13,'String@string.com')
        expect(employee1).toThrow();
    });
    it('should not let the user send an invalid id.', ()=>{
        let employee2= new Employee('Tim','Jim','Strig@string.com')
        expect(employee2).toThrow();
    });
    it('should not let the user send an invalid Email.', ()=>{
        let employee3= new Employee('Tim',13,'sdfafd')
        expect(employee3).toThrow();
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