const toolData = {
  script: {
    title: "✍️ AI Script Writer",
    desc: "YouTube Shorts और reels के लिए viral script बनाओ.",
    output: (x) => `🔥 VIRAL SHORT SCRIPT

Hook: Bhai, kya tumne kabhi socha hai ${x}?

Scene 1: Normal situation दिखाओ.
Scene 2: अचानक funny twist डालो.
Scene 3: Fast reaction + zoom effect.

Payoff: End में punchline दो.
CTA: Follow for more AI-powered comedy ideas.`
  },
  video: {
    title: "🎬 AI Video Prompt Generator",
    desc: "AI video tools के लिए cinematic prompt बनाओ.",
    output: (x) => `🎬 VIDEO PROMPT

Create a cinematic 9:16 vertical video about: ${x}
Style: futuristic, realistic, neon lighting
Camera: slow push-in, dramatic close-up
Duration: 15 seconds`
  },
  thumb: {
    title: "🖼️ AI Thumbnail Text Generator",
    desc: "YouTube thumbnail के लिए high-click text ideas.",
    output: (x) => `🖼️ THUMBNAIL TEXT IDEAS

1. I Tried This AI Trick!
2. ₹0 से AI Website!
3. Before vs After AI
4. Secret AI Tool
5. This Changed Everything

Topic: ${x}`
  },
  caption: {
    title: "#️⃣ Caption + Hashtags",
    desc: "Instagram/YouTube Shorts caption और hashtags.",
    output: (x) => `📲 CAPTION

${x}
AI ka future ab beginners ke haath mein hai. 🚀

HASHTAGS:
#AI #AITools #HindiAI #YouTubeShorts #CreatorTools #AjitAI`
  },
  pdf: {
    title: "📄 PDF Summarizer UI",
    desc: "PDF summary feature का frontend demo.",
    output: (x) => `📄 PDF SUMMARY DEMO

Main Topic: ${x}
Key Points:
1. Important concepts निकालो
2. Simple Hindi explanation बनाओ
3. Action steps दो

Note: Real PDF upload Phase 2 backend में आएगा.`
  },
  voice: {
    title: "🎤 Voice AI Command",
    desc: "Voice assistant का frontend demo.",
    output: (x) => `🎤 VOICE COMMAND DEMO

Command Received: ${x}

Future Feature:
- बोलकर AI से script लिखवाना
- Text-to-speech voice output
- Hindi/English voice mode`
  }
};

let currentTool = "script";
let freeUsage = 5;

function openTool(name) {
  currentTool = name;
  document.getElementById("toolTitle").innerText = toolData[name].title;
  document.getElementById("toolDesc").innerText = toolData[name].desc;
  document.getElementById("toolOutput").innerText = "Output yahan dikhega...";
}

function generateTool() {
  const input = document.getElementById("toolInput").value.trim();

  if (!input) {
    alert("Pehle topic/prompt likho bhai.");
    return;
  }

  if (!useOneGeneration()) return;

  document.getElementById("toolOutput").innerText =
    toolData[currentTool].output(input);
}

function clearTool() {
  document.getElementById("toolInput").value = "";
  document.getElementById("toolOutput").innerText = "Output yahan dikhega...";
}

function sendChat() {
  const input = document.getElementById("chatInput");
  const box = document.getElementById("chatBox");
  const text = input.value.trim();

  if (!text) return;

  box.innerHTML += `<p class="user">${text}</p>`;

  let reply = "Bhai, isko hum SaaS feature mein convert kar sakte hain.";
  const q = text.toLowerCase();

  if (q.includes("video")) reply = "🎬 Video Studio open karo — prompt generator ready hai.";
  if (q.includes("thumbnail") || q.includes("image")) reply = "🖼️ Thumbnail Text Generator se high-click ideas milenge.";
  if (q.includes("caption")) reply = "#️⃣ Caption + Hashtags tool use karo.";
  if (q.includes("owner")) reply = "👑 Owner mode active करने के लिए ?mode=owner लगाओ.";

  setTimeout(() => {
    box.innerHTML += `<p class="bot">${reply}</p>`;
    box.scrollTop = box.scrollHeight;
  }, 400);

  input.value = "";
}

function useOneGeneration() {
  if (freeUsage <= 0) {
    alert("Free limit खत्म हो गई भाई. Pro plan upgrade करो.");
    return false;
  }

  freeUsage--;
  updateUsageUI();
  return true;
}

function updateUsageUI() {
  const usageText = document.getElementById("usageText");
  const usageFill = document.getElementById("usageFill");

  if (usageText) usageText.innerText = freeUsage + "/5 Free Generations Left";
  if (usageFill) usageFill.style.width = (freeUsage * 20) + "%";
}

function upgrade(plan) {
  openPayment(plan);
}

function openPayment(plan) {
  const price = plan === "Pro" ? "₹349" : "₹99";

  const old = document.getElementById("paymentModal");
  if (old) old.remove();

  document.body.insertAdjacentHTML("beforeend", `
    <div id="paymentModal" class="payBox">
      <div class="payCard">
        <h2>💳 Razorpay Demo Checkout</h2>
        <p>${plan} Plan</p>
        <h3>${price}</h3>
        <p>This is demo payment UI. Real Razorpay बाद में connect होगा.</p>
        <button onclick="confirmPayment('${plan}')">Pay Securely</button>
        <button onclick="closePayment()" style="background:#334155;color:white">Cancel</button>
      </div>
    </div>
  `);
}

function closePayment() {
  const modal = document.getElementById("paymentModal");
  if (modal) modal.remove();
}

function confirmPayment(plan) {
  document.getElementById("planName").innerText = plan;
  freeUsage = plan === "Pro" ? 999 : 100;
  updateUsageUI();
  closePayment();
  alert("✅ " + plan + " Plan Activated Demo!");
}

function openLogin() {
  document.getElementById("loginModal").classList.remove("hidden");
}

function closeLogin() {
  document.getElementById("loginModal").classList.add("hidden");
}

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  if (params.get("mode") === "owner") {
    document.getElementById("ownerStatus").innerText = "On";
    document.getElementById("planName").innerText = "Owner";
    document.getElementById("normalPricing").classList.add("hidden");
    document.getElementById("ownerBanner").classList.remove("hidden");
    document.getElementById("adminLocked").classList.add("hidden");
    document.getElementById("adminUnlocked").classList.remove("hidden");
    freeUsage = 999;
  }

  updateUsageUI();
});
