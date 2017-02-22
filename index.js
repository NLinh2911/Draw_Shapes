/*
 * Created by Linh Ngo in 22/02/2017
 */

const readlineSync = require('readline-sync');
const drawClass = require('./drawClass').drawClass;
const log = console.log;

//TODO: Convert user input
/**
 * Convert strings to numbers and check if input is valid positive integer
 * @param input_string
 */
const convert_input = (input_string) => {
    if (isNaN(input_string)){
        throw new Error ('your input is not a number');
    }
    let input_number = parseInt(input_string);
    if (input_number < 2) {
        throw new Error ('your choice of rows and columns is too small. Please choose a positive integer >= 2')
    }
    return input_number;
};

//TODO: Ask for user input & read user input
/**
 * if input === 'q' then quit
 * @param message
 * @param validate_func
 */
const readInput = (message, validate_function) => {
    let answer = readlineSync.question(message);
    if (answer === 'q'){
        throw new Error ('quit');
    }
    return validate_function(answer);
};

const drawRunner = () => {
    let rows, cols, thick;
    try {
        rows = readInput('Enter the number of rows: ', convert_input);
        cols = readInput('Enter the number of columns equal to rows: ', convert_input);
        thick = readInput('Enter the number of thickness to draw square boxes: ', convert_input);
        //shape = readInput('')
    } catch (error){
        log('Error: ', error.message);
        return;
    }

    try {
        const myDraw = new drawClass(rows, cols, thick);
        if (rows%2 !== 0) {
            log(myDraw.drawEverything()); // với rows, cols số lẻ vẽ 7 hình trừ drawDiamondEven
        }
        else {
            log(myDraw.drawEverything2()); // với rows, cols số chẵn, bỏ qua các hình drawDiamondOdd
        }
    } catch (error) {
        log('Error: ', error.message);
    }
};

drawRunner();