function interpreterIA() {
  const input = document.getElementById("inputIA").value.toLowerCase();

  fetch("ai_rules.json")
    .then(response => response.json())
    .then(data => {
      const match = data.rules.find(rule =>
        input.includes(rule.condition.toLowerCase())
      );

      const réponse = match
        ? `✅ Condition détectée\n🧠 Action IA : ${match.action}`
        : "⚠️ Aucune règle IA correspondante.";

      document.getElementById("output").innerText = réponse;
    });
}
