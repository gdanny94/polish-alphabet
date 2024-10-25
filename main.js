function correctPolishLetters(string) {
  const polishAlpha = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
    Ą: "A",
    Ć: "C",
    Ę: "E",
    Ł: "L",
    Ń: "N",
    Ó: "O",
    Ś: "S",
    Ź: "Z",
    Ż: "Z",
  };

  return string
    .split("")
    .map((letter) => polishAlpha[letter] || letter)
    .join("");
}

console.log(correctPolishLetters("Zażółć gęślą jaźń"));

//   Explanation:
// The polishAlpha object maps each Polish letter with a diacritic to its plain version.
// The string.split('') splits the input string into individual characters.
// The map function replaces each character based on the polishAlpha. If the character is not in the map, it leaves it unchanged.
// Finally, join('') recombines the characters into a single string.
