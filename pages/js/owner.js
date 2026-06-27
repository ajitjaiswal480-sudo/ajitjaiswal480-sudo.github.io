function unlockOwner() {
  const key = document.getElementById("ownerKey").value.trim();

  if (key === "ajit-owner-2026") {
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
    alert("👑 Owner Access Granted");
  } else {
    alert("❌ Wrong owner key");
  }
}
