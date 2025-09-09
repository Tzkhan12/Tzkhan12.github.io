document.getElementById("runBtn").addEventListener("click", () => {
  const t = document.getElementById("inputText").value;
  document.getElementById("output").innerText = "You typed: " + t;
});
