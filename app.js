const toolData={
  script:{
    title:"✍️ AI Script Writer",
    desc:"YouTube Shorts और reels के लिए viral script बनाओ.",
    output:(x)=>`🔥 VIRAL SHORT SCRIPT\n\nHook: Bhai, kya tumne kabhi socha hai ${x}?\n\nScene 1: Normal situation दिखाओ.\nScene 2: अचानक funny twist डालो.\nScene 3: Fast reaction + zoom effect.\n\nPayoff: End में punchline दो.\nCTA: Follow for more AI-powered comedy ideas.`
  },
  video:{
    title:"🎬 AI Video Prompt Generator",
    desc:"Runway/Pika/AI video tools के लिए cinematic prompt बनाओ.",
    output:(x)=>`🎬 VIDEO PROMPT\n\nCreate a cinematic 9:16 vertical video about: ${x}\nStyle: futuristic, realistic, neon lighting, smooth camera motion\nCamera: slow push-in, dramatic close-up, fast cut transitions\nMood: premium, viral, high-energy\nDuration: 15 seconds`
  },
  thumb:{
    title:"🖼️ AI Thumbnail Text Generator",
    desc:"YouTube thumbnails के लिए high-click text ideas.",
    output:(x)=>`🖼️ THUMBNAIL TEXT IDEAS\n\n1. I Tried This AI Trick!\n2. ₹0 से AI Website!\n3. Before vs After AI\n4. Secret AI Tool\n5. This Changed Everything\n\nTopic: ${x}`
  },
  caption:{
    title:"#️⃣ Caption + Hashtags",
    desc:"Instagram/YouTube Shorts caption और hashtags.",
    output:(x)=>`📲 CAPTION\n\n${x}\nAI ka future ab beginners ke haath mein hai. 🚀\n\nHASHTAGS:\n#AI #AITools #HindiAI #YouTubeShorts #CreatorTools #AjitAI #DigitalIndia`
  },
  pdf:{
    title:"📄 PDF Summarizer UI",
    desc:"PDF summary feature का frontend demo.",
    output:(x)=>`📄 PDF SUMMARY DEMO\n\nMain Topic: ${x}\nKey Points:\n1. Important concepts निकालो\n2. Simple Hindi explanation बनाओ\n3. Action steps दो\n\nNote: Real PDF upload Phase 2 backend में आएगा.`
  },
  voice:{
    title:"🎤 Voice AI Command",
    desc:"Voice assistant का frontend demo.",
    output:(x)=>`🎤 VOICE COMMAND DEMO\n\nCommand Received: ${x}\nFuture Feature:\n- बोलकर AI से script लिखवाना\n- Text-to-speech voice output\n- Hindi/English voice mode`
  }
};

let currentTool="script";

function openTool(name){
  currentTool=name;
  document.getElementById("toolTitle").innerText=toolData[name].title;
  document.getElementById("toolDesc").innerText=toolData[name].desc;
  document.getElementById("toolOutput").innerText="Output yahan dikhega...";
}

function generateTool(){
  const input=document.getElementById("toolInput").value.trim();
  if(!input){alert("Pehle topic/prompt likho bhai.");return}
  document.getElementById("toolOutput").innerText=toolData[currentTool].output(input);
}

function clearTool(){
  document.getElementById("toolInput").value="";
  document.getElementById("toolOutput").innerText="Output yahan dikhega...";
}

function sendChat(){
  const input=document.getElementById("chatInput");
  const box=document.getElementById("chatBox");
  const text=input.value.trim();
  if(!text)return;
  box.innerHTML+=`<p class="user">${text}</p>`;
  let reply="Bhai, isko hum SaaS feature mein convert kar sakte hain.";
  const q=text.toLowerCase();
  if(q.includes("video")) reply="🎬 Video Studio open karo — prompt generator ready hai.";
  if(q.includes("thumbnail")||q.includes("image")) reply="🖼️ Thumbnail Text Generator se high-click ideas milenge.";
  if(q.includes("caption")) reply="#️⃣ Caption + Hashtags tool use karo.";
  if(q.includes("owner")) reply="👑 Owner mode active करने के लिए ?mode=owner लगाओ.";
  setTimeout(()=>{box.innerHTML+=`<p class="bot">${reply}</p>`;box.scrollTop=box.scrollHeight},400);
  input.value="";
}

function upgrade(plan){
  document.getElementById("planName").innerText=plan;
  alert(plan+" demo activated!");
}

function openLogin(){document.getElementById("loginModal").classList.remove("hidden")}
function closeLogin(){document.getElementById("loginModal").classList.add("hidden")}

window.addEventListener("DOMContentLoaded",()=>{
  const params=new URLSearchParams(window.location.search);
  if(params.get("mode")==="owner"){
    document.getElementById("ownerStatus").innerText="On";
    document.getElementById("planName").innerText="Owner";
    document.getElementById("normalPricing").classList.add("hidden");
    document.getElementById("ownerBanner").classList.remove("hidden");
    document.getElementById("adminLocked").classList.add("hidden");
    document.getElementById("adminUnlocked").classList.remove("hidden");
  }
});
