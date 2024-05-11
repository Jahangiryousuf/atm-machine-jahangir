#!/usr/bin/env Node
import inquirer from "inquirer";
let myBalance = 5000;
let myPin = 12345;
console.log("welllcome to j atm machine");
let PinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        massage: "enter you pin code"
    }
]);
if (PinAnswer.pin === myPin) {
    console.log("pin is correct , login successfuly !");
    //console.log(`current balance is ${myBalance}`);
    let opreationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            massage: "select an operartion",
            choices: ["withdraw Amount", "check balance"]
        }
    ]);
    if (opreationAns.operation === "withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                massage: "enter the amount to withdraw"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount}withdraw successfully`);
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
    else if (opreationAns.operartion === "check balance") {
        console.log(`your account valance is ${myBalance}`);
    }
}
else {
    console.log("your pin is incorrect");
}
