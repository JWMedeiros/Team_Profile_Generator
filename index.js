const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown=require("./src/generateMarkdown.js");

const Intern = require ('./lib/Intern')
const Engineer = require ('./lib/Engineer')
const Manager = require('./lib/Manager.js');
let wantMember='y'
let htmElements=[];

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the name of your team's manager?",
    },
    {
      type: 'input',
      name: 'empID',
      message: "Please enter the manager's employee ID.",
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the manager's email address (must include @ and .)",
    },
    {
      type: 'input',
      name: 'officeNum',
      message: "Please enter the manager's office phone number (just numbers)",
    },
    {
      type: 'input',
      name: 'addMember',
      message: "Would you like to add another team member?",
    },
  ]);
};

const whichMember=()=>{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'member',
      message: "Would you like to add an Engineer or Intern? (Please type one of the choices)",
    },
  ]);
}

const newMember=()=>{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'addMember',
      message: "Would you like to add another team member? (yes/no)",
    },
  ]);
}

const isIntern=()=>{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the name of your team's intern?",
    },
    {
      type: 'input',
      name: 'empID',
      message: "Please enter the intern's employee ID.",
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the intern's email address (must include @ and .)",
    },
    {
      type: 'input',
      name: 'school',
      message: "Please enter the interns school",
    },
  ]);
}

const isEngineer = ()=>{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the name of your team's engineer?",
    },
    {
      type: 'input',
      name: 'empID',
      message: "Please enter the engineer's employee ID.",
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the engineer's email address (must include @ and .)",
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter the engineer's github username",
    },
  ]);
}

const processEmployee=()=>{
  return whichMember()
  .then((data2)=>{
  if (data2.member.toLowerCase()==='intern'){
    return isIntern()
    .then((data3)=>{
    wantMember=data3.addMember;
    //Destructure and create intern
    const {name, empID, email,school}=data3;
    let intern= new Intern(name,parseInt(empID),email,school);
    //Send intern to addmember fn
    htmElements.push(intern);
    return newMember();
    })
  }
  else if (data2.member.toLowerCase()==='engineer'){
    return isEngineer()
    .then((data3)=>{
      //Change While cond
      wantMember=data3.addMember;
      //Destructure and create intern
      const {name, empID, email,github}=data3;
      let engineer= new Engineer(name,parseInt(empID),email,github);
      //Send intern to addmember fn
      htmElements.push(engineer);
      return newMember();
    })
  }
  else{
    console.log("You didn't enter a proper choice!")
  }
  })
}
  

const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => {
      let mgr = new Manager(answers.name,parseInt(answers.empID),answers.email,parseInt(answers.officeNum))
      wantMember=answers.addMember;
      htmElements.push(mgr)
      if(wantMember==='n'||wantMember==='no'){
        fs.writeFileSync('./dist/index.html', generateMarkdown(htmElements))
      }
      else{
        return addEmployee();
      }
    })
    .catch((err) => console.error(err));
};

// Function call to initialize app
function addEmployee(){
  return processEmployee()
  .then((answers)=>{
    wantMember=answers.addMember
    if (wantMember==='n'||wantMember==='no'){
      console.log(htmElements)
      fs.writeFileSync('./dist/index.html', generateMarkdown(htmElements))
    }
    else{
      return addEmployee();
    }
  })
}
init();