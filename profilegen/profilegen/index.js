const inquirer = require('inquirer');
const Employee = require("./staff/employee");
const Engineer = require("./staff/engineer");
const Intern = require("./staff/intern");
const Manager = require("./staff/manager");
const genhtml = require("./htmlgen/generateHTML");

const employeeArray =[];

//fuction manager questions 
promptManager()

//user path
function promptContinue(){
    return inquirer.prompt([
        {
            type:"list",
            name: "job",
            choices: ["Engineer", "Intern", "placeholder"]
        },
    ])
.then((answers) =>{
    if (answers.job === "Engineer"){
        promptEngineer();
    } else if (answers.job === "Intern"){
        promptIntern();
    } else{
    //generate HTML by calling file and fuction
    genhtml.generateHTML(employeeArray);
        console.log ( "Your team!")
}
}) 
};

//mgr questions
function promptManager(){
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the name of the manager?"
        },
        {
            type: "input",
            name: "managerID",
            message: "Input manager's ID."
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Input manager's email."
        },
        {
        type: "input",
        name: "managerOffice",
        message: "Input manager's office number."
        },
    ])
    .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);
       
        employeeArray.push(manager)
        console.log("welcome to the team, manager")
        promptContinue();
    
      })
    };

//engr questions
function promptEngineer(){
    return inquirer.prompt([
        {
            type: "input",
            name: "engrName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engrID",
            message: "Input the engineer's ID."
        },
        {
            type: "input",
            name: "engrEmail",
            message: "Input the engineer's Email."
        },
        {
            type: "input",
            name: "engrGit",
            message: "Input the engineer's github username."
        },
    ])
    .then((answers) =>{
        const engineer = new Engineer(answers.engrName, answers.engrID, answers.engrEmail, answers.engrGit);
        employeeArray.push(engineer);
        console.log("Welcome to the team, engineer");
        promptContinue();
    })
};

//intern quesitions
function promptIntern(){
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: " What is the name of the intern"
        },
        {
            type: "input",
            name: "internID",
            message: " Input the interns ID."
        },
        {
            type: "input",
            name: "internEmail",
            message: " Input the interns Email."
        },
        {
            type: "input",
            name: "internSchool",
            message: " Input the interns school."
        },
        ])
        .then((answers) =>{
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            employeeArray.push(intern);
            console.log("Welcome to the team, intern");
            promptContinue();
        })
    };

