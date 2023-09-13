/**
 * Author: Jared Park
 * Date: 09-13-2023
 * Description: This program will function as a short term loan calculator
 */

/**
 * pusdocode
 * Print what the program is
 * Ask for the amount of dollars borrowed
 * Ask for the compound intrest rate
 * Ask how many years the money will be borrowed for
 * calculate intrest and calcuate the weekly payments
 * print how much the weekly payments will be
 */

const readLineSync = require("readline-sync");

"use strict";

function main(){

    /*
        This program will calculate the weekly intrest payments of a short term loan using

        Weekly Payments = (i/(1 -(1+i)**(-52*n))) * A

        Where 
        - A is amount of dollars loaned
        - r is the compound intrest rate
        - n is number of years
        - i is intrest = r / 5200

    */

    // prints out what the program is
    console.log("Weekly Loan Calculator \n");

    // asks for the user input on what the values of these variables are
    const A = parseFloat(readLineSync.question("Enter the amount loaned: "));
    const r = parseFloat(readLineSync.question("Enter the intrest rate (%): "));
    const n = parseInt(readLineSync.question("Enter the amount of years: "));


    // Calulates the intrest and weekly payments using the formulas above
    const i = r / 5200;
    const weeklyPayments = (i/(1 -(1+i)**(-52*n))) * A;

    // prints out the weekly payments to 2 decimal places
    console.log("");
    console.log("Your weekly payment will be $" + weeklyPayments.toFixed(2));
}
if(require.main === module){
    main();
}