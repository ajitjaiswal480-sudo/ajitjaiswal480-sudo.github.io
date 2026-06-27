let currentTool = "script";

function setTool(tool) {
  currentTool = tool;

  const title = document.getElementById("toolTitle");

  if (tool === "script") title.innerText = "✍️ Script Writer";
  if (tool === "video") title.innerText = "🎬 Video Prompt Generator";
  if (tool === "thumb") title.innerText = "🖼️ Thumbnail Text Generator";
}

function generateOutput() {
  const input = document.getElementById("promptInput").value.trim();
  const output = document.getElementById("outputBox");

  if (!input) {
    alert("Pehle topic likho bhai.");
    return;
  }

  if (currentTool === "script") {
    output.innerText =
`🔥 Viral Short Script

Topic: ${input}

Hook: Bhai, kya tumne kabhi notice kiya?

Scene 1: Normal situation dikhao.
Scene 2: Ek funny twist lao.
Scene 3: Fast zoom + reaction.
Punchline: End mein strong comedy line.

CTA: Follow for more AI creator ideas.`;
  }

  if (currentTool === "video") {
    output.innerText =
`🎬 AI Video Prompt

Create a 9:16 vertical cinematic video about: ${input}

Style: realistic, futuristic, neon lighting
Camera: slow zoom, fast cuts, dramatic close-up
Mood: viral, energetic, premium
Duration: 15 seconds`;
  }

  if (currentTool === "thumb") {
    output.innerText =
`🖼️ Thumbnail Text Ideas

Topic: ${input}

1. I Tried This!
2. This Changed Everything
3. ₹0 से AI Magic
4. Secret AI Tool
5. Before vs After`;
  }
}
