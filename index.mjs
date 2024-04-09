#! /usr/bin/env node
import inquirer from "inquirer";
async function main() {
    // Designing CLI base ATM MACHINE
    let myBalance = 10000; // Dollar
    let myPin = 1234;
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your pin",
            type: "number",
        },
    ]);
    if (pinAnswer.pin === myPin) {
        console.log("Correct pin code !!!!");
        let operationAns = await inquirer.prompt([
            {
                name: "Operation",
                message: "Please select an option",
                type: "list",
                choices: ["Withdraw", "Deposit", "Check Balance"],
            },
        ]);
        if (operationAns.Operation === "Withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "Amount",
                    message: "Enter the amount to withdraw",
                    type: "number",
                },
            ]);
            if (amountAns.Amount <= myBalance) {
                myBalance -= amountAns.Amount;
                console.log(`Withdrawn ${amountAns.Amount} dollars.`);
                console.log(`Your Remaining Balance is ${myBalance}`);
            }
            else {
                console.log("Insufficient balance.");
            }
        }
        else if (operationAns.Operation === "Deposit") {
            let amountAns = await inquirer.prompt([
                {
                    name: "Amount",
                    message: "Enter the amount to deposit",
                    type: "number",
                },
            ]);
            myBalance += amountAns.Amount;
            console.log(`Deposited ${amountAns.Amount} dollars.`);
            console.log(`Your New Balance is ${myBalance}`);
        }
        else if (operationAns.Operation === "Check Balance") {
            console.log(`Your Balance is ${myBalance} dollars.`);
        }
    }
    else {
        console.log("Incorrect pin number");
    }
}
main(); // Call the main function to start the program
