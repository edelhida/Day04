function main(numOne, numTwo) {
    // Only change code below this line 
    var product = parseFloat(numOne * numTwo);
    
        // Only change code above this line 
    return product;
    
    }
    
    console.log(main(parseFloat(2.5), parseFloat(2.0)).toFixed(1));
    console.log(main(parseFloat(5.5), parseFloat(5.5)).toFixed(2));
    console.log(main(parseFloat(100.25), parseFloat(43.20)).toFixed(1));

    module.exports = main;