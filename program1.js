/**
 * Author: Jared Park
 * Date: 09-13-2023
 * Descripton: This program will calculate the cost of shipping for Hipsters Local Vinyl Records
 */

/**
 * psudocode for program 1
 * print the name of the business and program
 * Ask for the customers name
 * Ask for the distance of shipping
 * Ask for the cost of the records
 * 
 */

const readLineSync = require("readline-sync");

"use strict";

function main(){

    const deliveryRate = 15 // $/km

    const salesTax = 1.14 // 14% plus original cost

    console.log("Hipster's Local Vinyl Records - Customer Order Details\n");
    
    // Asks for the customers name and saves input as string
    const name = readLineSync.question("Enter the customer's name: ");

    // Ask for the distance of shipping in kilometers
    const distanceKM = readLineSync.question("Enter the distance in kilometers for delivery: ");

    // converts distance to a float and multiplies it by delivery rate
    const deliveryCost = parseFloat(distanceKM) * deliveryRate;

    // Asks for the cost of records with no tax
    const costNoTax = readLineSync.question("Enter the cost of records purchased: ");

    // Converts cost to a float and applies the sales tax
    const purchaseCost = parseFloat(costNoTax) * 1.14;

    // Outputs the calculated costs of the order
    console.log("");
    console.log("Purchase summary for " + name);

    /*  
        The .toFixed function for the floating point values makes 
        it so the values automatically round to 2 decimal places
    */
    console.log("Delivery Cost: $" + deliveryCost.toFixed(2));
    console.log("Purchase Cost: $" + purchaseCost.toFixed(2));
    console.log("Total Cost   : $" + (deliveryCost + purchaseCost).toFixed(2));
}
if(require.main == module){
    main();
}