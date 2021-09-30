function getVowels (sLine){
    const res = Array.from(sLine.toLowerCase()).filter(letter => 'aeiou'.includes(letter)); 
    return [...new Set(res)].join(', ');

}
console.log('Vowels:',getVowels('Umuzi'));