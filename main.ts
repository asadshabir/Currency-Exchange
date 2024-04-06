import inquirer from "inquirer";


const currencies:any = {
    USD : 1, //base currency
    PKR : 277.54,
    QAR : 3.64,
    IRR : 42075.00,
    INR : 83.30
}

let use_answer = await inquirer.prompt(
    [
        {
            name : "fromCurrency",
            type : "list",
            message : "Enter From Currency :",
            choices : ["USD","QAR","IRR","INR","PKR"]
            
        },
        {
            name :"toCurrency",
            type : "list",
            message : "Enter To Currency :",
            choices : ["USD","QAR","IRR","INR","PKR"]
        },
        {
            name : "amount",
            type : "number",
            message : "Enter Amount For This Operation :"
        }
    ]
)


let fromAmount = currencies[use_answer.fromCurrency]
let toAmount = currencies [use_answer.toCurrency]
let userAmount = use_answer.amount 
let baseAmount = userAmount / fromAmount 
let convertedCurrency = baseAmount * toAmount

console.log(convertedCurrency );













