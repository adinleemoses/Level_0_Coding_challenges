function commonLetters (sLine1, sline2){
    const res = Array.from(sLine1.toLowerCase()).filter(letter => sline2.toLowerCase().includes(letter)); 
    return [...new Set(res)].join(', ');
}
console.log('Common Letters:', commonLetters('House', 'Computers'));