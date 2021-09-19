var inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');


console.log("**********************");
console.log("Welcome to Alphanzo Burgers");
console.log("Please login to continue");
console.log("**********************");


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"Name",
        message:"Enter Your UserName",
        name:"username"
    },
    
    {
        type:"password",
        message:"Enter Your password",
        mask:"*",
        name:"confirmPassword"
    },
    
   
  ])
  .then((userDetails) => {
    // Use user feedback for... whatever!!
    // * logic check your username and password are correct
    // do it here

console.log('welcome back',userDetails.username);

inquirer.prompt([
    {
        type:"confirm",
        name:"forDelivery",
        message:"Do you want the Burgers to be delivered",
        default: true
    },

    {
        type:"input",
        name:"address",
        message:"Enter Your Address"

    },
    {
        type:"input",
        name:"pincode",
        message:"Enter your pincode",
        validate(value2) {
            const pass2 = value2.length === 6;
            if(pass2) {
                return true;
            }
            return "Please Enter valid Pincode"
        }

    },


    {
        type:"input",
        name:"phone",
        message:"What is your phone number?",
        validate(value) {
            const pass = value.length === 10;
            if(pass) {
                return true;
            }
            return "please enter a valid phone Number"
        }
    },

    {
        type:"input",
        name:"qty",
        message:"How many Burgers do you need?",
        validate(value) {
            var valid = !isNaN(parseInt(value));
            return valid || "please enter a number";
        },
        filter(value){
            return parseInt(value)
        }
    },

    {
        type:"list",
        name:"Burgers",
        message:"please select your Burgers type",
        choices: [
            "chilli Burger with pepper Relish",
            "Perfect Lamb Satay Burger",
            "Lamb and Tomato Stuffed Burger"
        ],

        
    },

   

    {
        type:"list",
        name:"size",
        message:"please select your size",
        choices: [
            "SM",
            "M",
            "LG",
            "XLG"
        ],
        
    },
 

])
.then(answers=>{
    console.log("Order details are:");
    console.log(answers);
    console.log("username",userDetails.username);
})


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });