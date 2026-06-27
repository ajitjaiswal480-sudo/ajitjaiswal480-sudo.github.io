function unlockOwner() {
    const key = document.getElementById("ownerKey").value;

    if (key === "ajit-owner-2026") {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";
        alert("👑 Owner Access Granted");
    } else {
        alert("❌ Wrong Owner Key");
    }
}
