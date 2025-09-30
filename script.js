async function loadFacts() {
  const res = await fetch("facts.json");
  return res.json();
}

document.addEventListener("DOMContentLoaded", async () => {
  const facts = await loadFacts();
  const factDisplay = document.getElementById("fact");
  const btn = document.getElementById("factBtn");

  btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
  });
});
