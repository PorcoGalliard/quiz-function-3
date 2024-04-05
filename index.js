const twentyPercentDisc = (totalPrice) => {
  if (totalPrice >= 100000) {
    return totalPrice * 0.8;
  }
  return totalPrice;
};

const konversiHurufVokal = (word) => {
    const hurufVokal = ["a", "i", "u", "e", "o"];
    let result = "";

    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        if (char => 'a' || char <= 'z') {
            let nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
            if (hurufVokal.includes(char)) {
                nextChar = nextChar.toUpperCase();
            }
            result += nextChar;
        } else {
            result += char;
        }
    }
    return result
}

const firstAndLastLetter = (word) => {
  if (word === undefined || word.length === 0) {
    return "0";
  }
  return word[0] + word[word.length - 1];
};

const multiplicationOfWord = (word, num) => {
  if (num === 0) {
    return "Silahkan masukkan angka lebih dari 0";
  }
  return word.repeat(num);
};

const generateRandomNumber = () => Math.floor(Math.random() * 6) + 1;