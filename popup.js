const quotes = [
  "Believe you can and you're halfway there.",
  "Start where you are. Use what you have.",
  "Dream big, work hard, stay humble."
];
document.getElementById("btn").addEventListener("click", () => {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = q;
});
