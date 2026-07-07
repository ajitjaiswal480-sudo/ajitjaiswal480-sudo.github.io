function openAiraPanel() {
  const panel = document.getElementById("aira-panel");
  if (panel) panel.classList.toggle("aira-open");
}

function askAira() {
  const input = document.getElementById("aira-input");
  const chat = document.getElementById("aira-chat");

  if (!input || !chat) return;

  const text = input.value.trim();
  if (!text) return;

  chat.innerHTML += `<div class="aira-user">Director A.J.: ${text}</div>`;

  let reply = "AIRA: Boss, mission active hai. Main is idea ko cinematic creator output mein convert kar sakti hoon.";

  const q = text.toLowerCase();

  if (q.includes("script")) {
    reply = "AIRA: Script mode ready. Topic do, main hook, scene, punchline aur CTA banaungi.";
  }

  if (q.includes("image") || q.includes("prompt")) {
    reply = "AIRA: Image prompt mode ready. Main cinematic 9:16 prompt pack bana sakti hoon.";
  }

  if (q.includes("video")) {
    reply = "AIRA: Video engine ready. Main short-form cinematic sequence design kar sakti hoon.";
  }

  if (q.includes("aira")) {
    reply = "AIRA: Main yahin hoon, Director A.J. Creator OS online hai.";
  }

  setTimeout(() => {
    chat.innerHTML += `<div class="aira-bot">${reply}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 300);

  input.value = "";
}
