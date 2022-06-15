const Intern = require('../lib/Intern');

describe('Instantiation', () => {
    it('Name, ID, email and school should be instantiated by object', () => {
        let employee= new Intern('Tim',13,'string@string.com','UTOR')
        expect(employee.name).toEqual("Tim");
        expect(employee.id).toEqual(13)
        expect(employee.email).toEqual("string@string.com")
        expect(employee.school).toEqual('UTOR')
    });
    it('should not let the user send an invalid name.', ()=>{
        const cb=()=>new Intern(5,13,'string@string.com','UTOR')
        const err = new Error("Expected parameter 'name' to be a non-empty string");
        expect(cb).toThrow(err);
    });
    it('should not let the user send an invalid id.', ()=>{
        const cb=()=>new Intern('Tim',"13",'string@string.com','UTOR')
        const err =new Error("Expected parameter 'id' to be a non-negative number");
        expect(cb).toThrow(err);
    });
    it('should not let the user send an invalid Email.', ()=>{
        const cb=()=>new Intern('Tim',13,2,'UTOR')
        const err=new Error("Expected parameter 'email' to be a non-empty string with an @ sign and . address");
        expect(cb).toThrow(err);
    });
    it('should not let the user send an invalid officeNum', ()=>{
        const cb=()=>new Intern('Tim',13,'string@string.com',1)
        const err=new Error("Expected parameter school to be a non-empty string");
        expect(cb).toThrow(err);
    });
});

describe("Method functionality",()=>{
    it('Should return the proper name', ()=>{
        let employee1=new Intern('Tim',13,'string@string.com','UTOR')
        expect(employee1.getName()).toEqual('Tim');
    });
    it('Should return the proper ID', ()=>{
        let employee1=new Intern('Tim',13,'string@string.com','UTOR')
        expect(employee1.getId()).toEqual(13);
    });
    it('Should return the proper email', ()=>{
        let employee1=new Intern('Tim',13,'string@string.com','UTOR')
        expect(employee1.getEmail()).toEqual('string@string.com');
    });
    it('Should return the proper School', ()=>{
        let employee1=new Intern('Tim',13,'string@string.com','UTOR')
        expect(employee1.getSchool()).toEqual("UTOR");
    });
    it('Should return Intern when role is called', ()=>{
        let employee1=new Intern('Tim',13,'string@string.com','UTOR')
        expect(employee1.getRole()).toEqual('Intern');
    });
})