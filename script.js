const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const symbols = [
  "!",
  "§",
  "%",
  "&",
  "/",
  "(",
  ")",
  "=",
  "?",
  "°",
  "^",
  "+",
  "*",
  "#",
  "<",
  ">",
  "@",
  "€",
];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function generatePassword() {
  const shuffledLetters = letters.sort((a, b) => 0.5 - Math.random());
  const shuffledSymbols = symbols.sort((a, b) => 0.5 - Math.random());
  const shuffeldNums = nums.sort((a, b) => 0.5 - Math.random());
  const passWordArray = [
    ...shuffeldNums,
    ...shuffledLetters,
    ...shuffledSymbols,
  ];
  let shuffledPassword = passWordArray.sort((a, b) => 0.5 - Math.random());

  return shuffledPassword.splice(1, 14).join("");
}

document.getElementById("generate-btn").addEventListener("click", () => {
  document.getElementById("output").textContent = generatePassword();
});
