/*********************************************************************************
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Hitesh Sachdeva  Student ID: 111287231  Date: 15-01-2024
*
********************************************************************************/ 


const readline = require("readline");
const fs = require('fs');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Do you wish to process a File (f) or Directory (d): ", (userInput) => {
    if(userInput == 'f') {
        rl.question("File: ", (fileInput)=> 
        {
            fs.readFile(fileInput, (err, fileData) =>
            { 
                if(err){
                    console.log(`Error in opening the file ${err.message}`);
                }
                else{
                    let contentString = fileData.toString().replace(/\s+/g, ' '); 
                    console.log(`Number of Characters (including spaces): ${contentString.length}`);

                    let contentWords = contentString.replace(/[^\w\s\']/g, "").split(' ');
                    console.log(`Number of Words: ${contentWords.length}`);

                    let longestWord = '';
                    contentWords.forEach(word => {
                        if(word.length >longestWord.length)
                        longestWord = word;   
                    });

                    console.log(`Longest Word: ${longestWord}`)
                }

            });

            rl.close();
        });
    }
    else if(userInput == 'd') {
        rl.question("Directory: ", (userInput)=>
        {
            fs.readdir(userInput, function (err, filesArray) {
                if (err){
                     console.log(`Error in opening the Directory  ${err.message}`);
                }
                else {

                    var sortOutput = filesArray.sort().reverse();
                console.log(`Files (reverse alphabetical order): ${sortOutput}`)
                     
                 }
                });
            rl.close();

        });
        
    }
    else
    {
        console.log("Invalid Selection");
        rl.close();
    }
 });
