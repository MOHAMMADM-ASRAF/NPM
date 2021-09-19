var inquirer = require('inquirer');


console.log("**********************");
console.log("Welcome to my Name");
console.log("Please register to continue");
console.log("**********************");


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"Name",
        message:"Enter Your Name",
        name:"username"
    },
    {
        type:"password",
        message:"Enter Your password}",
        name:"Password"
    },
    {
        type:"password",
        message:"Retype Your password",
        mask:"*",
        name:"confirmPassword"
    },
    
    {
        type:"number",
        message:"Enter Your number",
        name:"userNumber",
    },
    {
        type:"checkbox",
        message:"choose Your Smartphone",
        choices:["iphone11","iphone12","iphone13"],
        name:"UserChoice",
    },

    {
        type:"confirm",
        message:"Please confirm your order",
        name:"userAnswer",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });