const messages = [
  "Chargement...",
  "Compilation des idées...",
  "Design en cours...",
  "Déploiement imminent...",
  "Chargement de talents...",
  "À venir très bientôt !"
];

const statusElements = document.querySelectorAll(".status");
let i = 0;

setInterval(() => {
  statusElements.forEach(el => {
    el.textContent = messages[i];
  });
  i = (i + 1) % messages.length;
}, 2000);