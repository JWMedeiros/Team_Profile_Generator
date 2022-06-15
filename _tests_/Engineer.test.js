const Engineer = require('../lib/Engineer');

describe('Instantiation', () => {
    it('Name, ID, email and github should be instantiated by object', () => {
        let employee= new Engineer('Tim',13,'string@string.com','myGithub')
        expect(employee.name).toEqual("Tim");
        expect(employee.id).toEqual(13)
        expect(employee.email).toEqual("string@string.com")
        expect(employee.github).toEqual("myGithub")
    });
    it('should not let the user send an invalid name.', ()=>{
        const cb=()=>new Engineer(13,13,'String@string.com',"myGithub")
        const err = new Error("Expected parameter 'name' to be a non-empty string");
        expect(cb).toThrow(err);
    });
    it('should not let the user send an invalid id.', ()=>{
        const cb=()=>new Engineer('Jeff',-3,'String@string.com',"myGithub")
        const err =new Error("Expected parameter 'id' to be a non-negative number");
        expect(cb).toThrow(err);
    });
    it('should not let the user send an invalid Email.', ()=>{
        const cb=()=>new Engineer('John',13,34,"myGithub")
        const err=new Error("Expected parameter 'email' to be a non-empty string with an @ sign and . address");
        expect(cb).toThrow(err);
    });
    it('should not let the user send an invalid github', ()=>{
        const cb=()=>new Engineer('John',13,'string@string.ca',5)
        const err=new Error("Expected parameter github to be a non-empty string");
        expect(cb).toThrow(err);
    });
});

describe("Method functionality",()=>{
    it('Should return the proper name', ()=>{
        let employee1=new Engineer('John',13,'String@string.ca',"myGithub")
        expect(employee1.getName()).toEqual('John');
    });
    it('Should return the proper ID', ()=>{
        let employee1=new Engineer('John',13,'String@string.ca',"myGithub")
        expect(employee1.getId()).toEqual(13);
    });
    it('Should return the proper email', ()=>{
        let employee1=new Engineer('John',13,'String@string.ca',"myGithub")
        expect(employee1.getEmail()).toEqual('String@string.ca');
    });
    it('Should return the proper Github', ()=>{
        let employee1=new Engineer('John',13,'String@string.ca',"myGithub")
        expect(employee1.getGithub()).toEqual('myGithub');
    });
    it('Should return Engineer when role is called', ()=>{
        let employee1=new Engineer('Tim',13,'String@string.com','sadfasf')
        expect(employee1.getRole()).toEqual('Engineer');
    });
})