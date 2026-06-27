function sendChat(){
  const input=document.getElementById("chatInput");
  const box=document.getElementById("chatBox");
  const text=input.value.trim();
  if(!text)return;

  box.innerHTML+=`<p class="user">${text}</p>`;

  let reply="यह demo AI है। Real API Phase 2 में connect करेंगे।";
  const q=text.toLowerCase();

  if(q.includes("video")) reply="🎬 Video Studio में AI script + text-to-video API बाद में जोड़ेंगे।";
  if(q.includes("image")) reply="🖼️ Image Studio में thumbnail और image generator API जोड़ेंगे।";
  if(q.includes("pdf")) reply="📄 PDF Reader में upload + summarize feature बनेगा।";
  if(q.includes("voice")) reply="🎤 Voice AI browser speech और TTS से connect होगा।";
  if(q.includes("owner")) reply="👑 Owner mode: URL में ?mode=owner लगाओ।";

  setTimeout(()=>{
    box.innerHTML+=`<p class="bot">${reply}</p>`;
    box.scrollTop=box.scrollHeight;
  },400);

  input.value="";
}

function upgrade(plan){
  document.getElementById("planName").innerText=plan;
  alert(plan+" demo activated!");
}

function openLogin(){
  document.getElementById("loginModal").classList.remove("hidden");
}

function closeLogin(){
  document.getElementById("loginModal").classList.add("hidden");
}

window.addEventListener("DOMContentLoaded",()=>{
  const params=new URLSearchParams(window.location.search);

  if(params.get("mode")==="owner"){
    document.getElementById("normalPricing").classList.add("hidden");
    document.getElementById("ownerPanel").classList.remove("hidden");
    document.getElementById("ownerStatus").innerText="On";
    document.getElementById("planName").innerText="Owner";
  }
});
