#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright.underline("\t Welcome to Cli Todo-list"));
let todos = [];
let condition = true;
while (condition) {
    let answers = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'What would you add in your todo? :'
        },
        {
            name: 'addmoretodos',
            type: 'confirm',
            message: 'Would you add more in your todos?',
            default: 'True'
        }
    ]);
    todos.push(answers.todo);
    if (answers.todo) {
        console.log(chalk.blue.bold(todos));
    }
    else {
        console.log(chalk.red.bold("\tError!! firstly add your todo \n"));
    }
    ;
    condition = answers.addmoretodos;
}
;
