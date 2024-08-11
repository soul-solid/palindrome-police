const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

let isPalindrome = () => {
  let userInput = textInput.value;
  let cleanedStr = userInput.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
  let reverseStr = cleanedStr.split("").reverse().join("");
  
  if (textInput.value === "") {
    alert("Sir, you have to give us a word!");
    return;
  } 

  if (cleanedStr === reverseStr) {
    result.innerHTML = `<b>${userInput}</b> is a palindrome. You're free to go sir! &#128110;`;
  } else {
    result.innerHTML = `<b>${userInput}</b> is not a palindrome. Hold it right there! &#128659;`;
  }
}

checkBtn.addEventListener("click", isPalindrome);