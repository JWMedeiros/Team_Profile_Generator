const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
let addHTML=''

function generateMarkdown(data) {
    for (let i =1;i<data.length;i++){
        if (data[i].getRole()==='Engineer'){
            addHTML+=`<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${data[i].getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${data[i].getRole()}</h6>
                <p class="card-text">${data[i].getId()}</p>
                <a href="mailto: ${data[i].getEmail()}" class="card-link">${data[i].getEmail()}</a>
                <a href = "https://github.com/${data[i].getGithub()}" class="card-link">${data[i].getGithub()}</a>
            </div>
        </div>`
        }
        else if (data[i].getRole()==='Intern'){
            addHTML+=`<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${data[i].getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${data[i].getRole()}</h6>
                <p class="card-text">${data[i].getId()}</p>
                <a href="mailto: ${data[i].getEmail()}" class="card-link">${data[i].getEmail()}</a>
                <p class="card-text">${data[i].getSchool()}</p>
            </div>
        </div>`
        }
    }

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Team Generator</title>
    </head>

    <body>
        <div class="jumbotron jumbotron-fluid">
                <div class="container" id="employee-container">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${data[0].getName()}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${data[0].getRole()}</h6>
                            <p class="card-text">${data[0].getId()}</p>
                            <a href="mailto: ${data[0].getEmail()}" class="card-link">${data[0].getEmail()}</a>
                            <p class="card-text">${data[0].getNumber()}</p>
                        </div>
                    </div>
                    ${addHTML}
                </div>
            </div>
            <script src="../src/addMember.js"></script>
        </body>
    </html>`
}
  
module.exports = generateMarkdown;