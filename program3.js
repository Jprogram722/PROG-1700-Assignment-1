/**
 * Author: Jared Park
 * Date: 09-13-2023
 * Description: This program will convert imperial measurements to metric measurements
 */

/**
 * psudocode
 * print what the program is
 * Ask the user for imperial measurements like
 *  - Tons
 *  - Stones
 *  - Pounds
 *  - Ounces
 * 
 * Calculate the ounces based on the masurements given using the formula
 *  total ounces = 35840*tons + 224*stone + 16*pounds + ounces
 * 
 * calculate the total kilograms using the formula
 *  total kilos = total ounces / 35.274
 * 
 * divide up the total kilos into metric tons and grams using
 *  1 kilogram = 1000 grams
 *  1 metric ton = kilos / 1000
 */

const readLineSync = require("readline-sync");

"use strict";

function main(){

    // print out what the program is
    console.log("Imperial To Metric Converter \n");

    // Ask the user for the amount of tons, stones, pounds, and ounces
    const tons = parseInt(readLineSync.question("Enter the number of tons: "));
    const stone = parseInt(readLineSync.question("Enter the number of stone: "));
    const pounds = parseInt(readLineSync.question("Enter the number of pounds: "));
    const ounces = parseInt(readLineSync.question("Enter the number of ounces: "));

    // calculate the total ounces and kilos using the formulas above
    const totalOunces = 35840*tons + 224*stone + 16*pounds + ounces;
    const totalKilos = totalOunces / 35.274;

    // calculate the metric tons using the formulas above
    const metricTons = parseInt(totalKilos/1000);

    /* 
    calculate the kilograms by subtracing off the metric tons 
    from the total kilos and parsing it as an int
    */
    const kilograms = parseInt(totalKilos - metricTons*1000);

    /* 
    calculate the grams by subtracing off the metric tons 
    and the kilos from the total kilos and multipling by 1000
    */

    const grams = (totalKilos - metricTons*1000 - kilograms) * 1000;


    // print out the metric values as ints or floats to 1 decimal place
    console.log("");
    console.log("The metric weight is " + metricTons + " metric tons, " + kilograms + " kg's, and " + grams.toFixed(1) + " grams");
}
if(require.main === module){
    main();
}