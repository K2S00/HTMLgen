const fs = require('fs');

var htmlText =  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style/style.css">
    <script src="https://kit.fontawesome.com/44e3c48f9c.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri&family=Montserrat&family=Oxygen&family=Prompt:ital,wght@1,300&family=Teko&display=swap" rel="stylesheet">
    
    <title>Team Generator</title>
</head>
<body>
    <header>
    <i class="fas fa-briefcase"></i> My Team  
    </header>
    
<div class="row row-cols-1 row-cols-md-2">\n`


//creating new cards
const generateHTML = (employeeArray) => {
//loop through employee array and create a card


employeeArray.forEach(element => {
    htmlText += ` <div class="col mb-4">
    <div class="card">
      <div class="card-header">
            ${element.getName()} <br>\n`
            if(element.getRole() === "Manager"){
            htmlText += `<i class="fal fa-pen-alt"></i>`
            } else if(element.getRole() === "Engineer"){
                htmlText += `<i class="fal fa-mug-hot"></i>`
            } else if(element.getRole() === "Intern"){
                htmlText += `<i class="fal fa-graduation-cap"></i>`
            }
            htmlText += ` ${element.getRole()}
      </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${element.getId()}</li>
                <li class="list-group-item">Email:<a href = "mailto: ${element.getEmail()}"> ${element.getEmail()}</a></li>\n`
                if(element.getRole() === "Manager"){
                    htmlText += `<li class="list-group-item">Office Number: ${element.getOfficeNumber()}</li>\n`
                } else if(element.getRole() === "Engineer"){
                    htmlText += `<li class="list-group-item">GitHub Username: <a href="https://github.com/${element.getGitHub()}" target="_blank">${element.getGitHub()}</a></li>\n`
                } else if(element.getRole() === "Intern"){
                    htmlText += `<li class="list-group-item">School: ${element.getSchool()}</li>\n`
                }
                htmlText += `</ul></div></div></div>\n`
});

htmlText += `</div></body></html>` 

fs.writeFileSync('./html/index.html', htmlText);

console.log("Your team information is up and running , Team html can be found in the html folder in the 'index.html' file.")

}



module.exports = {
    generateHTML,
};


