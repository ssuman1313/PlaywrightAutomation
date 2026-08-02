function reversewordbywordwithloop(str: string): string {
    let words = str.split(' ');
    let reversedWords: string[] = [];
    for (const word of words) {
        let reverse = '';

        for (let i = word.length - 1; i >= 0; i--) {
            reverse += word[i];
        }
        reversedWords.push(reverse);
    }
    return reversedWords.join(' ');

}

console.log(reversewordbywordwithloop("Playwright Automation"));

function countoccurenceofeachchar(str: string): { [key: string]: number } {
    let charCount: { [key: string]: number } = {};
    for (const char of str.toLowerCase()) {
        if(char == ' '){
            continue;
        }
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

console.log(countoccurenceofeachchar("Playwright Automation"));

function countvowelswithcharacters(str: string): {[key: string]: number} {
    const vowels = 'aeiou';
    let vowelCount: { [key: string]: number } = {};
    for (const char of str.toLowerCase()) {
        if(char == ' '){
            continue;
        }
        if (!vowels.includes(char)) {
            vowelCount[char] = (vowelCount[char] || 0) + 1;
        }
    }
    return vowelCount;
}

console.log(countvowelswithcharacters("Playwright Automation"));

function countonlyrepeatedchartacters(str: string): { [key: string]: number } {
    let charCount: { [key: string]: number } = {};
    for (const char of str.toLowerCase()) {
        if(char == ' '){
            continue;
        }
        charCount[char] = (charCount[char] || 0) + 1;
    }
    // Filter out characters that appear only once
    const repeatedChars: { [key: string]: number } = {};
    for (const [char, count] of Object.entries(charCount)) {
        if (count > 1) {
            repeatedChars[char] = count;
        }
    }
    return repeatedChars;
}

console.log(countonlyrepeatedchartacters("Programming"));