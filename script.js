let currentQuestion = 1;
let noClickCount = 0; // Track how many times Maria clicks "No"
const noTextVariations = [
    "Pretty please with a TINY BLOCK OF CHEESE?",
    "Pretty please with a SMALL BLOCK OF CHEESE?",
    "Pretty please with a MEDIUM BLOCK OF CHEESE?",
    "Pretty please with a BIG BLOCK OF CHEESE?",
    "Pretty please with a LARGE BLOCK OF CHEESE?",
    "Pretty please with a MASSIVE BLOCK OF CHEESE?"
  ];

function checkAnswer(questionNumber, isCorrect) {
  if (isCorrect) {
    if (questionNumber === 1) {
      document.getElementById('question-2').classList.remove('hidden');
      document.getElementById('options-2').classList.remove('hidden');
    } else if (questionNumber === 2) {
      document.getElementById('question-3').classList.remove('hidden');
      document.getElementById('options-3').classList.remove('hidden');
    } else if (questionNumber === 3) {
      document.getElementById('question-4').classList.remove('hidden');
      document.getElementById('options-4').classList.remove('hidden');
    } else if (questionNumber === 4) {
      document.getElementById('question-5').classList.remove('hidden');
      document.getElementById('options-5').classList.remove('hidden');
    } else if (questionNumber === 5) {
      document.getElementById('question-6').classList.remove('hidden');
      document.getElementById('options-6').classList.remove('hidden');
    } else if (questionNumber === 6) {
      document.getElementById('final-message').classList.remove('hidden');
      document.getElementById('final-buttons').classList.remove('hidden');
    }
  } else {
    alert("Oops! Try again, Maria. 💔");
  }
}

function finalYes() {
  const response = document.getElementById('valentine-response');
  response.textContent = "YAYYYYY! I knew you'd say yes 💖";
  response.classList.remove('hidden');
}

function finalNo() {
  const yesBtn = document.getElementById('yes-btn');
  noClickCount++;
  
  // Change the text and grow the button
  if (noClickCount <= noTextVariations.length) {
    yesBtn.textContent = noTextVariations[noClickCount - 1];
  } else {
    yesBtn.textContent = "Just say yes already! 😅";
  }

  // Increase button size
  const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize + 4) + "px";
  yesBtn.style.padding = "15px " + (30 + noClickCount * 10) + "px";
}
