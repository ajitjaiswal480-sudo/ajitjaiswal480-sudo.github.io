const OWNER_MODE = true;

const toolData = {
  script: {
    title: "✍️ AI Script Writer",
    desc: "YouTube Shorts aur Reels ke liye viral Hinglish script banao.",
    output: (x) => `🔥 VIRAL SHORT SCRIPT

Topic: ${x}

Hook:
Bhai, kya tumne kabhi notice kiya hai ki ${x}?

Scene 1:
Normal situation dikhao. Character simple daily-life problem face kar raha hai.

Scene 2:
Suddenly ek funny ya emotional twist aata hai.

Scene 3:
Fast zoom, reaction shot, dramatic music, aur punchline.

Payoff:
End mein audience ko relatable shock ya laugh mile.

CTA:
Follow karo Boss, daily AI-powered creator ideas ke liye.`
  },

  video: {
    title: "🎬 AI Video Prompt Generator",
    desc: "AI video tools ke liye cinematic prompt banao.",
    output: (x) => `🎬 CINEMATIC VIDEO PROMPT

Create a cinematic 9:16 vertical video about: ${x}

Style:
Ultra realistic, emotional cinematic lighting, smooth camera movement.

Camera:
Slow push-in, close-up emotion shot, dramatic reveal.

Mood:
Inspiring, futuristic, powerful.

Duration:
15 seconds.

No text, no watermark.`
  },

  thumb: {
    title: "🖼️ AI Thumbnail Text Generator",
    desc: "YouTube thumbnail ke liye high-click text ideas.",
    output: (x) => `🖼️ THUMBNAIL TEXT IDEAS

Topic: ${x}

1. I Tried This!
2. ₹0 से Start
3. Before vs After
4. Secret AI Trick
5. This Changed Everything
6. Beginner To Boss
7. No Money, Only Skill`
  },

  caption: {
    title: "#️⃣ Caption + Hashtags",
    desc: "Instagram/YouTube Shorts caption aur hashtags.",
    output: (x) => `📲 CAPTION

${x}

Sapna tab tak sapna hai jab tak tum action nahi lete.  
Aaj se start. Kal se result. 🚀

HASHTAGS:
#AI #CreatorTools #HindiAI #YouTubeShorts #ReelsIndia #AjitAI #POVNation`
  },

  pdf: {
    title: "📄 PDF Summarizer UI",
    desc: "PDF summary feature ka frontend demo.",
    output: (x) => `📄 PDF SUMMARY DEMO

Main Topic:
${x}

Key Points:
1. Important concepts nikalo
2. Simple Hindi explanation banao
3. Action steps do

Note:
Real PDF upload backend phase mein connect hoga.`
  },

  voice: {
    title: "🎤 Voice AI Command",
    desc: "Voice assistant ka frontend demo.",
    output: (x) => `🎤 VOICE COMMAND DEMO

Command Received:
${x}

Future Feature:
- Bolkar AI se script likhvana
- Text-to-speech voice output
- Hindi/English voice mode`
  }
};

let currentTool = "script";

function openTool(name) {
  currentTool = name;

  const title = document.getElementById("toolTitle");
  const desc = document.getElementById("toolDesc");
  const output = document.getElementById("toolOutput");

  if (title) title.innerText = toolData[name].title;
  if (desc) desc.innerText = toolData[name].desc;
  if (output) output.innerText = "Output yahan dikhega...";
}

function generateTool() {
  const inputBox = document.getElementById("toolInput");
  const outputBox = document.getElementById("toolOutput");

  if (!inputBox || !outputBox) return;

  const input = inputBox.value.trim();

  if (!input) {
    alert("Pehle topic/prompt likho Boss.");
    return;
  }

  outputBox.innerText = toolData[currentTool].output(input);
}

function clearTool() {
  const inputBox = document.getElementById("toolInput");
  const outputBox = document.getElementById("toolOutput");

  if (inputBox) inputBox.value = "";
  if (outputBox) outputBox.innerText = "Output yahan dikhega...";
}

function sendChat() {
  const input = document.getElementById("chatInput");
  const box = document.getElementById("chatBox");

  if (!input || !box) return;

  const text = input.value.trim();
  if (!text) return;

  box.innerHTML += `<p class="user">${text}</p>`;

  const q = text.toLowerCase();
  let reply = "Boss, AIRA ready hai. Is idea ko hum creator feature mein convert kar sakte hain.";

  if (q.includes("video")) reply = "🎬 Video Prompt Generator open karo Boss — cinematic prompt ready hoga.";
  if (q.includes("thumbnail") || q.includes("image")) reply = "🖼️ Thumbnail/Image tool se high-click idea niklega.";
  if (q.includes("caption")) reply = "#️⃣ Caption + Hashtags tool use karo Boss.";
  if (q.includes("script")) reply = "✍️ AI Script Writer se viral short script generate karo.";
  if (q.includes("owner")) reply = "👑 Owner Mode already active hai Boss. Unlimited access on.";

  setTimeout(() => {
    box.innerHTML += `<p class="bot">${reply}</p>`;
    box.scrollTop = box.scrollHeight;
  }, 300);

  input.value = "";
}

function updateUsageUI() {
  const usageText = document.getElementById("usageText");
  const usageFill = document.getElementById("usageFill");

  if (usageText) usageText.innerText = "👑 Owner Mode: Unlimited Generations";
  if (usageFill) usageFill.style.width = "100%";
}

function upgrade(plan) {
  alert("Payment system abhi OFF hai Boss. Owner Mode unlimited active hai.");
}

function openPayment(plan) {
  alert("Payment system abhi OFF hai Boss. Owner Mode unlimited active hai.");
}

function closePayment() {
  const modal = document.getElementById("paymentModal");
  if (modal) modal.remove();
}

function confirmPayment(plan) {
  alert("Owner Mode active hai Boss. Payment ki zarurat nahi.");
}

function openLogin() {
  const modal = document.getElementById("loginModal");
  if (modal) modal.classList.remove("hidden");
}

function closeLogin() {
  const modal = document.getElementById("loginModal");
  if (modal) modal.classList.add("hidden");
}

window.addEventListener("DOMContentLoaded", () => {
  const ownerStatus = document.getElementById("ownerStatus");
  const planName = document.getElementById("planName");
  const normalPricing = document.getElementById("normalPricing");
  const ownerBanner = document.getElementById("ownerBanner");
  const adminLocked = document.getElementById("adminLocked");
  const adminUnlocked = document.getElementById("adminUnlocked");

  if (ownerStatus) ownerStatus.innerText = "On";
  if (planName) planName.innerText = "Owner";
  if (normalPricing) normalPricing.classList.add("hidden");
  if (ownerBanner) ownerBanner.classList.remove("hidden");
  if (adminLocked) adminLocked.classList.add("hidden");
  if (adminUnlocked) adminUnlocked.classList.remove("hidden");

  updateUsageUI();
});
