let facts = [];
let currentFact = null;
let score = 0;

async function loadFacts() {
  const res = await fetch("facts.json");
  return res.json();
}

function showFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  currentFact = facts[randomIndex];
  document.getElementById("fact").textContent = currentFact.text;
  document.getElementById("feedback").textContent = "";
}

function checkAnswer(userAnswer) {
  if (!currentFact) return;

  const feedback = document.getElementById("feedback");
  if (userAnswer === currentFact.answer) {
    feedback.textContent = "✅ Correct!";
    score++;
  } else {
    feedback.textContent = "❌ Nope!";
  }

  document.getElementById("score").textContent = `Score: ${score}`;
}

document.addEventListener("DOMContentLoaded", async () => {
  facts = await loadFacts();

  document.getElementById("trueBtn").addEventListener("click", () => {
    checkAnswer("true");
  });

  document.getElementById("falseBtn").addEventListener("click", () => {
    checkAnswer("false");
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    showFact();
  });

  // Load first fact
  showFact();
});
