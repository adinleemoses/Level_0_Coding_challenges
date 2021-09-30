function celToFer(tempC){
    return (tempC*(9/5)) + 32; 
} 

function ferToCel(tempF) {
    return (tempF - 32) * (5/9);
}

console.log(celToFer(14));
console.log(ferToCel(64));