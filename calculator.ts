#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
// const sleep =()=>{
//     return new Promise((res) => {
//         setTimeout(res,2000);    
//     })
   
// }
// async function welcome() {
//     let rainbowTitle = await chalkAnimation.rainbow(`welcome to my calculator`);  }
//     await sleep();

// await welcome();
async function askquestion(){ 
    var answers=await inquirer.prompt([{
    message:"choose an operator", 
    type:"list",
    name:"operator",
   choices:["+","-","/","*"]
 },
    {
    type: "number",   
    name: "num1",
   message: "Enter your 1st number:"},
    {  
         type: "number",
        name: "num2",
        message: "Enter your 2nd number:"
    }
])
    if (answers.operator=="+"){
        let sum=answers.num1+answers.num2
        console.log(chalk.green(sum))
    }
else if (answers.operator=="-"){
    let sub=answers.num1-answers.num2
    console.log(chalk.green(sub))
}
else if (answers.operator=="/"){
    let div=answers.num1/answers.num2
    console.log(chalk.green(div))
}
else if (answers.operator=="*"){
    let mul=answers.num1*answers.num2
    console.log(chalk.green(mul))
}
}
async function restart() {
    do{ await askquestion();
        var restart= await inquirer.prompt({
            type:"input",
            name:"again",
            message:"do you want to continue ? press y or n"
        })
    } while(restart.again == "y"||restart.again=="Y"||restart.again=="YES"||restart.again=="yes" )
    }
restart();



